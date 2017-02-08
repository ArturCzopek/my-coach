import {NgModule} from "@angular/core/src/metadata/ng_module";
import {ReportsListComponent} from "./reports-list.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ReportCardComponent} from "./report-card.component";
import {ReportService} from "./report.service";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  providers: [
    ReportService
  ],
  declarations: [
    ReportsListComponent,
    ReportCardComponent,
  ],
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class ReportsModule {
}
