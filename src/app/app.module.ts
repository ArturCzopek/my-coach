import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {MyCoachRoutingModule} from "./app-routing.module";
import {HeaderComponent} from "./header/header.component";
import {WeightsModule} from "./weights/weights.module";
import {ReportsModule} from "./reports/reports.module";
import {TrainingsModule} from "./trainings/tranings.module";
import {PricesModule} from "./prices/prices.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PricesModule,
    ReportsModule,
    TrainingsModule,
    WeightsModule,
    MyCoachRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
