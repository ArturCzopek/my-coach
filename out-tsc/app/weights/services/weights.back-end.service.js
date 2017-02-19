var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { WeightsService } from "./weights.service";
import { Injector, Injectable } from "@angular/core";
import { ServiceInjector } from "../../shared/services/service.injector";
var WeightsBackEndService = (function (_super) {
    __extends(WeightsBackEndService, _super);
    function WeightsBackEndService(injector) {
        var _this = _super.call(this, injector.get(ServiceInjector)) || this;
        _this.injector = injector;
        return _this;
    }
    WeightsBackEndService.prototype.getWeightsPreviews = function () {
        console.log('WeightsBackEndService#getWeightsPreviews not implemented yet');
        return null;
    };
    WeightsBackEndService.prototype.getWeights = function (weightsPreview) {
        console.log('WeightsBackEndService#getWeights not implemented yet');
        return null;
    };
    WeightsBackEndService.prototype.getAllDays = function (weights) {
        console.log('WeightsBackEndService#getAllDays not implemented yet');
        return null;
    };
    WeightsBackEndService.prototype.getAllValues = function (weights) {
        console.log('WeightsBackEndService#getAllValues not implemented yet');
        return null;
    };
    WeightsBackEndService.prototype.addWeight = function (weightToAdd) {
        console.log('WeightsBackEndService#addWeights not implemented yet');
    };
    WeightsBackEndService.prototype.editWeights = function (weights) {
        console.log('WeightsBackEndService#editWeights not implemented yet');
    };
    WeightsBackEndService.prototype.deleteWeights = function (weights) {
        console.log('WeightsBackEndService#deleteWeights not implemented yet');
    };
    return WeightsBackEndService;
}(WeightsService));
WeightsBackEndService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Injector])
], WeightsBackEndService);
export { WeightsBackEndService };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/weights/services/weights.back-end.service.js.map