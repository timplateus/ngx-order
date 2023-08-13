import {Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'oc-add-account',
  styleUrls: ['./add-account.component.scss'],
  templateUrl: './add-account.component.html'
})
export class AddAccountComponent {
  public accountName = '';

  constructor(private dialogRef: MatDialogRef<AddAccountComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
