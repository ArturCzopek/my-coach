import {NgModule} from "@angular/core/src/metadata/ng_module";
import {ReportsListComponent} from "./reports-list.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ReportComponent} from "./report.component";

@NgModule({
  declarations: [
    ReportsListComponent,
    ReportComponent],
  imports: [
    HttpModule,
    CommonModule
  ]
})

export class ReportsModule {
}
