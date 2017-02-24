var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable:component-class-suffix */
import { Component } from "@angular/core";
var PricesModals = (function () {
    function PricesModals() {
    }
    return PricesModals;
}());
PricesModals = __decorate([
    Component({
        selector: 'coach-prices-modals',
        template: "\n    <coach-price-add-modal></coach-price-add-modal>\n    <coach-prices-delete-modal></coach-prices-delete-modal>\n    <coach-prices-edit-modal></coach-prices-edit-modal>\n    <coach-product-add-modal></coach-product-add-modal>\n    <coach-product-delete-modal></coach-product-delete-modal>\n    <coach-product-edit-modal></coach-product-edit-modal>\n  "
    })
], PricesModals);
export { PricesModals };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/prices/modals/prices.modals.js.map