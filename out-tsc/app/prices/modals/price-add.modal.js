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
import { NewPrice } from "../../shared/entities/add.entities";
import { PricesModalsService } from "../services/prices-modals.service";
import { ServiceInjector } from "../../shared/services/service.injector";
import { MODAL_PARAMS } from "../../shared/global.values";
import { DateService } from "../../shared/services/date.service";
var PriceAddModal = (function () {
    function PriceAddModal(pricesModalsService, serviceInjector, dateService) {
        this.pricesModalsService = pricesModalsService;
        this.serviceInjector = serviceInjector;
        this.dateService = dateService;
        this.addModalActions = new EventEmitter();
        this.pricesService = serviceInjector.getPricesService();
        this.dictionaryService = serviceInjector.getDictionaryService();
        this.place = '';
        this.priceDate = '';
        this.price = 0;
        this.quantity = 1;
    }
    PriceAddModal.prototype.ngOnInit = function () {
        var _this = this;
        this.modalParams = MODAL_PARAMS;
        this.datePickerParams = this.dictionaryService.getDateDictionarySettings();
        this.pricesModalsService.addPrice.subscribe(function (product) {
            _this.product = product;
            _this.openAddModal();
        });
    };
    PriceAddModal.prototype.openAddModal = function () {
        this.place = '';
        this.priceDate = '';
        this.price = 0;
        this.quantity = 1;
        this.addModalActions.emit({ action: "modal", params: ['open'] });
    };
    PriceAddModal.prototype.onAddClick = function () {
        this.priceToAdd = new NewPrice(this.product.productId, this.price, this.quantity, this.place, this.dateService.parseStringToDate(this.priceDate));
        this.pricesService.addPrice(this.priceToAdd);
        this.pricesModalsService.callRefreshPage();
        this.onCloseModal();
    };
    PriceAddModal.prototype.onCloseModal = function () {
        this.addModalActions.emit({ action: "modal", params: ['close'] });
    };
    PriceAddModal.prototype.isDataValid = function () {
        return this.quantity > 0 && this.price > 0 && this.dateService.isDateValid(this.priceDate);
    };
    PriceAddModal.prototype.getProductName = function () {
        if (this.product) {
            return this.product.productName;
        }
        return '';
    };
    return PriceAddModal;
}());
PriceAddModal = __decorate([
    Component({
        selector: 'coach-price-add-modal',
        templateUrl: 'price-add.modal.html',
        styleUrls: ['prices.modals.scss', '../../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [PricesModalsService, ServiceInjector,
        DateService])
], PriceAddModal);
export { PriceAddModal };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/prices/modals/price-add.modal.js.map