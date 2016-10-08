import {NgModule} from "@angular/core/src/metadata/ng_module";
import {ReportsComponent} from "./reports.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    HttpModule,
    CommonModule
  ]
})

export class ReportsModule {}
