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
import { Component, Input } from "@angular/core";
import { WeightsPreview } from "../shared/entities/preview.entities";
import { WeightsModalsService } from "./services/weights-modals.service";
import { ServiceInjector } from "../shared/services/service.injector";
import { BaseCardComponent } from "../shared/components/base-card.component";
var WeightsCardComponent = (function (_super) {
    __extends(WeightsCardComponent, _super);
    function WeightsCardComponent(weightsModalsService, serviceInjector) {
        var _this = _super.call(this) || this;
        _this.weightsModalsService = weightsModalsService;
        _this.serviceInjector = serviceInjector;
        _this.chartData = [];
        _this.chartLabels = [];
        _this.weightsService = serviceInjector.getWeightsService();
        _this.dictionaryService = serviceInjector.getDictionaryService();
        return _this;
    }
    WeightsCardComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.weights = null;
        this.previewTitle = this.weightsService.getPreviewTitle(this.weightsPreview);
    };
    WeightsCardComponent.prototype.onWeightsClick = function () {
        var _this = this;
        this.toggleShow();
        if (this.showData) {
            if (this.weights == null) {
                this.weightsService.getWeights(this.weightsPreview)
                    .subscribe(function (weights) {
                    _this.weights = weights;
                    _this.weightsDays = _this.weightsService.getAllDays(_this.weights);
                    _this.weightsValues = _this.weightsService.getAllValues(_this.weights);
                    _this.chartData = [
                        { data: _this.weightsValues, label: _this.dictionaryService.getDictionaryValue('page.weights.chart.point.label') }
                    ];
                    _this.chartLabels = _this.weightsService.formatDaysToDisplayingValues(_this.weightsDays);
                }, function () { }, function () {
                    _this.isLoading = false;
                });
            }
        }
    };
    WeightsCardComponent.prototype.onEditClick = function () {
        this.weightsModalsService.callEditWeights(this.weights, this.previewTitle);
    };
    WeightsCardComponent.prototype.onDeleteClick = function () {
        this.weightsModalsService.callDeleteWeights(this.weights, this.previewTitle);
    };
    return WeightsCardComponent;
}(BaseCardComponent));
__decorate([
    Input(),
    __metadata("design:type", WeightsPreview)
], WeightsCardComponent.prototype, "weightsPreview", void 0);
WeightsCardComponent = __decorate([
    Component({
        selector: 'coach-weights-card',
        templateUrl: 'weights-card.component.html',
        styleUrls: ['./weights.scss', '../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [WeightsModalsService, ServiceInjector])
], WeightsCardComponent);
export { WeightsCardComponent };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/weights/weights-card.component.js.map