import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HeaderComponent} from "./header.component";
import {WeightsModule} from "./weights/weights.module";
import {ReportsModule} from "./reports/reports.module";
import {TrainingsModule} from "./trainings/tranings.module";
import {PricesModule} from "./prices/prices.module";
import {SharedModule} from "../shared/shared.module";
import {AboutComponent} from "./about.component";
import {CommonModule} from "@angular/common";
import {DashboardRouting} from "./dashboard.routing";
import {DashboardComponent} from "./dashboard.component";


@NgModule({
  declarations: [
    AboutComponent,
    DashboardComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    DashboardRouting,
    FormsModule,
    HttpModule,
    PricesModule,
    ReportsModule,
    SharedModule,
    TrainingsModule,
    WeightsModule,
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
  ]
})
export class DashboardModule {
}
