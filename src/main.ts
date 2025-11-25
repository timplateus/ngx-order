import { enableProdMode, importProvidersFrom, inject, provideAppInitializer } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { mockInterceptor } from './app/shared/mocks/mock.interceptor';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AppConfigService } from './app/shared/services/app-config.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule),
        provideAppInitializer(() => {
        const initializerFn = ((appConfigService: AppConfigService) => {
                return () => appConfigService.loadAppConfig();
            })(inject(AppConfigService));
        return initializerFn();
      }),
        provideHttpClient(withInterceptors(!environment.production ? [mockInterceptor] : [])),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
    ]
})
  .catch((err) => console.error(err));
