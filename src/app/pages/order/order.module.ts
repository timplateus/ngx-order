import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatGridListModule, MatListModule, MatTabsModule} from '@angular/material';
import {SharedModule} from '../../shared/shared.module';
import { OrderPageComponent } from './order-page/order-page.component';



@NgModule({
  declarations: [OrderPageComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule,
    SharedModule
  ]
})
export class OrderModule { }
