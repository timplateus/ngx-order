export interface Account {
  id: number;
  name: string;
}

export interface Table {
  id: number;
  name: string;
  accounts: Array<Account>;
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
  menuItems?: Array<MenuItem>;
}

export interface SummaryItem {
  id: number;
  menuItemId: number;
  title: string;
  amount: number;
  remarks: string;
}
