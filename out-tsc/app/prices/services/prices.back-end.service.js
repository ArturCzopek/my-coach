var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Injector } from "@angular/core";
import { PricesService } from "./prices.service";
import { ServiceInjector } from "../../shared/services/service.injector";
var PricesBackEndService = (function (_super) {
    __extends(PricesBackEndService, _super);
    function PricesBackEndService(injector) {
        var _this = _super.call(this, injector.get(ServiceInjector)) || this;
        _this.injector = injector;
        return _this;
    }
    PricesBackEndService.prototype.getProductPreviews = function () {
        console.log('PricesBackEndService#getProductPreviews not implemented yet');
        return null;
    };
    PricesBackEndService.prototype.getPrices = function (productPreview) {
        console.log('PricesBackEndService#getPrices not implemented yet');
        return null;
    };
    PricesBackEndService.prototype.addProduct = function (productToAdd) {
        console.log('PricesBackEndService#addProduct not implemented yet');
    };
    PricesBackEndService.prototype.addPrice = function (priceToAdd) {
        console.log('PricesBackEndService#addPrice not implemented yet');
    };
    PricesBackEndService.prototype.addShoppingList = function (shoppingList) {
        console.log('PricesBackEndService#addShopping list not implemented yet');
    };
    PricesBackEndService.prototype.editPrices = function (pricesToEdit) {
        console.log('PricesBackEndService#editPrices not implemented yet');
    };
    PricesBackEndService.prototype.editProduct = function (product) {
        console.log('PricesBackEndService#editProduct not implemented yet');
    };
    PricesBackEndService.prototype.deletePrices = function (pricesToDelete) {
        console.log('PricesBackEndService#deletePrices not implemented yet');
    };
    PricesBackEndService.prototype.deleteProduct = function (productToDelete) {
        console.log('PricesBackEndService#deleteProduct not implemented yet');
    };
    return PricesBackEndService;
}(PricesService));
PricesBackEndService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Injector])
], PricesBackEndService);
export { PricesBackEndService };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/prices/services/prices.back-end.service.js.map