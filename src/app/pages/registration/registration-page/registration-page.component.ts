import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../shared/services/state.service';
import packageInfo from '../../../../../package.json'

@Component({
  selector: 'oc-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent {
  public name: string;
  public appVersion = packageInfo.version;

  constructor(
    private state: StateService,
    private router: Router,
  ) {}

  submitName(name: string) {
    this.state.setEmployee(name);
    this.router.navigate(['../overview']);
  }
}
