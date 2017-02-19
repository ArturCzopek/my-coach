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
import { MODAL_PARAMS, DOES_NOT_CONTAIN } from "../../shared/global.values";
import { ServiceInjector } from "../../shared/services/service.injector";
var WeightsEditModal = (function () {
    function WeightsEditModal(weightsModalsService, serviceInjector) {
        this.weightsModalsService = weightsModalsService;
        this.serviceInjector = serviceInjector;
        this.formattedDays = [];
        this.selectedWeights = [];
        this.editModalActions = new EventEmitter();
        this.weightsToEditIndexes = [];
        this.weightsService = serviceInjector.getWeightsService();
        this.dictionaryService = serviceInjector.getDictionaryService();
    }
    WeightsEditModal.prototype.ngOnInit = function () {
        var _this = this;
        this.modalParams = MODAL_PARAMS;
        this.weightsModalsService.editWeights.subscribe(function (data) {
            _this.selectedWeights = data.weights;
            _this.weightsToEditIndexes = [];
            _this.modalTitle = data.modalTitle;
            _this.openEditModal();
        });
    };
    WeightsEditModal.prototype.openEditModal = function () {
        if (this.selectedWeights) {
            this.formattedDays = this.weightsService.formatDaysToDisplayingValuesFromWeights(this.selectedWeights);
            this.editModalActions.emit({ action: "modal", params: ['open'] });
        }
        else {
            Materialize.toast(this.dictionaryService.getDictionaryValue('page.weights.loadFirst.tooltip'), 3000);
        }
    };
    WeightsEditModal.prototype.onEditClick = function () {
        var _this = this;
        if (this.weightsToEditIndexes.length > 0) {
            var weightsToEdit_1 = [];
            this.weightsToEditIndexes.forEach(function (index) {
                weightsToEdit_1.push(_this.selectedWeights[index]);
                _this.weightsService.editWeights(weightsToEdit_1);
            });
            this.weightsModalsService.callRefreshPage();
        }
        this.onCloseModal();
    };
    WeightsEditModal.prototype.onCloseModal = function () {
        this.editModalActions.emit({ action: "modal", params: ['close'] });
    };
    WeightsEditModal.prototype.addDayIndexToChanged = function (dateIndex) {
        if (this.weightsToEditIndexes.indexOf(dateIndex) === DOES_NOT_CONTAIN) {
            this.weightsToEditIndexes.push(dateIndex);
        }
    };
    return WeightsEditModal;
}());
WeightsEditModal = __decorate([
    Component({
        selector: 'coach-weights-edit-modal',
        templateUrl: 'weights-edit.modal.html',
        styleUrls: ['weights.modals.scss', '../../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [WeightsModalsService, ServiceInjector])
], WeightsEditModal);
export { WeightsEditModal };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/weights/modals/weights-edit.modal.js.map