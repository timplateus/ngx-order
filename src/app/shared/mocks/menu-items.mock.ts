import { MenuItem } from '../models';
import { ApiMenuItem } from '../api-models';
import { mockApiCategories } from './categories.mock';

export const mockMenuItems: MenuItem[] = [
  {
    id: 1,
    name: 'spaghetti',
    price: 8.85,
    categoryId: 1,
  },
  {
    id: 2,
    name: 'cola',
    price: 1.85,
    categoryId: 2,
  },
  {
    id: 3,
    name: 'steak',
    price: 10,
    categoryId: 1,
  },
  {
    id: 4,
    name: 'ballekes',
    price: 9.85,
    categoryId: 1,
  },
  {
    id: 5,
    name: 'Pintje',
    price: 2.0,
    categoryId: 2,
  },
];

export const mockApiMenuItems: ApiMenuItem[] = [
  {
    id: 1,
    category: mockApiCategories.find((cat) => cat.id === 1)!,
    name: 'Spaghetti',
    price: 15,
    nonDefaultPrinterCategory: '',
  },
  {
    id: 2,
    name: 'ballekes',
    price: 9.85,
    category: mockApiCategories.find((cat) => cat.id === 1)!,
    nonDefaultPrinterCategory: '',
  },
  {
    id: 3,
    name: 'steak',
    price: 10,
    category: mockApiCategories.find((cat) => cat.id === 1)!,
    nonDefaultPrinterCategory: '',
  },
  {
    id: 2,
    name: 'cola',
    price: 1.85,
    category: mockApiCategories.find((cat) => cat.id === 2)!,
    nonDefaultPrinterCategory: '',
  },
  {
    id: 5,
    name: 'Pintje',
    price: 2.0,
    category: mockApiCategories.find((cat) => cat.id === 2)!,
    nonDefaultPrinterCategory: '',
  },
];
