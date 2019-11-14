import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'oc-summary-item',
  templateUrl: './summary-item.component.html',
  styleUrls: ['./summary-item.component.scss']
})
export class SummaryItemComponent {
  @Input() title: string;
  @Input() amount: number;
  @Input() remarks: string;
  @Input() editMode = false;
  @Output() delete: EventEmitter<void> = new EventEmitter();
  constructor() { }

  onValueChange(value: number) {
    this.amount = value;
  }

  deleteClicked() {
    this.delete.emit();
  }
}
