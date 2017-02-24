var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
var WeightsModalsService = (function () {
    function WeightsModalsService() {
        this.addWeight = new Subject();
        this.editWeights = new Subject();
        this.deleteWeights = new Subject();
        this.refreshPage = new Subject();
    }
    WeightsModalsService.prototype.callAddWeight = function () {
        this.addWeight.next(null);
    };
    WeightsModalsService.prototype.callEditWeights = function (weights, modalTitle) {
        this.editWeights.next({ weights: weights, modalTitle: modalTitle });
    };
    WeightsModalsService.prototype.callDeleteWeights = function (weights, modalTitle) {
        this.deleteWeights.next({ weights: weights, modalTitle: modalTitle });
    };
    WeightsModalsService.prototype.callRefreshPage = function () {
        this.refreshPage.next(null);
    };
    return WeightsModalsService;
}());
WeightsModalsService = __decorate([
    Injectable()
], WeightsModalsService);
export { WeightsModalsService };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/weights/services/weights-modals.service.js.map