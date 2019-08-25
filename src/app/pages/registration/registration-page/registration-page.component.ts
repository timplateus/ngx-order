import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'oc-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {

  constructor(private router: Router) { }

  submitName() {
    this.router.navigate(['../overview']);
  }
}
