import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AppConfig {
  apiRootUrl: string;
}

@Injectable({
  providedIn: "root",
})
export class AppConfigService {
  private appConfig: AppConfig;
  constructor(private http: HttpClient) {}
  loadAppConfig() {
    return this.http
      .get<AppConfig>("/assets/config.json")
      .toPromise()
      .then((data) => {
        this.appConfig = data;
      });
  }
  getRootUrl() {
    if (!this.appConfig) {
      throw Error("Config file not loaded.");
    }
    return this.appConfig.apiRootUrl;
  }
}
