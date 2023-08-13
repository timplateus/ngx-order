import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PagesModule } from "./pages/pages.module";
import { AppConfigService } from "./shared/services/app-config.service";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PagesModule,
    SharedModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        return () => appConfigService.loadAppConfig();
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
