import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { AsyncPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
    selector: 'oc-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [
        MatToolbar,
        MatButton,
        AsyncPipe,
    ]
})
export class HeaderComponent {
  @Input() title: string;
  public employee$ = this.state.employee$;

  constructor(
    private router: Router,
    private state: StateService,
  ) {}

  logout() {
    this.state.setEmployee('');
    void this.router.navigate(['/register']);
  }

  goToOverviewPage() {
    // this.state.fetchTables();
    void this.router.navigate(['./overview']);
  }
}
