import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrderModule } from './order/order.module';
import { OverviewModule } from './overview/overview.module';
import { RegistrationModule } from './registration/registration.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OverviewModule,
    OrderModule,
    RegistrationModule,
    SharedModule,
  ],
})
export class PagesModule {}
