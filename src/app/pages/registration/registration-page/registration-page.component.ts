import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../shared/services/state.service';
import packageInfo from '../../../../../package.json'
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';

@Component({
    selector: 'oc-registration-page',
    templateUrl: './registration-page.component.html',
    styleUrls: ['./registration-page.component.scss'],
    imports: [
        MatFormField,
        MatInput,
        FormsModule,
        MatButton,
    ]
})
export class RegistrationPageComponent {
  private state = inject(StateService);
  private router = inject(Router);

  public name: string;
  public appVersion = packageInfo.version;

  submitName(name: string) {
    this.state.setEmployee(name);
    this.router.navigate(['../overview']);
  }
}
