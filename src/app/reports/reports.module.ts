import {NgModule} from "@angular/core/src/metadata/ng_module";
import {ReportsListComponent} from "./reports-list.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ReportComponent} from "./report.component";
import {ReportService} from "./report.service";
import {UtilsModule} from "../utils/utils.module";
import {MaterializeDirective} from "angular2-materialize";

@NgModule({
  providers: [
    ReportService
  ],
  declarations: [
    ReportsListComponent,
    ReportComponent,
    MaterializeDirective
  ],
  imports: [
    HttpModule,
    CommonModule,
    UtilsModule
  ]
})

export class ReportsModule {
}
