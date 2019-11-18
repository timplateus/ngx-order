import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {SummaryItem} from '../../../../shared/models';

@Component({
  selector: 'oc-summary-item',
  templateUrl: './summary-item.component.html',
  styleUrls: ['./summary-item.component.scss']
})
export class SummaryItemComponent implements OnChanges {
  @Input() id: number;
  @Input() title: string;
  @Input() amount: number;
  @Input() remarks: string;
  @Input() editMode = false;
  @Output() leave: EventEmitter<SummaryItem> = new EventEmitter();
  @Output() delete: EventEmitter<void> = new EventEmitter();
  constructor() { }

  onValueChange(value: number) {
    this.amount = value;
  }

  deleteClicked(e: Event) {
    e.stopPropagation();
    this.delete.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug(changes);
    if (changes.editMode && changes.editMode.currentValue === false) {
      this.leave.emit({id: this.id, amount: this.amount, remarks: this.remarks, title: this.title, menuItemId: 0});
    }
  }

  stopPropagate(e: Event) {
    e.stopPropagation();
  }

  clearRemarks(e: Event) {
    e.stopPropagation();
    this.remarks = '';
  }
}
