import { enableProdMode, inject, provideAppInitializer } from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';
import { mockInterceptor } from './app/shared/mocks/mock.interceptor';
import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AppConfigService } from './app/shared/services/app-config.service';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAppInitializer(() => {
      const initializerFn = ((appConfigService: AppConfigService) => {
        return () => appConfigService.loadAppConfig();
      })(inject(AppConfigService));
      return initializerFn();
    }),
    provideHttpClient(
      withInterceptors(!environment.production ? [mockInterceptor] : []),
    ),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
