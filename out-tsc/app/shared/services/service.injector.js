var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injector, Injectable } from "@angular/core";
import { WeightsBackEndService } from "../../weights/services/weights.back-end.service";
import { WeightsMockService } from "../../weights/services/weights.mock.service";
import { environment } from "../../../environments/environment";
import { ReportBackEndService } from "../../reports/services/report.back-end.service";
import { ReportMockService } from "../../reports/services/report.mock.service";
import { DictionaryMockService } from "./dictionary.mock.service";
import { DictionaryBackEndService } from "./dictionary.back-end.service";
var ServiceInjector = (function () {
    function ServiceInjector(injector) {
        this.injector = injector;
    }
    ServiceInjector.prototype.getWeightsService = function () {
        if (environment.isBackendServerAvailable) {
            return this.injector.get(WeightsBackEndService);
        }
        else {
            return this.injector.get(WeightsMockService);
        }
    };
    ServiceInjector.prototype.getReportService = function () {
        if (environment.isBackendServerAvailable) {
            return this.injector.get(ReportBackEndService);
        }
        else {
            return this.injector.get(ReportMockService);
        }
    };
    ServiceInjector.prototype.getDictionaryService = function () {
        if (environment.isBackendServerAvailable) {
            return this.injector.get(DictionaryBackEndService);
        }
        else {
            return this.injector.get(DictionaryMockService);
        }
    };
    return ServiceInjector;
}());
ServiceInjector = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Injector])
], ServiceInjector);
export { ServiceInjector };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/shared/services/service.injector.js.map