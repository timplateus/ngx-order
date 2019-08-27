import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationModule} from './registration/registration.module';
import {SharedModule} from '../shared/shared.module';
import {OverviewModule} from './overview/overview.module';
import {OrderModule} from './order/order.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OverviewModule,
    OrderModule,
    RegistrationModule,
    SharedModule
  ]
})
export class PagesModule { }
