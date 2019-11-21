import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
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
  @Input() menuItemId: number;
  @Input() editMode = false;
  @Output() changed: EventEmitter<SummaryItem> = new EventEmitter();
  @Output() delete: EventEmitter<void> = new EventEmitter();
  constructor(registry: MatIconRegistry, sanitizer: DomSanitizer) {
    registry.addSvgIcon(
      'trash',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/trash.svg')
    );
    registry.addSvgIcon(
      'lessThan',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/chevron-left.svg')
    );
    registry.addSvgIcon(
      'greaterThan',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/chevron-right.svg')
    );
  }

  onValueChange(value: number) {
    this.changed.emit({id: this.id, menuItemId: this.menuItemId, remarks: this.remarks, amount: value, title: this.title});
  }

  deleteClicked(e: Event) {
    e.stopPropagation();
    this.delete.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug(changes);
    if (changes.editMode && changes.editMode.currentValue === false) {
      // this.changed.emit({id: this.id, amount: this.amount, remarks: this.remarks, title: this.title, menuItemId: 0});
    }
  }

  stopPropagate(e: Event) {
    e.stopPropagation();
  }

  clearRemarks(e: Event) {
    e.stopPropagation();
    this.remarks = '';
  }

  remarkChanged(event: any) {
    console.debug(`remark changed from ${this.remarks} to ${event.target.value}`);
    this.changed.emit({id: this.id, menuItemId: this.menuItemId, remarks: event.target.value, amount: this.amount, title: this.title});
  }
}
