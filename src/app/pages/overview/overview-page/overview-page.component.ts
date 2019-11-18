import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
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

  public tables$: Observable<Array<Array<Table>>> = this.http.tables$;

  constructor(private router: Router, private dialog: MatDialog, private http: StateService) {
  }

  openAddDialog(currentTable: Table) {
    const dialogRef = this.dialog.open(AddAccountComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe((result: string) => this.addAccountToTable(result, currentTable));
  }

  goToOrder(accountId: number) {
    this.router.navigate(['../order']);
  }

  private addAccountToTable(name: string, table: Table): void {
   // TODO: post to '/account/add'
    console.debug(`Add account to table:`);
    console.debug(table);
   //  table.accounts = [...table.accounts, {id: 'new-account', name}];
   this.http.addAccount(table.id, name);
  }
}
