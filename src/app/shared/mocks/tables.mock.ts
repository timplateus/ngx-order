import { ApiTables } from '../api-models';

export const mockApiTables: ApiTables = {
  rowsWithAccounts: {
    1: [
      {
        id: 1,
        name: 'table1',
        accounts: [{ tableId: 1, name: 'Plateus' }],
      },
    ],
    2: [
      {
        id: 2,
        name: 'Table 2',
        accounts: [{ tableId: 2, name: 'De Coninck' }],
      },
    ],
  },
};
