import {HttpClient, HttpResponse} from '@angular/common/http';
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
    this.http.post(url, body).subscribe((resp) => console.debug(resp));
    console.debug(this.tables$.value);
    const newTables = this.tables$.value.map((tableRow) =>
      tableRow.map((table: Table) =>
        table.id === tableId
          ? ({...table, accounts: [...table.accounts, {id: tableId, name}]})
          : table
      ));
    this.tables$.next(newTables);
  }

  public submitOrder(items: Array<SummaryItem>, accountId: number): Observable<any> {
    const url = `${this.rootUrl}/order/place`;
    const body = {
      accountId,
      orderItems: items.map((item) => ({itemId: item.menuItemId, quantity: item.amount, note: item.remarks})),
      employee: 'Tim'
    };
    return this.http.post(url, body);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  private getMenuItems(): Observable<Array<MenuItem>> {
    const url = `${this.rootUrl}/item/all`;
    return this.http.get(url).pipe(map(mapToMenuItems));
    return of([{
      id: 1,
      name: 'Pickerel - Fillets',
      price: 5.75,
      categoryId: 3
    },
      {
        id: 2,
        name: 'Soup - Campbells Chili Veg',
        price: 2.74,
        categoryId: 1
      },
      {
        id: 3,
        name: 'Appetizer - Spring Roll, Veg',
        price: 7.44,
        categoryId: 1
      },
      {
        id: 4,
        name: 'Capon - Breast, Double, Wing On',
        price: 2.54,
        categoryId: 3
      },
      {
        id: 5,
        name: 'Pie Filling - Apple',
        price: 7.87,
        categoryId: 4
      },
      {
        id: 6,
        name: 'Oil - Margarine',
        price: 6.93,
        categoryId: 1
      },
      {
        id: 7,
        name: 'Cheese - Havarti, Salsa',
        price: 3.07,
        categoryId: 4
      },
      {
        id: 8,
        name: 'Wine - Red, Harrow Estates, Cab',
        price: 9.43,
        categoryId: 4
      },
      {
        id: 9,
        name: 'Egg Patty Fried',
        price: 9.85,
        categoryId: 1
      },
      {
        id: 10,
        name: 'Cake - French Pear Tart',
        price: 8.73,
        categoryId: 3
      },
      {
        id: 11,
        name: 'Tray - 12in Rnd Blk',
        price: 3.25,
        categoryId: 3
      },
      {
        id: 12,
        name: 'Juice - Orange 1.89l',
        price: 1.16,
        categoryId: 1
      },
      {
        id: 13,
        name: 'Chicken - Breast, 5 - 7 Oz',
        price: 2.03,
        categoryId: 1
      },
      {
        id: 14,
        name: 'Appetizer - Shrimp Puff',
        price: 8.02,
        categoryId: 3
      },
      {
        id: 15,
        name: 'Cheese - Cream Cheese',
        price: 7.24,
        categoryId: 2
      },
      {
        id: 16,
        name: 'Cheese - Comtomme',
        price: 6.68,
        categoryId: 1
      },
      {
        id: 17,
        name: 'Apples - Spartan',
        price: 3.01,
        categoryId: 1
      },
      {
        id: 18,
        name: 'Kellogs Cereal In A Cup',
        price: 3.23,
        categoryId: 1
      },
      {
        id: 19,
        name: 'Squash - Pattypan, Yellow',
        price: 8.29,
        categoryId: 3
      },
      {
        id: 20,
        name: 'Ketchup - Tomato',
        price: 2.85,
        categoryId: 3
      },
      {
        id: 21,
        name: 'Sole - Dover, Whole, Fresh',
        price: 5.02,
        categoryId: 2
      },
      {
        id: 22,
        name: 'Sultanas',
        price: 5.86,
        categoryId: 3
      },
      {
        id: 23,
        name: 'Jello - Assorted',
        price: 9.18,
        categoryId: 4
      },
      {
        id: 24,
        name: 'Corn Shoots',
        price: 4.44,
        categoryId: 4
      },
      {
        id: 25,
        name: 'Beef - Shank',
        price: 5.11,
        categoryId: 3
      }, {
        id: 26,
        name: 'Ecolab - Lime - A - Way 4/4 L',
        price: 6.46,
        categoryId: 3
      }, {
        id: 27,
        name: 'Corn Kernels - Frozen',
        price: 4.12,
        categoryId: 1
      }, {
        id: 28,
        name: 'Salmon - Fillets',
        price: 6.11,
        categoryId: 3
      }, {
        id: 29,
        name: 'Bread - Pita, Mini',
        price: 8.08,
        categoryId: 3
      }, {
        id: 30,
        name: 'Hinge W Undercut',
        price: 3.64,
        categoryId: 3
      }, {
        id: 31,
        name: 'Oil - Shortening,liqud, Fry',
        price: 7.44,
        categoryId: 3
      }, {
        id: 32,
        name: 'Water - Tonic',
        price: 1.85,
        categoryId: 3
      }, {
        id: 33,
        name: 'Cocktail Napkin Blue',
        price: 6.94,
        categoryId: 3
      }, {
        id: 34,
        name: 'Chicken - White Meat, No Tender',
        price: 7.32,
        categoryId: 2
      }, {
        id: 35,
        name: 'Wine - Prem Select Charddonany',
        price: 9.0,
        categoryId: 4
      }, {
        id: 36,
        name: 'Stock - Fish',
        price: 1.92,
        categoryId: 4
      }, {
        id: 37,
        name: 'Muffin Puck Ww Carrot',
        price: 8.98,
        categoryId: 2
      }, {
        id: 38,
        name: 'Wine - Duboeuf Beaujolais',
        price: 5.61,
        categoryId: 3
      }, {
        id: 39,
        name: 'Wine - Cotes Du Rhone Parallele',
        price: 1.71,
        categoryId: 2
      }, {
        id: 40,
        name: 'Oil - Sesame',
        price: 9.62,
        categoryId: 2
      }, {
        id: 41,
        name: 'Arizona - Plum Green Tea',
        price: 5.39,
        categoryId: 2
      }, {
        id: 42,
        name: 'Potatoes - Idaho 100 Count',
        price: 1.08,
        categoryId: 4
      }, {
        id: 43,
        name: 'Sage Ground Wiberg',
        price: 4.65,
        categoryId: 4
      }, {
        id: 44,
        name: 'Muffin Mix - Banana Nut',
        price: 8.46,
        categoryId: 3
      }, {
        id: 45,
        name: 'Zucchini - Green',
        price: 9.08,
        categoryId: 4
      }, {
        id: 46,
        name: 'Tuna - Yellowfin',
        price: 2.52,
        categoryId: 4
      }, {
        id: 47,
        name: 'Tea - Camomele',
        price: 5.51,
        categoryId: 1
      }, {
        id: 48,
        name: 'Beer - Sleemans Cream Ale',
        price: 1.5,
        categoryId: 3
      }, {
        id: 49,
        name: 'Honey - Liquid',
        price: 6.79,
        categoryId: 3
      }, {
        id: 50,
        name: 'Squid - U - 10 Thailand',
        price: 8.73,
        categoryId: 2
      }, {
        id: 51,
        name: 'Strawberries',
        price: 1.11,
        categoryId: 1
      }, {
        id: 52,
        name: 'Flour - Teff',
        price: 7.92,
        categoryId: 2
      }, {
        id: 53,
        name: 'Syrup - Monin - Granny Smith',
        price: 6.56,
        categoryId: 4
      }, {
        id: 54,
        name: 'Red Currants',
        price: 7.49,
        categoryId: 2
      }, {
        id: 55,
        name: 'Creme De Menthe Green',
        price: 5.68,
        categoryId: 3
      }, {
        id: 56,
        name: 'Turnip - Mini',
        price: 6.45,
        categoryId: 4
      }, {
        id: 57,
        name: 'Tart Shells - Savory, 4',
        price: 2.45,
        categoryId: 3
      }, {
        id: 58,
        name: 'Stainless Steel Cleaner Vision',
        price: 3.13,
        categoryId: 4
      }, {
        id: 59,
        name: 'Beef - Bones, Marrow',
        price: 4.93,
        categoryId: 3
      }, {
        id: 60,
        name: 'Snails - Large Canned',
        price: 6.25,
        categoryId: 2
      }, {
        id: 61,
        name: 'Shrimp - Baby, Cold Water',
        price: 1.24,
        categoryId: 4
      }, {
        id: 62,
        name: 'Napkin White',
        price: 8.05,
        categoryId: 3
      }, {
        id: 63,
        name: 'Kellogs All Bran Bars',
        price: 3.01,
        categoryId: 4
      }, {
        id: 64,
        name: 'Oranges',
        price: 1.69,
        categoryId: 1
      }, {
        id: 65,
        name: 'Beets - Golden',
        price: 4.82,
        categoryId: 2
      }, {
        id: 66,
        name: 'Chicken - Wieners',
        price: 2.27,
        categoryId: 2
      }, {
        id: 67,
        name: 'Beer - Alexander Kieths, Pale Ale',
        price: 7.01,
        categoryId: 3
      }, {
        id: 68,
        name: 'Cheese - Grie Des Champ',
        price: 6.69,
        categoryId: 4
      }, {
        id: 69,
        name: 'Beef - Eye Of Round',
        price: 4.52,
        categoryId: 3
      }, {
        id: 70,
        name: 'Spring Roll Veg Mini',
        price: 1.61,
        categoryId: 1
      }, {
        id: 71,
        name: 'Wine - Barossa Valley Estate',
        price: 1.35,
        categoryId: 3
      }, {
        id: 72,
        name: 'Cheese - Cambozola',
        price: 1.61,
        categoryId: 3
      }, {
        id: 73,
        name: 'Tomato - Peeled Italian Canned',
        price: 3.51,
        categoryId: 1
      }, {
        id: 74,
        name: 'Cardamon Ground',
        price: 1.17,
        categoryId: 2
      }, {
        id: 75,
        name: 'Chocolate Bar - Reese Pieces',
        price: 7.24,
        categoryId: 4
      }, {
        id: 76,
        name: 'Eggplant Oriental',
        price: 7.89,
        categoryId: 3
      }, {
        id: 77,
        name: 'Lamb - Leg, Boneless',
        price: 1.35,
        categoryId: 1
      }, {
        id: 78,
        name: 'Asparagus - Frozen',
        price: 1.01,
        categoryId: 2
      }, {
        id: 79,
        name: 'Fork - Plastic',
        price: 6.22,
        categoryId: 4
      }, {
        id: 80,
        name: 'Water - Tonic',
        price: 8.35,
        categoryId: 3
      }, {
        id: 81,
        name: 'Mousse - Banana Chocolate',
        price: 8.39,
        categoryId: 1
      }, {
        id: 82,
        name: 'Extract - Vanilla,artificial',
        price: 9.26,
        categoryId: 4
      }, {
        id: 83,
        name: 'Tomatoes - Plum, Canned',
        price: 5.07,
        categoryId: 1
      }, {
        id: 84,
        name: 'Mushroom - King Eryingii',
        price: 3.45,
        categoryId: 1
      }, {
        id: 85,
        name: 'Hipnotiq Liquor',
        price: 1.08,
        categoryId: 1
      }, {
        id: 86,
        name: 'Wine - Red, Cabernet Sauvignon',
        price: 2.44,
        categoryId: 2
      }, {
        id: 87,
        name: 'Flour Pastry Super Fine',
        price: 1.48,
        categoryId: 1
      }, {
        id: 88,
        name: 'Jolt Cola - Electric Blue',
        price: 1.67,
        categoryId: 4
      }, {
        id: 89,
        name: 'Swiss Chard',
        price: 1.26,
        categoryId: 2
      }, {
        id: 90,
        name: 'Cheese - Brie, Triple Creme',
        price: 5.62,
        categoryId: 1
      }, {
        id: 91,
        name: 'Spring Roll Veg Mini',
        price: 1.33,
        categoryId: 4
      }, {
        id: 92,
        name: 'Quail Eggs - Canned',
        price: 7.43,
        categoryId: 3
      }, {
        id: 93,
        name: 'Pasta - Penne, Rigate, Dry',
        price: 9.9,
        categoryId: 3
      }, {
        id: 94,
        name: 'Shrimp - 16 - 20 Cooked, Peeled',
        price: 3.6,
        categoryId: 4
      }, {
        id: 95,
        name: 'Country Roll',
        price: 5.72,
        categoryId: 2
      }, {
        id: 96,
        name: 'Jameson Irish Whiskey',
        price: 4.62,
        categoryId: 3
      }, {
        id: 97,
        name: 'Veal - Slab Bacon',
        price: 7.49,
        categoryId: 1
      }, {
        id: 98,
        name: 'Longan',
        price: 5.21,
        categoryId: 3
      }, {
        id: 99,
        name: 'Wine - Fat Bastard Merlot',
        price: 6.38,
        categoryId: 4
      }, {
        id: 100,
        name: 'Fish - Base, Bouillion',
        price: 3.22,
        categoryId: 1
      }]);
  }

  private getTables(): Observable<Array<Array<Table>>> {
    const url = `${this.rootUrl}/tables/withAccountsAndRow`;
    return this.http.get(url, ).pipe(
      map(mapToTables)
    );
  }

  private getCategories(): Observable<Array<Category>> {
    const url = `${this.rootUrl}/category/all`;
    return this.http.get(url).pipe(map(mapToCategories));
  }

}
