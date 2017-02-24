var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WeightsListComponent } from "./weights/weights-list.component";
import { TrainingsComponent } from "./trainings/trainings.component";
import { ReportsListComponent } from "./reports/reports-list.component";
import { PricesListComponent } from "./prices/prices-list.component";
import { AboutComponent } from "./about.component";
var routes = [
    { path: '', redirectTo: '/weights', pathMatch: 'full' },
    { path: 'weights', component: WeightsListComponent },
    { path: 'prices', component: PricesListComponent },
    { path: 'reports', component: ReportsListComponent },
    { path: 'trainings', component: TrainingsComponent },
    { path: 'about', component: AboutComponent }
];
var MyCoachRoutingModule = (function () {
    function MyCoachRoutingModule() {
    }
    return MyCoachRoutingModule;
}());
MyCoachRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
        providers: []
    })
], MyCoachRoutingModule);
export { MyCoachRoutingModule };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/app-routing.module.js.map