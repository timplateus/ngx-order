import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NavigationExtras, Router} from '@angular/router';
import {Observable, Subject, timer} from 'rxjs';
import {Table} from '../../../shared/models';
import {StateService} from '../../../shared/services/state.service';
import {AddAccountComponent} from './components/add-account/add-account.component';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'oc-overview-page',
  styleUrls: ['./overview-page.component.scss'],
  templateUrl: './overview-page.component.html'
})
export class OverviewPageComponent implements OnDestroy {

  public tables$: Observable<Array<Array<Table>>> = this.state.tables$;
  private destroy$: Subject<void> = new Subject();

  constructor(private router: Router, private dialog: MatDialog, private state: StateService) {
    timer(0, 60000).pipe(takeUntil(this.destroy$)).subscribe(() => this.state.fetchTables());
  }

  openAddDialog(currentTable: Table) {
    const dialogRef = this.dialog.open(AddAccountComponent, {
      width: '250px',
      autoFocus: true
    });
    dialogRef.afterClosed().subscribe((result: string) => result && this.addAccountToTable(result, currentTable));
  }

  goToOrder(accountId: number, accountName: string) {
    this.router.navigate(['../order', accountId], {queryParams: {name: accountName}});
  }

  private addAccountToTable(name: string, table: Table): void {
    this.state.addAccount(table.id, name);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
