import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationPageComponent} from './registration-page/registration-page.component';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RegistrationModule { }
