import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { SummaryItem } from '../../../shared/models';
import { StateService } from '../../../shared/services/state.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { LatestOrderComponent } from '../components/latest-order/latest-order.component';

@Component({
  selector: 'oc-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent implements OnDestroy {
  public editId: number;
  public summaryItems: Array<SummaryItem> = [];
  public accountId = this.route.snapshot.params.id;

  public categories$ = this.state.categoriesWithItems$;
  public accountName$ = this.route.queryParams.pipe(
    map((params) => params.name),
  );

  public buttonActive = false;

  constructor(
    private state: StateService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    registry: MatIconRegistry,
    sanitizer: DomSanitizer,
  ) {
    registry.addSvgIcon(
      'receipt',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/receipt.svg'),
    );
  }

  hasLatestOrder(): boolean {
    return this.state.hasLatestOrder(this.accountId);
  }

  onDelete(id: number) {
    this.summaryItems = this.summaryItems.filter((item) => item.id !== id);
  }

  ngOnDestroy(): void {
    console.debug(this.summaryItems);
  }

  onRemarksChanged(item: SummaryItem) {
    console.debug(`remarks changed`);
    console.debug(item);
    console.debug(this.summaryItems);
    this.summaryItems = this.summaryItems.map((summaryItem) =>
      summaryItem.id === item.id ? item : summaryItem,
    );
  }

  addSummaryItem(menuItemId: number, name: string) {
    this.buttonActive = true;
    const latestId = this.summaryItems.reduce(
      (id, item) => (item && item.id > id ? item.id : id),
      0,
    );
    const idx = this.summaryItems.findIndex((item) => item.title === name);
    if (idx > -1) {
      this.summaryItems[idx].amount++;
    } else {
      this.summaryItems.push({
        id: latestId + 1,
        menuItemId,
        title: name,
        amount: 1,
        remarks: '',
      });
    }
  }

  toggleEditMode(id: number) {
    this.editId = id !== this.editId ? id : null;
  }

  submitOrder() {
    this.buttonActive = false;
    this.state.submitOrder(this.summaryItems, this.accountId).subscribe(
      () => {
        this.buttonActive = true;
        void this.router.navigate(['/overview']);
      },
      (error) => {
        alert(error.message);
        this.buttonActive = true;
      },
    );
  }

  openLatestOrderDialog() {
    this.dialog.open(LatestOrderComponent, {
      autoFocus: true,
      minWidth: '350px',
      data: { accountId: this.accountId },
    });
  }
}
