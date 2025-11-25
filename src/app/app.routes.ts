import { Routes } from '@angular/router';
import { loginGuard } from './shared/guard/login.guard';

export const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'overview',
  },
  {
    path: 'register',
    loadComponent: () =>
      import(
        './pages/registration/registration-page/registration-page.component'
      ).then((m) => m.RegistrationPageComponent),
  },
  {
    path: 'overview',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./pages/overview/overview-page/overview-page.component').then(
        (m) => m.OverviewPageComponent,
      ),
  },
  {
    path: 'order',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./pages/order/order-page/order-page.component').then(
        (m) => m.OrderPageComponent,
      ),
  },
  {
    path: 'order/:id',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./pages/order/order-page/order-page.component').then(
        (m) => m.OrderPageComponent,
      ),
  },
];
