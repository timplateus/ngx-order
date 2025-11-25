import { Component } from '@angular/core';
import { MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';

@Component({
    selector: 'oc-add-account',
    styleUrls: ['./add-account.component.scss'],
    templateUrl: './add-account.component.html',
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatFormField,
        MatInput,
        FormsModule,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ]
})
export class AddAccountComponent {
  public accountName = '';

  constructor(private dialogRef: MatDialogRef<AddAccountComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
