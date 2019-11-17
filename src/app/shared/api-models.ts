export interface ApiAccount {
  tableId: number;
  name: string;
}

export interface ApiCategory {
  id: number;
  name: string;
  defaultPrintCategory: string;
}

export interface ApiTable {
  name: string;
  id: number;
  accounts: Array<ApiAccount>;
}

export interface ApiMenuItem {
  id: number;
  name: string;
  price: number;
  nonDefaultPrinterCategory: string;
  category: ApiCategory;
}

export interface ApiTables {
  rowsWithAccounts: { [rowId: number]: Array<ApiTable> };
}
