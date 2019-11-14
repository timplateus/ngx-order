import { Component } from '@angular/core';

@Component({
  selector: 'oc-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent {
  editId: number;
  items: Array<any> = [
    {
      id: 1,
      title: 'Champagne (fles)',
      amount: 2,
      remarks: 'Vier glazen'
    },
    {
      id: 2,
      title: 'Cola',
      amount: 4,
      remarks: 'Één met ijsblokjes'
    },
    {
      id: 3,
      title: 'Spaghetti',
      amount: 3,
      remarks: ''
    }
  ];

  onDelete(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}


