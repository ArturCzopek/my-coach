import {NgModule} from "@angular/core/src/metadata/ng_module";
import {ReportsListComponent} from "./reports-list.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ReportCardComponent} from "./report-card.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {ReportBackEndService} from "./services/report.back-end.service";
import {ReportMockService} from "./services/report.mock.service";

@NgModule({
  declarations: [
    ReportsListComponent,
    ReportCardComponent,
  ],
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    ReportBackEndService,
    ReportMockService
  ]
})
export class ReportsModule {
}
