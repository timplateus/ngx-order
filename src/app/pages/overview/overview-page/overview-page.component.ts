import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NavigationExtras, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Table} from '../../../shared/models';
import {StateService} from '../../../shared/services/state.service';
import {AddAccountComponent} from './components/add-account/add-account.component';

@Component({
  selector: 'oc-overview-page',
  styleUrls: ['./overview-page.component.scss'],
  templateUrl: './overview-page.component.html'
})
export class OverviewPageComponent {

  public tables$: Observable<Array<Array<Table>>> = this.state.tables$;

  constructor(private router: Router, private dialog: MatDialog, private state: StateService) {
  }

  openAddDialog(currentTable: Table) {
    const dialogRef = this.dialog.open(AddAccountComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe((result: string) => this.addAccountToTable(result, currentTable));
  }

  goToOrder(accountId: number, accountName: string) {
    this.router.navigate(['../order', accountId], {queryParams: {name: accountName}});
  }

  private addAccountToTable(name: string, table: Table): void {
    this.state.addAccount(table.id, name);
  }
}
