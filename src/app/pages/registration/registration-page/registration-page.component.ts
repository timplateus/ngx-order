import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {StateService} from '../../../shared/services/state.service';

@Component({
  selector: 'oc-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {

  public name: string;

  constructor(private state: StateService, private router: Router) { }

  submitName(name: string) {
    this.state.employee$.next(name);
    this.router.navigate(['../overview']);
  }
}
