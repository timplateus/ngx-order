import { Table } from '../models';
import { mockAccounts } from './accounts.mock';

export const mockTables: Table[][] = [
  [
    {
      id: 1,
      name: 'table1',
      accounts: mockAccounts.filter((acc) => acc.id <= 2),
    },
  ],
  [
    {
      id: 2,
      name: 'table2',
      accounts: mockAccounts.filter((acc) => acc.id > 2),
    },
  ],
];
