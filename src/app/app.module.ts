import {BrowserModule} from "@angular/platform-browser";
import {APP_INITIALIZER, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {MyCoachRoutingModule} from "./app-routing.module";
import {HeaderComponent} from "./header.component";
import {WeightsModule} from "./weights/weights.module";
import {ReportsModule} from "./reports/reports.module";
import {TrainingsModule} from "./trainings/tranings.module";
import {PricesModule} from "./prices/prices.module";
import {ServiceInjector} from "./shared/services/service.injector";
import {DictionaryMockService} from "./shared/services/dictionary.mock.service";
import {DictionaryBackEndService} from "./shared/services/dictionary.back-end.service";
import {SharedModule} from "./shared/shared.module";
import {DateService} from "./shared/services/date.service";
import {AboutComponent} from "./about.component";
import {ConfigService} from "./config.service";

function loadInitialConfiguration(config: ConfigService) {
  return () => config.loadConfiguration();
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PricesModule,
    ReportsModule,
    TrainingsModule,
    WeightsModule,
    SharedModule,
    MyCoachRoutingModule
  ],
  providers: [
    ServiceInjector,
    DateService,
    DictionaryMockService,
    DictionaryBackEndService,
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadInitialConfiguration,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
