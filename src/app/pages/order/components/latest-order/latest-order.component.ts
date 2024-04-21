import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { Order } from '../../../../shared/models';
import { StateService } from '../../../../shared/services/state.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'oc-latest-order',
  templateUrl: './latest-order.component.html',
  styleUrls: ['./latest-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LatestOrderComponent implements OnInit {
  order: Order;

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: { accountId: number },
    private _dialogRef: MatDialogRef<LatestOrderComponent>,
    private readonly _state: StateService,
  ) {}

  ngOnInit(): void {
    this.order = this._state.getLatestOrder(this._data.accountId);
  }
}
