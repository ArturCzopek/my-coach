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
import { BaseCardComponent } from "../shared/components/base-card.component";
import { Component, Input } from "@angular/core";
import { Product } from "../shared/entities/get.entities";
import { PricesModalsService } from "./services/prices-modals.service";
import { ServiceInjector } from "../shared/services/service.injector";
import { DateService } from "../shared/services/date.service";
var PricesCardComponent = (function (_super) {
    __extends(PricesCardComponent, _super);
    function PricesCardComponent(pricesModalsService, serviceInjector, dateService) {
        var _this = _super.call(this) || this;
        _this.pricesModalsService = pricesModalsService;
        _this.serviceInjector = serviceInjector;
        _this.dateService = dateService;
        _this.prices = [];
        _this.pricesService = serviceInjector.getPricesService();
        return _this;
    }
    PricesCardComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.loadPrices();
    };
    PricesCardComponent.prototype.loadPrices = function () {
        var _this = this;
        this.isLoading = true;
        this.pricesService.getPrices(this.productPreview)
            .subscribe(function (prices) {
            _this.prices = prices.slice().reverse();
        }, function () {
        }, function () {
            _this.isLoading = false;
        });
    };
    PricesCardComponent.prototype.onAddPriceClick = function () {
        this.pricesModalsService.callAddPrice(this.productPreview);
    };
    PricesCardComponent.prototype.onEditPricesClick = function () {
        this.pricesModalsService.callEditPrices(this.prices, this.productPreview.productName);
    };
    PricesCardComponent.prototype.onEditProductClick = function () {
        this.pricesModalsService.callEditProduct(this.productPreview);
    };
    PricesCardComponent.prototype.onDeletePricesClick = function () {
        this.pricesModalsService.callDeletePrices(this.prices, this.productPreview.productName);
    };
    PricesCardComponent.prototype.onDeleteProductClick = function () {
        this.pricesModalsService.callDeleteProduct(this.productPreview);
    };
    return PricesCardComponent;
}(BaseCardComponent));
__decorate([
    Input(),
    __metadata("design:type", Product)
], PricesCardComponent.prototype, "productPreview", void 0);
PricesCardComponent = __decorate([
    Component({
        selector: 'coach-prices-card',
        templateUrl: 'prices-card.component.html',
        styleUrls: ['./prices.scss', '../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [PricesModalsService, ServiceInjector, DateService])
], PricesCardComponent);
export { PricesCardComponent };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/prices/prices-card.component.js.map