var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { WeightsModalsService } from "./services/weights-modals.service";
import { ServiceInjector } from "../shared/services/service.injector";
var WeightsListComponent = (function () {
    function WeightsListComponent(weightsModalsService, serviceInjector) {
        this.weightsModalsService = weightsModalsService;
        this.serviceInjector = serviceInjector;
        this.weightsService = serviceInjector.getWeightsService();
    }
    WeightsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadWeightsPreviews();
        this.weightsModalsService.refreshPage.subscribe(function () { return _this.ngOnInit(); });
    };
    WeightsListComponent.prototype.loadWeightsPreviews = function () {
        var _this = this;
        this.isLoading = true;
        this.weightsService.getWeightsPreviews()
            .subscribe(function (previews) {
            _this.weightsPreviews = previews;
        }, function () { }, function () {
            _this.isLoading = false;
        });
    };
    WeightsListComponent.prototype.onAddClick = function () {
        this.weightsModalsService.callAddWeight();
    };
    return WeightsListComponent;
}());
WeightsListComponent = __decorate([
    Component({
        selector: 'coach-weights-list',
        templateUrl: './weights-list.component.html',
        styleUrls: ['./weights.scss', '../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [WeightsModalsService, ServiceInjector])
], WeightsListComponent);
export { WeightsListComponent };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/weights/weights-list.component.js.map