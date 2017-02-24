var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:component-class-suffix */
import { Component } from "@angular/core";
import { WeightsModalsService } from "../services/weights-modals.service";
import { EventEmitter } from "@angular/common/src/facade/async";
import { MODAL_PARAMS } from "../../shared/global.values";
import { ServiceInjector } from "../../shared/services/service.injector";
var WeightsDeleteModal = (function () {
    function WeightsDeleteModal(weightsModalsService, serviceInjector) {
        this.weightsModalsService = weightsModalsService;
        this.serviceInjector = serviceInjector;
        this.formattedDays = [];
        this.selectedWeights = [];
        this.checkboxesForWeights = [];
        this.deleteModalActions = new EventEmitter();
        this.weightsToDeleteIndexes = [];
        this.weightsService = serviceInjector.getWeightsService();
        this.dictionaryService = serviceInjector.getDictionaryService();
    }
    WeightsDeleteModal.prototype.ngOnInit = function () {
        var _this = this;
        this.modalParams = MODAL_PARAMS;
        this.weightsModalsService.deleteWeights.subscribe(function (data) {
            _this.selectedWeights = data.weights;
            _this.weightsToDeleteIndexes = [];
            _this.checkboxesForWeights = [];
            if (data.weights) {
                _this.selectedWeights.forEach(function () { return _this.checkboxesForWeights.push(false); });
            }
            _this.modalTitle = data.modalTitle;
            _this.openDeleteModal();
        });
    };
    WeightsDeleteModal.prototype.openDeleteModal = function () {
        if (this.selectedWeights) {
            this.formattedDays = this.weightsService.formatDaysToDisplayingValuesFromWeights(this.selectedWeights);
            this.deleteModalActions.emit({ action: "modal", params: ['open'] });
        }
        else {
            Materialize.toast(this.dictionaryService.getDictionaryValue('page.weights.loadFirst.tooltip'), 3000);
        }
    };
    WeightsDeleteModal.prototype.onDeleteClick = function () {
        var _this = this;
        for (var i = 0; i < this.checkboxesForWeights.length; i++) {
            if (this.checkboxesForWeights[i]) {
                this.weightsToDeleteIndexes.push(i);
            }
        }
        if (this.weightsToDeleteIndexes.length > 0) {
            var weightsToDelete_1 = [];
            this.weightsToDeleteIndexes.forEach(function (index) {
                weightsToDelete_1.push(_this.selectedWeights[index]);
            });
            this.weightsService.deleteWeights(weightsToDelete_1);
            this.weightsModalsService.callRefreshPage();
        }
        this.onCloseModal();
    };
    WeightsDeleteModal.prototype.onCloseModal = function () {
        this.deleteModalActions.emit({ action: "modal", params: ['close'] });
    };
    return WeightsDeleteModal;
}());
WeightsDeleteModal = __decorate([
    Component({
        selector: 'coach-weights-delete-modal',
        templateUrl: 'weights-delete.modal.html',
        styleUrls: ['weights.modals.scss', '../../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [WeightsModalsService, ServiceInjector])
], WeightsDeleteModal);
export { WeightsDeleteModal };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/weights/modals/weights-delete.modal.js.map