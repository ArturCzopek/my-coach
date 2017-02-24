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
import { MODAL_PARAMS, DOES_NOT_CONTAIN } from "../../shared/global.values";
var PricesEditModal = (function () {
    function PricesEditModal(pricesModalsService, serviceInjector) {
        this.pricesModalsService = pricesModalsService;
        this.serviceInjector = serviceInjector;
        this.selectedPrices = [];
        this.editModalActions = new EventEmitter();
        this.pricesToEditIndexes = [];
        this.pricesService = serviceInjector.getPricesService();
        this.dictionaryService = serviceInjector.getDictionaryService();
    }
    PricesEditModal.prototype.ngOnInit = function () {
        var _this = this;
        this.modalParams = MODAL_PARAMS;
        this.pricesModalsService.editPrices.subscribe(function (data) {
            _this.selectedPrices = data.prices;
            _this.pricesToEditIndexes = [];
            _this.modalTitle = data.modalTitle;
            _this.openEditModal();
        });
    };
    PricesEditModal.prototype.openEditModal = function () {
        this.editModalActions.emit({ action: "modal", params: ['open'] });
    };
    PricesEditModal.prototype.onEditClick = function () {
        var _this = this;
        if (this.pricesToEditIndexes.length > 0) {
            var pricesToEdit_1 = [];
            this.pricesToEditIndexes.forEach(function (index) {
                pricesToEdit_1.push(_this.selectedPrices[index]);
                _this.pricesService.editPrices(pricesToEdit_1);
            });
            this.pricesModalsService.callRefreshPage();
        }
        this.onCloseModal();
    };
    PricesEditModal.prototype.onCloseModal = function () {
        this.editModalActions.emit({ action: "modal", params: ['close'] });
    };
    PricesEditModal.prototype.addPriceIndexToChanged = function (price) {
        if (this.pricesToEditIndexes.indexOf(price) === DOES_NOT_CONTAIN) {
            this.pricesToEditIndexes.push(price);
        }
    };
    return PricesEditModal;
}());
PricesEditModal = __decorate([
    Component({
        selector: 'coach-prices-edit-modal',
        templateUrl: 'prices-edit.modal.html',
        styleUrls: ['prices.modals.scss', '../../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [PricesModalsService, ServiceInjector])
], PricesEditModal);
export { PricesEditModal };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/prices/modals/prices-edit.modal.js.map