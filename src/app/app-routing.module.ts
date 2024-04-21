import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPageComponent } from './pages/order/order-page/order-page.component';
import { OverviewPageComponent } from './pages/overview/overview-page/overview-page.component';
import { RegistrationPageComponent } from './pages/registration/registration-page/registration-page.component';
import { loginGuard } from './shared/guard/login.guard';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'overview',
  },
  {
    path: 'register',
    component: RegistrationPageComponent,
  },
  {
    path: 'overview',
    canActivate: [loginGuard],
    component: OverviewPageComponent,
  },
  {
    path: 'order',
    canActivate: [loginGuard],
    component: OrderPageComponent,
  },
  {
    path: 'order/:id',
    canActivate: [loginGuard],
    component: OrderPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
