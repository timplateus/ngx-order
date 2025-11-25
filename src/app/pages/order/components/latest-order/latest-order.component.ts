import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Order } from '../../../../shared/models';
import { StateService } from '../../../../shared/services/state.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { SummaryItemComponent } from '../summary-item/summary-item.component';

@Component({
    selector: 'oc-latest-order',
    templateUrl: './latest-order.component.html',
    styleUrls: ['./latest-order.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatDialogTitle,
        MatDialogContent,
        SummaryItemComponent,
    ]
})
export class LatestOrderComponent implements OnInit {
  private _data = inject<{
    accountId: number;
}>(MAT_DIALOG_DATA);
  private _dialogRef = inject<MatDialogRef<LatestOrderComponent>>(MatDialogRef);
  private readonly _state = inject(StateService);

  order: Order;

  ngOnInit(): void {
    this.order = this._state.getLatestOrder(this._data.accountId);
  }
}
