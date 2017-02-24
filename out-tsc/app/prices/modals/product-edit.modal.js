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
import { MODAL_PARAMS } from "../../shared/global.values";
import { environment } from "../../../environments/environment";
var ProductEditModal = (function () {
    function ProductEditModal(pricesModalsService, serviceInjector) {
        this.pricesModalsService = pricesModalsService;
        this.serviceInjector = serviceInjector;
        this.selectedProduct = null;
        this.editModalActions = new EventEmitter();
        this.productName = '';
        this.screen = '';
        this.pricesService = serviceInjector.getPricesService();
        this.dictionaryService = serviceInjector.getDictionaryService();
    }
    ProductEditModal.prototype.ngOnInit = function () {
        var _this = this;
        this.modalParams = MODAL_PARAMS;
        this.pricesModalsService.editProduct.subscribe(function (product) {
            _this.selectedProduct = product;
            _this.productName = _this.selectedProduct.productName;
            _this.screen = _this.selectedProduct.screenUrl;
            _this.openEditModal();
        });
    };
    ProductEditModal.prototype.ngAfterViewChecked = function () {
        if (typeof Materialize.updateTextFields === "function") {
            Materialize.updateTextFields();
        }
    };
    ProductEditModal.prototype.openEditModal = function () {
        this.editModalActions.emit({ action: "modal", params: ['open'] });
        if ($('#fab').hasClass('active')) {
            $('#fab a').click();
        }
    };
    ProductEditModal.prototype.onEditClick = function () {
        this.selectedProduct.productName = this.productName;
        this.selectedProduct.screenUrl = this.screen;
        this.pricesService.editProduct(this.selectedProduct);
        this.pricesModalsService.callRefreshPage();
        this.onCloseModal();
    };
    ProductEditModal.prototype.onCloseModal = function () {
        this.editModalActions.emit({ action: "modal", params: ['close'] });
    };
    ProductEditModal.prototype.isDataValid = function () {
        return this.productName.length > 0;
    };
    ProductEditModal.prototype.canStoreFiles = function () {
        return environment.isBackendServerAvailable;
    };
    return ProductEditModal;
}());
ProductEditModal = __decorate([
    Component({
        selector: 'coach-product-edit-modal',
        templateUrl: 'product-edit.modal.html',
        styleUrls: ['prices.modals.scss', '../../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [PricesModalsService, ServiceInjector])
], ProductEditModal);
export { ProductEditModal };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/prices/modals/product-edit.modal.js.map