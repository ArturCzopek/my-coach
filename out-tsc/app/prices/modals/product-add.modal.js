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
import { NewProduct } from "../../shared/entities/add.entities";
import { PricesModalsService } from "../services/prices-modals.service";
import { ServiceInjector } from "../../shared/services/service.injector";
import { MODAL_PARAMS } from "../../shared/global.values";
import { environment } from "../../../environments/environment";
var ProductAddModal = (function () {
    function ProductAddModal(pricesModalsService, serviceInjector) {
        this.pricesModalsService = pricesModalsService;
        this.serviceInjector = serviceInjector;
        this.addModalActions = new EventEmitter();
        this.pricesService = serviceInjector.getPricesService();
        this.dictionaryService = serviceInjector.getDictionaryService();
        this.productName = '';
        this.screen = '';
    }
    ProductAddModal.prototype.ngOnInit = function () {
        var _this = this;
        this.modalParams = MODAL_PARAMS;
        this.pricesModalsService.addProduct.subscribe(function () {
            _this.openAddModal();
        });
    };
    ProductAddModal.prototype.openAddModal = function () {
        this.productName = '';
        this.screen = '';
        this.addModalActions.emit({ action: "modal", params: ['open'] });
        if ($('#fab').hasClass('active')) {
            $('#fab a').click();
        }
    };
    ProductAddModal.prototype.onAddClick = function () {
        this.productToAdd = new NewProduct(this.productName, this.screen);
        this.pricesService.addProduct(this.productToAdd);
        this.pricesModalsService.callRefreshPage();
        this.onCloseModal();
    };
    ProductAddModal.prototype.onCloseModal = function () {
        this.addModalActions.emit({ action: "modal", params: ['close'] });
    };
    ProductAddModal.prototype.isDataValid = function () {
        return this.productName.length > 0;
    };
    ProductAddModal.prototype.canStoreFiles = function () {
        return environment.isBackendServerAvailable;
    };
    return ProductAddModal;
}());
ProductAddModal = __decorate([
    Component({
        selector: 'coach-product-add-modal',
        templateUrl: 'product-add.modal.html',
        styleUrls: ['prices.modals.scss', '../../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [PricesModalsService, ServiceInjector])
], ProductAddModal);
export { ProductAddModal };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/prices/modals/product-add.modal.js.map