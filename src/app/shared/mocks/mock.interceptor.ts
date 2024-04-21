import {
  HttpInterceptorFn,
  HttpResponse,
  HttpStatusCode,
} from '@angular/common/http';
import config from '../../../assets/config.json';
import { of } from 'rxjs';
import { mockApiTables } from './tables.mock';
import { ApiCategory, ApiMenuItem, ApiTables } from '../api-models';
import { mockApiCategories } from './categories.mock';
import { mockApiMenuItems } from './menu-items.mock';

export const mockInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req);
  if (req.url === `${config.apiRootUrl}/tables/withAccountsAndRow`) {
    const response = new HttpResponse<ApiTables>({ body: mockApiTables });
    return of(response);
  }

  if (req.url === `${config.apiRootUrl}/category/all`) {
    const response = new HttpResponse<ApiCategory[]>({
      body: mockApiCategories,
    });
    return of(response);
  }

  if (req.url === `${config.apiRootUrl}/item/all`) {
    const response = new HttpResponse<ApiMenuItem[]>({
      body: mockApiMenuItems,
    });
    return of(response);
  }

  if (req.url === `${config.apiRootUrl}/order/place`) {
    const response = new HttpResponse<void>({ status: HttpStatusCode.Created });
    return of(response);
  }

  return next(req);
};
