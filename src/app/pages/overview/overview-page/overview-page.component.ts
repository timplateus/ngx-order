import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Table } from '../../../shared/models';
import { StateService } from '../../../shared/services/state.service';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { AsyncPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardFooter } from '@angular/material/card';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
    selector: 'oc-overview-page',
    styleUrls: ['./overview-page.component.scss'],
    templateUrl: './overview-page.component.html',
    standalone: true,
    imports: [
        HeaderComponent,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatDivider,
        MatButton,
        MatCardFooter,
        AsyncPipe,
    ],
})
export class OverviewPageComponent implements OnDestroy {
  public tables$: Observable<Array<Array<Table>>> = this.state.tables$;
  private destroy$: Subject<void> = new Subject();

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private state: StateService,
  ) {
    timer(0, 60000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.state.fetchTables());
  }

  openAddDialog(currentTable: Table) {
    const dialogRef = this.dialog.open(AddAccountComponent, {
      width: '260px',
      autoFocus: true,
    });
    dialogRef
      .afterClosed()
      .subscribe(
        (result: string) =>
          result && this.addAccountToTable(result, currentTable),
      );
  }

  goToOrder(accountId: number, accountName: string) {
    this.router.navigate(['../order', accountId], {
      queryParams: { name: accountName },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  private addAccountToTable(name: string, table: Table): void {
    this.state.addAccount(table.id, name);
  }
}
