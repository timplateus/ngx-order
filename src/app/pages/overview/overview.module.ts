import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [OverviewPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class OverviewModule { }
