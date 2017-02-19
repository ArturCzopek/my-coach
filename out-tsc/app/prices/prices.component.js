var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PRODUCT_PREVIEWS_LIST } from "../shared/entities/mock-data/previews/product-previews.mock-data";
import { PRICES_LIST } from "../shared/entities/mock-data/prices.mock-data";
var PricesComponent = (function () {
    function PricesComponent() {
    }
    PricesComponent.prototype.ngOnInit = function () {
    };
    PricesComponent.prototype.getProducts = function () {
        return PRODUCT_PREVIEWS_LIST;
    };
    PricesComponent.prototype.getProductPrices = function (productPreview) {
        return PRICES_LIST[productPreview.productId];
    };
    return PricesComponent;
}());
PricesComponent = __decorate([
    Component({
        selector: 'coach-prices',
        templateUrl: './prices.component.html',
        styleUrls: ['./prices.component.scss']
    }),
    __metadata("design:paramtypes", [])
], PricesComponent);
export { PricesComponent };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/prices/prices.component.js.map