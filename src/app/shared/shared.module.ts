import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HeaderComponent } from "./components/header/header.component";
import { NumberPickerComponent } from "./components/number-picker/number-picker.component";

const materialModules = [
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule,
  MatCardModule,
];

@NgModule({
  declarations: [HeaderComponent, NumberPickerComponent],
  imports: [HttpClientModule, CommonModule, ...materialModules],
  exports: [HeaderComponent, NumberPickerComponent, ...materialModules],
})
export class SharedModule {}
