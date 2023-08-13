import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";
import { SharedModule } from "../../shared/shared.module";
import { AddAccountComponent } from "./overview-page/components/add-account/add-account.component";
import { OverviewPageComponent } from "./overview-page/overview-page.component";

@NgModule({
  declarations: [OverviewPageComponent, AddAccountComponent],
  imports: [CommonModule, FormsModule, MatDialogModule, SharedModule],
})
export class OverviewModule {}
