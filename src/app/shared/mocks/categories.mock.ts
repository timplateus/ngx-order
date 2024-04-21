import { Category } from '../models';
import { ApiCategory } from '../api-models';

// const createCategory = (id, name) => ({
//   id,
//   name,
//   menuItems: mockMenuItems.filter(({ categoryId }) => categoryId === id),
// });

export const mockCategories: Category[] = [
  // createCategory(1, 'Eten'),
  // createCategory(2, 'Drank'),
];

export const mockApiCategories: ApiCategory[] = [
  {
    id: 1,
    name: 'Eten',
    defaultPrintCategory: '',
  },
  {
    id: 2,
    name: 'Drank',
    defaultPrintCategory: '',
  },
];
