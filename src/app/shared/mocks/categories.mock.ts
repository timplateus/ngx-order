import { Category } from '../models';
import { mockMenuItems } from './menu-items.mock';

const createCategory = (id, name) => ({
  id,
  name,
  menuItems: mockMenuItems.filter(({ categoryId }) => categoryId === id),
});

export const mockCategories: Category[] = [
  createCategory(1, 'Eten'),
  createCategory(2, 'Drank'),
];
