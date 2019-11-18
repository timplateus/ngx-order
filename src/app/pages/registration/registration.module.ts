import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {RegistrationPageComponent} from './registration-page/registration-page.component';



@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class RegistrationModule { }
