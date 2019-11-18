import {HttpClient} from '@angular/common/http';
import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of, Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {mapToCategories, mapToMenuItems, mapToTables} from '../maps';
import {Category, MenuItem, SummaryItem, Table} from '../models';

@Injectable({
  providedIn: 'root'
})
export class StateService implements OnDestroy {

  public tables$: BehaviorSubject<Array<Array<Table>>> = new BehaviorSubject([]);
  public categories$: BehaviorSubject<Array<Category>> = new BehaviorSubject([]);
  public menuItems$: BehaviorSubject<Array<MenuItem>> = new BehaviorSubject([]);
  public employee$: BehaviorSubject<string> = new BehaviorSubject('');

  public categoriesWithItems$ = combineLatest(this.categories$, this.menuItems$).pipe(map(([categories, menuItems]): Array<Category> =>
    categories.map((category) => ({...category, menuItems: menuItems.filter((item) => item.categoryId === category.id)}))
  ));

  private rootUrl = 'http://ec2-3-17-69-11.us-east-2.compute.amazonaws.com:8080';

  private destroy$: Subject<void> = new Subject();

  constructor(private http: HttpClient) {
    this.getTables().pipe(takeUntil(this.destroy$)).subscribe((tables) => this.tables$.next(tables));
    this.getCategories().pipe(takeUntil(this.destroy$)).subscribe((categories) => this.categories$.next(categories));
    this.getMenuItems().pipe(takeUntil(this.destroy$)).subscribe((menuItems) => this.menuItems$.next(menuItems));
  }

  public addAccount(tableId: number, name: string): void {
    const url = `${this.rootUrl}/account/add`;
    const body = {
      tableId,
      accountIdentifier: name
    };
    this.http.post(url, body).pipe(
      map((response: any) =>
        this.tables$.value.map((tableRow) =>
          tableRow.map((table: Table) =>
            table.id === tableId
              ? ({...table, accounts: [...table.accounts, {id: response.id, name}]})
              : table
          ))))
      .subscribe((tables) => this.tables$.next(tables));
  }

  public submitOrder(items: Array<SummaryItem>, accountId: number): Observable<any> {
    const url = `${this.rootUrl}/order/place`;
    const body = {
      accountId,
      orderItems: items.map((item) => ({itemId: item.menuItemId, quantity: item.amount, note: item.remarks})),
      employee: this.employee$.value
    };
    return this.http.post(url, body);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  private getMenuItems(): Observable<Array<MenuItem>> {
    const url = `${this.rootUrl}/item/all`;
    return this.http.get(url).pipe(map(mapToMenuItems));
  }

  private getTables(): Observable<Array<Array<Table>>> {
    const url = `${this.rootUrl}/tables/withAccountsAndRow`;
    return this.http.get(url).pipe(
      map(mapToTables)
    );
  }

  private getCategories(): Observable<Array<Category>> {
    const url = `${this.rootUrl}/category/all`;
    return this.http.get(url).pipe(map(mapToCategories));
  }
}
