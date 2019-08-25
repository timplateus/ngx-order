import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatInputModule, MatToolbarModule} from '@angular/material';

const materialModules = [
  MatInputModule,
  MatToolbarModule,
  MatButtonModule
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
