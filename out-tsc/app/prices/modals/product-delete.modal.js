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
import { ServiceInjector } from "../../shared/services/service.injector";
import { MODAL_PARAMS } from "../../shared/global.values";
import { PricesModalsService } from "../services/prices-modals.service";
var ProductDeleteModal = (function () {
    function ProductDeleteModal(pricesModalsService, serviceInjector) {
        this.pricesModalsService = pricesModalsService;
        this.serviceInjector = serviceInjector;
        this.selectedProduct = null;
        this.deleteModalActions = new EventEmitter();
        this.pricesService = serviceInjector.getPricesService();
        this.dictionaryService = serviceInjector.getDictionaryService();
    }
    ProductDeleteModal.prototype.ngOnInit = function () {
        var _this = this;
        this.modalParams = MODAL_PARAMS;
        this.pricesModalsService.deleteProduct.subscribe(function (product) {
            _this.selectedProduct = product;
            _this.modalTitle = _this.selectedProduct.productName;
            _this.openDeleteModal();
        });
    };
    ;
    ProductDeleteModal.prototype.openDeleteModal = function () {
        this.deleteModalActions.emit({ action: "modal", params: ['open'] });
    };
    ProductDeleteModal.prototype.onDeleteClick = function () {
        this.pricesService.deleteProduct(this.selectedProduct);
        this.pricesModalsService.callRefreshPage();
        this.onCloseModal();
    };
    ProductDeleteModal.prototype.onCloseModal = function () {
        this.deleteModalActions.emit({ action: "modal", params: ['close'] });
    };
    return ProductDeleteModal;
}());
ProductDeleteModal = __decorate([
    Component({
        selector: 'coach-product-delete-modal',
        templateUrl: 'product-delete.modal.html',
        styleUrls: ['prices.modals.scss', '../../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [PricesModalsService, ServiceInjector])
], ProductDeleteModal);
export { ProductDeleteModal };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/prices/modals/product-delete.modal.js.map