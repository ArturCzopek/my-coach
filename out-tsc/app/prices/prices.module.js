var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core/src/metadata/ng_module";
import { PricesComponent } from "./prices.component";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
var PricesModule = (function () {
    function PricesModule() {
    }
    return PricesModule;
}());
PricesModule = __decorate([
    NgModule({
        declarations: [PricesComponent],
        imports: [
            HttpModule,
            CommonModule
        ]
    })
], PricesModule);
export { PricesModule };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/prices/prices.module.js.map