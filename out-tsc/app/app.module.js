var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { MyCoachRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./header.component";
import { WeightsModule } from "./weights/weights.module";
import { ReportsModule } from "./reports/reports.module";
import { TrainingsModule } from "./trainings/tranings.module";
import { PricesModule } from "./prices/prices.module";
import { ServiceInjector } from "./shared/services/service.injector";
import { DictionaryMockService } from "./shared/services/dictionary.mock.service";
import { DictionaryBackEndService } from "./shared/services/dictionary.back-end.service";
import { SharedModule } from "./shared/shared.module";
import { DateService } from "./shared/services/date.service";
import { AboutComponent } from "./about.component";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/app.module.js.map