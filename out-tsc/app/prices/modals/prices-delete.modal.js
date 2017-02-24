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
import { PricesModalsService } from "../services/prices-modals.service";
import { ServiceInjector } from "../../shared/services/service.injector";
import { DateService } from "../../shared/services/date.service";
import { MODAL_PARAMS } from "../../shared/global.values";
var PricesDeleteModal = (function () {
    function PricesDeleteModal(pricesModalsService, serviceInjector, dateService) {
        this.pricesModalsService = pricesModalsService;
        this.serviceInjector = serviceInjector;
        this.dateService = dateService;
        this.selectedPrices = [];
        this.checkboxesForPrices = [];
        this.deleteModalActions = new EventEmitter();
        this.pricesToDeleteIndexes = [];
        this.pricesService = serviceInjector.getPricesService();
        this.dictionaryService = serviceInjector.getDictionaryService();
    }
    PricesDeleteModal.prototype.ngOnInit = function () {
        var _this = this;
        this.modalParams = MODAL_PARAMS;
        this.pricesModalsService.deletePrices.subscribe(function (data) {
            _this.selectedPrices = data.prices;
            _this.pricesToDeleteIndexes = [];
            _this.checkboxesForPrices = [];
            if (_this.selectedPrices) {
                _this.selectedPrices.forEach(function () { return _this.checkboxesForPrices.push(false); });
            }
            _this.modalTitle = data.modalTitle;
            _this.openDeleteModal();
        });
    };
    PricesDeleteModal.prototype.openDeleteModal = function () {
        this.deleteModalActions.emit({ action: "modal", params: ['open'] });
    };
    PricesDeleteModal.prototype.onDeleteClick = function () {
        var _this = this;
        for (var i = 0; i < this.checkboxesForPrices.length; i++) {
            if (this.checkboxesForPrices[i]) {
                this.pricesToDeleteIndexes.push(i);
            }
        }
        if (this.pricesToDeleteIndexes.length > 0) {
            var pricesToDelete_1 = [];
            this.pricesToDeleteIndexes.forEach(function (index) {
                pricesToDelete_1.push(_this.selectedPrices[index]);
            });
            this.pricesService.deletePrices(pricesToDelete_1);
            this.pricesModalsService.callRefreshPage();
        }
        this.onCloseModal();
    };
    PricesDeleteModal.prototype.onCloseModal = function () {
        this.deleteModalActions.emit({ action: "modal", params: ['close'] });
    };
    PricesDeleteModal.prototype.getDateAsString = function (date) {
        return this.dateService.parseDateToString(date);
    };
    return PricesDeleteModal;
}());
PricesDeleteModal = __decorate([
    Component({
        selector: 'coach-prices-delete-modal',
        templateUrl: 'prices-delete.modal.html',
        styleUrls: ['prices.modals.scss', '../../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [PricesModalsService, ServiceInjector,
        DateService])
], PricesDeleteModal);
export { PricesDeleteModal };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/prices/modals/prices-delete.modal.js.map