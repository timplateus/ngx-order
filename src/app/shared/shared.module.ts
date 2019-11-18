import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { NumberPickerComponent } from './components/number-picker/number-picker.component';

const materialModules = [
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule,
  MatCardModule
];

@NgModule({
  declarations: [HeaderComponent, NumberPickerComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ...materialModules
  ],
  exports: [
    HeaderComponent,
    NumberPickerComponent,
    ...materialModules
  ]
})
export class SharedModule { }
