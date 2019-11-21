import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {StateService} from '../../services/state.service';

@Component({
  selector: 'oc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string;
  public employee$ = this.state.employee$;

  constructor(private router: Router, private state: StateService) { }

  logout() {
    this.router.navigate(['/']).then(() => this.state.employee$.next(''));
  }

  goToOverviewPage() {
    // this.state.fetchTables();
    this.router.navigate(['./overview']);
  }

}
