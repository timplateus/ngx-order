import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationPageComponent} from './pages/registration/registration-page/registration-page.component';
import {OverviewPageComponent} from './pages/overview/overview-page/overview-page.component';


const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'register'
  },
  {
    path: 'register',
    component: RegistrationPageComponent
  },
  {
    path: 'overview',
    component: OverviewPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
