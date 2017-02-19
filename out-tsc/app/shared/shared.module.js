var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CircleLoaderComponent } from "./loaders/circle-loader.component";
import { StripLoaderComponent } from "./loaders/strip-loader.component";
import { NgModule } from "@angular/core";
import { ModalFooterComponent } from "./modals/modal-footer.component";
import { ChartsModule } from "ng2-charts";
import { LineChartComponent } from "./charts/line-chart.component";
import { MaterializeDirective } from "angular2-materialize";
import { DictionaryPipe } from "./pipes/dictionary.pipe";
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    NgModule({
        declarations: [
            MaterializeDirective,
            CircleLoaderComponent,
            StripLoaderComponent,
            ModalFooterComponent,
            LineChartComponent,
            DictionaryPipe
        ],
        imports: [
            ChartsModule
        ],
        exports: [
            MaterializeDirective,
            CircleLoaderComponent,
            StripLoaderComponent,
            ModalFooterComponent,
            LineChartComponent,
            DictionaryPipe
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/shared/shared.module.js.map