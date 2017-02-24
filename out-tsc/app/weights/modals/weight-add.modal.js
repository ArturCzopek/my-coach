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
import { Component, EventEmitter } from "@angular/core";
import { WeightsModalsService } from "../services/weights-modals.service";
import { ServiceInjector } from "../../shared/services/service.injector";
import { MODAL_PARAMS } from "../../shared/global.values";
import { NewWeight } from "../../shared/entities/add.entities";
import { DateService } from "../../shared/services/date.service";
var WeightAddModal = (function () {
    function WeightAddModal(weightsModalsService, serviceInjector, dateService) {
        this.weightsModalsService = weightsModalsService;
        this.serviceInjector = serviceInjector;
        this.dateService = dateService;
        this.addModalActions = new EventEmitter();
        this.weightsService = serviceInjector.getWeightsService();
        this.dictionaryService = serviceInjector.getDictionaryService();
        this.weightValue = 50;
        this.measurementDate = '';
    }
    WeightAddModal.prototype.ngOnInit = function () {
        var _this = this;
        this.modalParams = MODAL_PARAMS;
        this.datePickerParams = this.dictionaryService.getDateDictionarySettings();
        this.weightsModalsService.addWeight.subscribe(function () {
            _this.openAddModal();
        });
    };
    WeightAddModal.prototype.openAddModal = function () {
        this.weightValue = 50;
        this.measurementDate = '';
        this.addModalActions.emit({ action: "modal", params: ['open'] });
    };
    WeightAddModal.prototype.onAddClick = function () {
        this.weightToAdd = new NewWeight(this.weightValue, this.dateService.parseStringToDate(this.measurementDate));
        this.weightsService.addWeight(this.weightToAdd);
        this.weightsModalsService.callRefreshPage();
        this.onCloseModal();
    };
    WeightAddModal.prototype.onCloseModal = function () {
        this.addModalActions.emit({ action: "modal", params: ['close'] });
    };
    WeightAddModal.prototype.isDataValid = function () {
        return this.weightValue > 0 && this.dateService.isDateValid(this.measurementDate);
    };
    return WeightAddModal;
}());
WeightAddModal = __decorate([
    Component({
        selector: 'coach-weight-add-modal',
        templateUrl: 'weight-add.modal.html',
        styleUrls: ['weights.modals.scss', '../../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [WeightsModalsService, ServiceInjector,
        DateService])
], WeightAddModal);
export { WeightAddModal };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/weights/modals/weight-add.modal.js.map