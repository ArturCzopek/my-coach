var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
var PricesModalsService = (function () {
    function PricesModalsService() {
        this.addProduct = new Subject();
        this.addPrice = new Subject();
        this.addShoppingList = new Subject();
        this.editProduct = new Subject();
        this.editPrices = new Subject();
        this.deleteProduct = new Subject();
        this.deletePrices = new Subject();
        this.refreshPage = new Subject();
    }
    PricesModalsService.prototype.callAddProduct = function () {
        this.addProduct.next(null);
    };
    PricesModalsService.prototype.callAddPrice = function (product) {
        this.addPrice.next(product);
    };
    PricesModalsService.prototype.callAddShoppingList = function () {
        this.addShoppingList.next(null);
    };
    PricesModalsService.prototype.callEditProduct = function (product) {
        this.editProduct.next(product);
    };
    PricesModalsService.prototype.callEditPrices = function (prices, modalTitle) {
        this.editPrices.next({ prices: prices, modalTitle: modalTitle });
    };
    PricesModalsService.prototype.callDeleteProduct = function (product) {
        this.deleteProduct.next(product);
    };
    PricesModalsService.prototype.callDeletePrices = function (prices, modalTitle) {
        this.deletePrices.next({ prices: prices, modalTitle: modalTitle });
    };
    PricesModalsService.prototype.callRefreshPage = function () {
        this.refreshPage.next(null);
    };
    return PricesModalsService;
}());
PricesModalsService = __decorate([
    Injectable()
], PricesModalsService);
export { PricesModalsService };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/prices/services/prices-modals.service.js.map