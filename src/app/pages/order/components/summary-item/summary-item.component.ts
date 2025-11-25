import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatIconRegistry, MatIcon } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SummaryItem } from '../../../../shared/models';
import { MatIconButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { NumberPickerComponent } from '../../../../shared/components/number-picker/number-picker.component';

@Component({
    selector: 'oc-summary-item',
    templateUrl: './summary-item.component.html',
    styleUrls: ['./summary-item.component.scss'],
    standalone: true,
    imports: [
        MatIcon,
        NumberPickerComponent,
        MatFormField,
        MatLabel,
        MatInput,
        MatIconButton,
        MatSuffix,
    ],
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

  @HostBinding('class.summary') summaryClass = true;
  constructor(registry: MatIconRegistry, sanitizer: DomSanitizer) {
    registry.addSvgIcon(
      'trash',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/trash.svg'),
    );
    registry.addSvgIcon(
      'lessThan',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/chevron-left.svg'),
    );
    registry.addSvgIcon(
      'greaterThan',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/chevron-right.svg'),
    );
    registry.addSvgIcon(
      'close',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/close.svg'),
    );
  }

  onValueChange(value: number) {
    this.changed.emit({
      id: this.id,
      menuItemId: this.menuItemId,
      remarks: this.remarks,
      amount: value,
      title: this.title,
    });
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

  remarkChanged(event: Event) {
    const value = (<HTMLInputElement>event.target).value;
    console.debug(`remark changed from ${this.remarks} to ${value}`);
    this.changed.emit({
      id: this.id,
      menuItemId: this.menuItemId,
      remarks: value,
      amount: this.amount,
      title: this.title,
    });
  }
}
