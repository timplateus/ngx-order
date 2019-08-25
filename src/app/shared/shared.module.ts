import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatDividerModule, MatInputModule, MatToolbarModule} from '@angular/material';

const materialModules = [
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})
export class SharedModule { }
