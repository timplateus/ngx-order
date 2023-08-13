import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import {SharedModule} from '../../shared/shared.module';
import { SummaryItemComponent } from './components/summary-item/summary-item.component';
import { OrderPageComponent } from './order-page/order-page.component';



@NgModule({
  declarations: [OrderPageComponent, SummaryItemComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    SharedModule
  ]
})
export class OrderModule { }
