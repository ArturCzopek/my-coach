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
import { PRODUCTS_LIST } from "../../shared/entities/mock-data/products.mock-data";
import { ServiceInjector } from "../../shared/services/service.injector";
import { Observable } from "rxjs";
import { Product, Price } from "../../shared/entities/get.entities";
import { PRICES_LIST } from "../../shared/entities/mock-data/prices.mock-data";
var PricesMockService = (function (_super) {
    __extends(PricesMockService, _super);
    function PricesMockService(injector) {
        var _this = _super.call(this, injector.get(ServiceInjector)) || this;
        _this.injector = injector;
        _this.newId = PRODUCTS_LIST.length;
        _this.newPriceId = -1;
        for (var _i = 0, PRICES_LIST_1 = PRICES_LIST; _i < PRICES_LIST_1.length; _i++) {
            var prices = PRICES_LIST_1[_i];
            _this.newPriceId += prices.length;
        }
        return _this;
    }
    PricesMockService.prototype.getProductPreviews = function () {
        return Observable.create(function (observer) {
            // timeout is simulation of 'getting from http'
            setTimeout(function () {
                observer.next(PRODUCTS_LIST);
            }, 500);
            setTimeout(function () {
                observer.complete();
            }, 600);
        });
    };
    PricesMockService.prototype.getPrices = function (productPreview) {
        var pricesToReturn = [];
        for (var i = 0; i < PRICES_LIST.length; i++) {
            if (PRICES_LIST[i].length > 0 && PRICES_LIST[i][0].productId === productPreview.productId) {
                pricesToReturn = PRICES_LIST[i];
                break;
            }
        }
        return Observable.create(function (observer) {
            // timeout is simulation of 'getting from http'
            setTimeout(function () {
                observer.next(pricesToReturn);
            }, 500);
            setTimeout(function () {
                observer.complete();
            }, 600);
        });
    };
    PricesMockService.prototype.addProduct = function (productToAdd) {
        this.newId++;
        var productId = this.newId;
        var product = new Product(productId, productToAdd.productName, productToAdd.screen, 0);
        PRICES_LIST.push([]);
        PRODUCTS_LIST.push(product);
    };
    PricesMockService.prototype.addPrice = function (priceToAdd) {
        var prodIdInArray = 0;
        for (; prodIdInArray <= PRODUCTS_LIST.length; prodIdInArray++) {
            if (PRODUCTS_LIST[prodIdInArray].productId === priceToAdd.productId) {
                break;
            }
        }
        if (prodIdInArray === PRODUCTS_LIST.length) {
            return;
        }
        this.newPriceId++;
        var price = new Price(this.newPriceId, priceToAdd.priceDate, priceToAdd.place, priceToAdd.quantity, priceToAdd.value, priceToAdd.productId);
        PRICES_LIST[prodIdInArray].push(price);
    };
    PricesMockService.prototype.addShoppingList = function (shoppingList, place, date) {
        console.log('PricesMockService#addShoppingList not implemented yet');
    };
    PricesMockService.prototype.editPrices = function (pricesToEdit) {
        var prodIdInArray = 0;
        for (; prodIdInArray <= PRODUCTS_LIST.length; prodIdInArray++) {
            if (PRODUCTS_LIST[prodIdInArray].productId === pricesToEdit[0].productId) {
                break;
            }
        }
        var priceList = PRICES_LIST[prodIdInArray];
        for (var i = 0; i < priceList.length; i++) {
            for (var _i = 0, pricesToEdit_1 = pricesToEdit; _i < pricesToEdit_1.length; _i++) {
                var price = pricesToEdit_1[_i];
                if (price.priceId === priceList[i].priceId) {
                    priceList[i] = price;
                    break;
                }
            }
        }
    };
    PricesMockService.prototype.editProduct = function (productToEdit) {
        for (var i = 0; i < PRODUCTS_LIST.length; i++) {
            if (PRODUCTS_LIST[i].productId === productToEdit.productId) {
                PRODUCTS_LIST[i] = productToEdit;
                break;
            }
        }
    };
    PricesMockService.prototype.deletePrices = function (pricesToDelete) {
        var prodIdInArray = 0;
        for (; prodIdInArray <= PRODUCTS_LIST.length; prodIdInArray++) {
            if (PRODUCTS_LIST[prodIdInArray].productId === pricesToDelete[0].productId) {
                break;
            }
        }
        var priceList = PRICES_LIST[prodIdInArray];
        for (var _i = 0, pricesToDelete_1 = pricesToDelete; _i < pricesToDelete_1.length; _i++) {
            var price = pricesToDelete_1[_i];
            for (var i = 0; i < priceList.length; i++) {
                if (price.priceId === priceList[i].priceId) {
                    priceList.splice(i, 1);
                    break;
                }
            }
        }
    };
    PricesMockService.prototype.deleteProduct = function (productToDelete) {
        for (var i = 0; i < PRODUCTS_LIST.length; i++) {
            if (PRODUCTS_LIST[i].productId === productToDelete.productId) {
                PRODUCTS_LIST.splice(i, 1);
                PRICES_LIST.splice(i, 1);
                break;
            }
        }
    };
    return PricesMockService;
}(PricesService));
PricesMockService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Injector])
], PricesMockService);
export { PricesMockService };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/prices/services/prices.mock.service.js.map