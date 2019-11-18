import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {SummaryItem} from '../../../shared/models';
import {StateService} from '../../../shared/services/state.service';

@Component({
  selector: 'oc-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnDestroy {

  public editId: number;
  public summaryItems: Array<SummaryItem> = [];

  public categories$ = this.http.categoriesWithItems$;

  constructor(private http: StateService, private router: Router) {}

  onDelete(id: number) {
    this.summaryItems = this.summaryItems.filter((item) => item.id !== id);
  }

  ngOnDestroy(): void {
    console.debug(this.summaryItems);
  }

  onLeave(item: SummaryItem) {
    // this.summaryItems = this.summaryItems.reduce((acc, it) => it.id === item.id ? [...acc, it] : acc, []);
  }

  addSummaryItem(menuItemId: number, name: string) {
    const latestId = this.summaryItems.reduce((id, item) => item && item.id > id ? item.id : id , 0);
    const idx = this.summaryItems.findIndex((item) => item.title === name);
    if (idx > -1) {
      this.summaryItems[idx].amount++;
    } else {
      this.summaryItems.push({
        id: latestId + 1,
        menuItemId,
        title: name,
        amount: 1,
        remarks: ''
      });
    }
  }

  toggleEditMode(id: number) {
    this.editId = id !== this.editId ? id : null;
  }

  submitOrder() {
    this.http.submitOrder(this.summaryItems, 40).subscribe(
      () => this.router.navigate(['/overview']),
      (error) => alert(error.message)
    );
  }
}


