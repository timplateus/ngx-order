import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule, MatDividerModule, MatInputModule, MatToolbarModule} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';

const materialModules = [
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule,
  MatCardModule
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    HeaderComponent,
    ...materialModules
  ]
})
export class SharedModule { }
