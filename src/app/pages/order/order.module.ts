import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatFormFieldModule, MatGridListModule, MatListModule, MatTabsModule} from '@angular/material';
import {SharedModule} from '../../shared/shared.module';
import { SummaryItemComponent } from './components/summary-item/summary-item.component';
import { OrderPageComponent } from './order-page/order-page.component';



@NgModule({
  declarations: [OrderPageComponent, SummaryItemComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule,
    SharedModule
  ]
})
export class OrderModule { }
