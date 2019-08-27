import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import {SharedModule} from '../../shared/shared.module';
import { AddAccountComponent } from './overview-page/components/add-account/add-account.component';



@NgModule({
  declarations: [OverviewPageComponent, AddAccountComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class OverviewModule { }
