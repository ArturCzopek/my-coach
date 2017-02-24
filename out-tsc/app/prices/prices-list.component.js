var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { PricesModalsService } from "./services/prices-modals.service";
import { ServiceInjector } from "../shared/services/service.injector";
var PricesListComponent = (function () {
    function PricesListComponent(pricesModalsService, serviceInjector) {
        this.pricesModalsService = pricesModalsService;
        this.serviceInjector = serviceInjector;
        this.pricesService = serviceInjector.getPricesService();
    }
    PricesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadProductPreviews();
        this.pricesModalsService.refreshPage.subscribe(function () { return _this.ngOnInit(); });
    };
    PricesListComponent.prototype.loadProductPreviews = function () {
        var _this = this;
        this.isLoading = true;
        this.pricesService.getProductPreviews()
            .subscribe(function (previews) {
            _this.productPreviews = previews.slice().reverse();
        }, function () {
        }, function () {
            _this.isLoading = false;
        });
    };
    PricesListComponent.prototype.onAddShoppingListClick = function () {
        this.pricesModalsService.callAddShoppingList();
    };
    PricesListComponent.prototype.onAddProductClick = function () {
        this.pricesModalsService.callAddProduct();
    };
    return PricesListComponent;
}());
PricesListComponent = __decorate([
    Component({
        selector: 'coach-prices',
        templateUrl: './prices-list.component.html',
        styleUrls: ['prices.scss', '../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [PricesModalsService, ServiceInjector])
], PricesListComponent);
export { PricesListComponent };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/prices/prices-list.component.js.map