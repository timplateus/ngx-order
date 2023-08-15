import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPageComponent } from './pages/order/order-page/order-page.component';
import { OverviewPageComponent } from './pages/overview/overview-page/overview-page.component';
import { RegistrationPageComponent } from './pages/registration/registration-page/registration-page.component';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'register',
  },
  {
    path: 'register',
    component: RegistrationPageComponent,
  },
  {
    path: 'overview',
    component: OverviewPageComponent,
  },
  {
    path: 'order',
    component: OrderPageComponent,
  },
  {
    path: 'order/:id',
    component: OrderPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
