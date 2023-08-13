import {
  ApiAccount,
  ApiCategory,
  ApiMenuItem,
  ApiTable,
  ApiTables,
} from "./api-models";
import { Category, MenuItem, Table } from "./models";

export const mapToTables = (response: ApiTables): Array<Array<Table>> =>
  response.rowsWithAccounts
    ? Object.values(response.rowsWithAccounts).map((row: Array<ApiTable>) =>
        row.map((table: ApiTable) => ({
          id: table.id,
          name: table.name,
          accounts: table.accounts.map((account: ApiAccount) => ({
            id: account.tableId,
            name: account.name,
          })),
        })),
      )
    : [[]];

export const mapToCategories = (
  response: Array<ApiCategory>,
): Array<Category> =>
  response.map((category) => ({ id: category.id, name: category.name }));

export const mapToMenuItems = (response: Array<ApiMenuItem>): Array<MenuItem> =>
  response.map((menuItem) => ({
    categoryId: menuItem.category.id,
    id: menuItem.id,
    name: menuItem.name,
    price: menuItem.price,
  }));
