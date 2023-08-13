import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "oc-number-picker",
  templateUrl: "./number-picker.component.html",
  styleUrls: ["./number-picker.component.scss"],
})
export class NumberPickerComponent {
  @Input() value = 1;
  @Output() changed: EventEmitter<number> = new EventEmitter();

  changeValue(e: Event, by: number) {
    e.stopPropagation();
    if (!(by === -1 && this.value === 1)) {
      this.changed.emit(this.value + by);
    }
  }
}
