webpackJsonp([0,5],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-about',
        template: "\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"s12 center\" style=\"margin: 80px 0;\">\n            <h1>{{'page.about.title' | dictionary}}</h1>\n          </div>\n        </div>\n        <div class=\"row\" style=\"margin-bottom: 100px;\">\n          <div class=\"s12 center\">\n            <h4>{{'page.about.content' | dictionary}}</h4>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col s4 center\">\n            <img src=\"assets/img/github.png\"/>\n          </div>\n          <div class=\"col s4 center\">\n            <img src=\"assets/img/github.png\"/>\n          </div>\n          <div class=\"col s4 center\">\n            <img src=\"assets/img/github.png\"/>\n          </div>\n        </div>\n      </div>\n"
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_prices_modals_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        this.pricesModalsService.callAddShoppingList(this.productPreviews);
    };
    PricesListComponent.prototype.onAddProductClick = function () {
        this.pricesModalsService.callAddProduct();
    };
    return PricesListComponent;
}());
PricesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-prices',
        template: __webpack_require__(305),
        styles: [__webpack_require__(133), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_prices_modals_service__["a" /* PricesModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_prices_modals_service__["a" /* PricesModalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _b || Object])
], PricesListComponent);

var _a, _b;
//# sourceMappingURL=prices-list.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prices_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricesBackEndService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PricesBackEndService = (function (_super) {
    __extends(PricesBackEndService, _super);
    function PricesBackEndService(injector) {
        var _this = _super.call(this, injector.get(__WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */])) || this;
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
}(__WEBPACK_IMPORTED_MODULE_1__prices_service__["a" /* PricesService */]));
PricesBackEndService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _a || Object])
], PricesBackEndService);

var _a;
//# sourceMappingURL=prices.back-end.service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prices_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_entities_get_entities__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_entities_mock_data_prices_mock_data__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricesMockService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PricesMockService = (function (_super) {
    __extends(PricesMockService, _super);
    function PricesMockService(injector) {
        var _this = _super.call(this, injector.get(__WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__["a" /* ServiceInjector */])) || this;
        _this.injector = injector;
        _this.newId = __WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__["a" /* PRODUCTS_LIST */].length;
        _this.newPriceId = -1;
        for (var _i = 0, PRICES_LIST_1 = __WEBPACK_IMPORTED_MODULE_6__shared_entities_mock_data_prices_mock_data__["a" /* PRICES_LIST */]; _i < PRICES_LIST_1.length; _i++) {
            var prices = PRICES_LIST_1[_i];
            _this.newPriceId += prices.length;
        }
        return _this;
    }
    PricesMockService.prototype.getProductPreviews = function () {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(function (observer) {
            // timeout is simulation of 'getting from http'
            setTimeout(function () {
                observer.next(__WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__["a" /* PRODUCTS_LIST */]);
            }, 500);
            setTimeout(function () {
                observer.complete();
            }, 600);
        });
    };
    PricesMockService.prototype.getPrices = function (productPreview) {
        var pricesToReturn = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_6__shared_entities_mock_data_prices_mock_data__["a" /* PRICES_LIST */].length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_6__shared_entities_mock_data_prices_mock_data__["a" /* PRICES_LIST */][i].length > 0 && __WEBPACK_IMPORTED_MODULE_6__shared_entities_mock_data_prices_mock_data__["a" /* PRICES_LIST */][i][0].productId === productPreview.productId) {
                pricesToReturn = __WEBPACK_IMPORTED_MODULE_6__shared_entities_mock_data_prices_mock_data__["a" /* PRICES_LIST */][i];
                break;
            }
        }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(function (observer) {
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
        var product = new __WEBPACK_IMPORTED_MODULE_5__shared_entities_get_entities__["a" /* Product */](productId, productToAdd.productName, productToAdd.screen, 0);
        __WEBPACK_IMPORTED_MODULE_6__shared_entities_mock_data_prices_mock_data__["a" /* PRICES_LIST */].push([]);
        __WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__["a" /* PRODUCTS_LIST */].push(product);
    };
    PricesMockService.prototype.addPrice = function (priceToAdd) {
        var prodIdInArray = 0;
        for (; prodIdInArray <= __WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__["a" /* PRODUCTS_LIST */].length; prodIdInArray++) {
            if (__WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__["a" /* PRODUCTS_LIST */][prodIdInArray].productId === priceToAdd.productId) {
                break;
            }
        }
        if (prodIdInArray === __WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__["a" /* PRODUCTS_LIST */].length) {
            return;
        }
        this.newPriceId++;
        var price = new __WEBPACK_IMPORTED_MODULE_5__shared_entities_get_entities__["b" /* Price */](this.newPriceId, priceToAdd.priceDate, priceToAdd.place, priceToAdd.quantity, priceToAdd.value, priceToAdd.productId);
        __WEBPACK_IMPORTED_MODULE_6__shared_entities_mock_data_prices_mock_data__["a" /* PRICES_LIST */][prodIdInArray].push(price);
    };
    PricesMockService.prototype.addShoppingList = function (shoppingList) {
        for (var _i = 0, _a = shoppingList.prices; _i < _a.length; _i++) {
            var price = _a[_i];
            price.priceDate = shoppingList.shoppingDate;
            price.place = shoppingList.place;
            this.addPrice(price);
        }
    };
    PricesMockService.prototype.editPrices = function (pricesToEdit) {
        var prodIdInArray = 0;
        for (; prodIdInArray <= __WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__["a" /* PRODUCTS_LIST */].length; prodIdInArray++) {
            if (__WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__["a" /* PRODUCTS_LIST */][prodIdInArray].productId === pricesToEdit[0].productId) {
                break;
            }
        }
        var priceList = __WEBPACK_IMPORTED_MODULE_6__shared_entities_mock_data_prices_mock_data__["a" /* PRICES_LIST */][prodIdInArray];
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
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__["a" /* PRODUCTS_LIST */].length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__["a" /* PRODUCTS_LIST */][i].productId === productToEdit.productId) {
                __WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__["a" /* PRODUCTS_LIST */][i] = productToEdit;
                break;
            }
        }
    };
    PricesMockService.prototype.deletePrices = function (pricesToDelete) {
        var prodIdInArray = 0;
        for (; prodIdInArray <= __WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__["a" /* PRODUCTS_LIST */].length; prodIdInArray++) {
            if (__WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__["a" /* PRODUCTS_LIST */][prodIdInArray].productId === pricesToDelete[0].productId) {
                break;
            }
        }
        var priceList = __WEBPACK_IMPORTED_MODULE_6__shared_entities_mock_data_prices_mock_data__["a" /* PRICES_LIST */][prodIdInArray];
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
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__["a" /* PRODUCTS_LIST */].length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__["a" /* PRODUCTS_LIST */][i].productId === productToDelete.productId) {
                __WEBPACK_IMPORTED_MODULE_2__shared_entities_mock_data_products_mock_data__["a" /* PRODUCTS_LIST */].splice(i, 1);
                __WEBPACK_IMPORTED_MODULE_6__shared_entities_mock_data_prices_mock_data__["a" /* PRICES_LIST */].splice(i, 1);
                break;
            }
        }
    };
    return PricesMockService;
}(__WEBPACK_IMPORTED_MODULE_1__prices_service__["a" /* PricesService */]));
PricesMockService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _a || Object])
], PricesMockService);

var _a;
//# sourceMappingURL=prices.mock.service.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PricesService = (function () {
    function PricesService(serviceInjector) {
        this.dictionaryService = serviceInjector.getDictionaryService();
    }
    return PricesService;
}());
PricesService = __decorate([
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__shared_services_service_injector__["a" /* ServiceInjector */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _a || Object])
], PricesService);

var _a;
//# sourceMappingURL=prices.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_report_modals_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportsListComponent = (function () {
    function ReportsListComponent(reportModalsService, serviceInjector) {
        this.reportModalsService = reportModalsService;
        this.serviceInjector = serviceInjector;
        this.reportService = serviceInjector.getReportService();
    }
    ReportsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadReportPreviews();
        this.reportModalsService.refreshPage.subscribe(function () { return _this.ngOnInit(); });
    };
    ReportsListComponent.prototype.loadReportPreviews = function () {
        var _this = this;
        this.isLoading = true;
        this.reportService.getReportPreviews()
            .subscribe(function (previews) {
            _this.reportPreviews = previews.slice().reverse();
        }, function () {
        }, function () {
            _this.isLoading = false;
        });
    };
    ReportsListComponent.prototype.onAddClick = function () {
        this.reportModalsService.callAddReport();
    };
    return ReportsListComponent;
}());
ReportsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-reports-list',
        template: __webpack_require__(310),
        styles: [__webpack_require__(134), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_report_modals_service__["a" /* ReportModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_report_modals_service__["a" /* ReportModalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _b || Object])
], ReportsListComponent);

var _a, _b;
//# sourceMappingURL=reports-list.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportBackEndService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ReportBackEndService = (function (_super) {
    __extends(ReportBackEndService, _super);
    function ReportBackEndService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReportBackEndService.prototype.getReportPreviews = function () {
        console.log("ReportBackEndService#getReportPreviews not implemented yet");
        return null;
    };
    ReportBackEndService.prototype.getReport = function (reportId) {
        console.log("ReportBackEndService#getReport not implemented yet");
        return null;
    };
    ReportBackEndService.prototype.addReport = function (reportToAdd) {
        console.log("ReportBackEndService#addReport not implemented yet");
        return null;
    };
    ReportBackEndService.prototype.deleteReport = function (reportToDelete) {
        console.log("ReportBackEndService#deleteReport not implemented yet");
        return null;
    };
    ReportBackEndService.prototype.editReport = function (reportToEdit) {
        console.log("ReportBackEndService#editReport not implemented yet");
        return null;
    };
    return ReportBackEndService;
}(__WEBPACK_IMPORTED_MODULE_0__report_service__["a" /* ReportService */]));
ReportBackEndService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], ReportBackEndService);

//# sourceMappingURL=report.back-end.service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_entities_mock_data_previews_report_previews_mock_data__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_entities_preview_entities__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_entities_get_entities__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_entities_mock_data_reports_mock_data__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_global_values__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportMockService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ReportMockService = (function (_super) {
    __extends(ReportMockService, _super);
    function ReportMockService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newId = __WEBPACK_IMPORTED_MODULE_4__shared_entities_mock_data_reports_mock_data__["a" /* REPORTS_LIST */].length;
        return _this;
    }
    ReportMockService.prototype.getReportPreviews = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            // timeout is simulation of 'getting from http'
            setTimeout(function () {
                observer.next(__WEBPACK_IMPORTED_MODULE_0__shared_entities_mock_data_previews_report_previews_mock_data__["a" /* REPORT_PREVIEWS_LIST */]);
            }, 500);
            setTimeout(function () {
                observer.complete();
            }, 600);
        });
    };
    ReportMockService.prototype.getReport = function (reportId) {
        var reportToReturn;
        for (var _i = 0, REPORTS_LIST_1 = __WEBPACK_IMPORTED_MODULE_4__shared_entities_mock_data_reports_mock_data__["a" /* REPORTS_LIST */]; _i < REPORTS_LIST_1.length; _i++) {
            var report = REPORTS_LIST_1[_i];
            if (report.reportId === reportId) {
                reportToReturn = report;
                break;
            }
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            // timeout is simulation of 'getting from http'
            setTimeout(function () {
                observer.next(reportToReturn);
            }, 1000);
            setTimeout(function () {
                observer.complete();
            }, 1100);
        });
    };
    ReportMockService.prototype.addReport = function (reportToAdd) {
        this.newId++;
        var reportId = this.newId;
        var report = new __WEBPACK_IMPORTED_MODULE_3__shared_entities_get_entities__["c" /* Report */](reportId, reportToAdd.content, reportToAdd.startDate, reportToAdd.endDate);
        var reportPreview = new __WEBPACK_IMPORTED_MODULE_2__shared_entities_preview_entities__["a" /* ReportPreview */](reportId, reportToAdd.startDate, reportToAdd.endDate);
        __WEBPACK_IMPORTED_MODULE_4__shared_entities_mock_data_reports_mock_data__["a" /* REPORTS_LIST */].push(report);
        __WEBPACK_IMPORTED_MODULE_0__shared_entities_mock_data_previews_report_previews_mock_data__["a" /* REPORT_PREVIEWS_LIST */].push(reportPreview);
    };
    ReportMockService.prototype.deleteReport = function (reportToDelete) {
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_4__shared_entities_mock_data_reports_mock_data__["a" /* REPORTS_LIST */].length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_4__shared_entities_mock_data_reports_mock_data__["a" /* REPORTS_LIST */][i].reportId === reportToDelete.reportId) {
                __WEBPACK_IMPORTED_MODULE_4__shared_entities_mock_data_reports_mock_data__["a" /* REPORTS_LIST */].splice(i, 1);
                break;
            }
        }
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__shared_entities_mock_data_previews_report_previews_mock_data__["a" /* REPORT_PREVIEWS_LIST */].length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_0__shared_entities_mock_data_previews_report_previews_mock_data__["a" /* REPORT_PREVIEWS_LIST */][i].reportId === reportToDelete.reportId) {
                __WEBPACK_IMPORTED_MODULE_0__shared_entities_mock_data_previews_report_previews_mock_data__["a" /* REPORT_PREVIEWS_LIST */].splice(i, 1);
                break;
            }
        }
    };
    ReportMockService.prototype.editReport = function (reportToEdit) {
        var reportIndex = __WEBPACK_IMPORTED_MODULE_4__shared_entities_mock_data_reports_mock_data__["a" /* REPORTS_LIST */].indexOf(reportToEdit);
        if (reportIndex !== __WEBPACK_IMPORTED_MODULE_7__shared_global_values__["a" /* DOES_NOT_CONTAIN */]) {
            __WEBPACK_IMPORTED_MODULE_4__shared_entities_mock_data_reports_mock_data__["a" /* REPORTS_LIST */][reportIndex] = reportToEdit;
        }
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__shared_entities_mock_data_previews_report_previews_mock_data__["a" /* REPORT_PREVIEWS_LIST */].length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_0__shared_entities_mock_data_previews_report_previews_mock_data__["a" /* REPORT_PREVIEWS_LIST */][i].reportId === reportToEdit.reportId) {
                __WEBPACK_IMPORTED_MODULE_0__shared_entities_mock_data_previews_report_previews_mock_data__["a" /* REPORT_PREVIEWS_LIST */][i].startDate = reportToEdit.startDate;
                __WEBPACK_IMPORTED_MODULE_0__shared_entities_mock_data_previews_report_previews_mock_data__["a" /* REPORT_PREVIEWS_LIST */][i].endDate = reportToEdit.endDate;
                break;
            }
        }
    };
    return ReportMockService;
}(__WEBPACK_IMPORTED_MODULE_5__report_service__["a" /* ReportService */]));
ReportMockService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Injectable"])()
], ReportMockService);

//# sourceMappingURL=report.mock.service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_dictionary_mock_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });

var ReportService = (function () {
    function ReportService() {
        // this.dictionaryService = serviceInjector.getDictionaryService();
        this.dictionaryService = new __WEBPACK_IMPORTED_MODULE_0__shared_services_dictionary_mock_service__["a" /* DictionaryMockService */];
    }
    ReportService.prototype.getPreviewTitle = function (reportPreview) {
        return this.dictionaryService.getDictionaryValue('page.reports.card.title') + " " +
            (reportPreview.startDate.getUTCDate() + 1 + " ") +
            (this.dictionaryService.getDateDictionarySettings().monthsShort[reportPreview.startDate.getUTCMonth()] + " ") +
            (reportPreview.startDate.getUTCFullYear() + " ") +
            ("- " + (reportPreview.endDate.getUTCDate() + 1) + " ") +
            (this.dictionaryService.getDateDictionarySettings().monthsShort[reportPreview.endDate.getUTCMonth()] + " ") +
            ("" + reportPreview.endDate.getUTCFullYear());
    };
    return ReportService;
}());

//# sourceMappingURL=report.service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dictionary_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryBackEndService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DictionaryBackEndService = (function (_super) {
    __extends(DictionaryBackEndService, _super);
    function DictionaryBackEndService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DictionaryBackEndService.prototype.getDictionaryFromDb = function () {
        console.log('DictionaryBackEndService#getDictionaryFromDb not implemented yet');
        return {};
    };
    return DictionaryBackEndService;
}(__WEBPACK_IMPORTED_MODULE_0__dictionary_service__["a" /* DictionaryService */]));
DictionaryBackEndService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], DictionaryBackEndService);

//# sourceMappingURL=dictionary.back-end.service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryService; });
var DictionaryService = (function () {
    function DictionaryService() {
        this.dictionary = null;
        this.dateDictionarySettings = null;
        this.loadDictionary();
    }
    DictionaryService.prototype.getDictionaryValue = function (key) {
        if (this.dictionary == null) {
            this.dictionary = this.getDictionaryFromDb();
        }
        return this.dictionary[key] || this.getFormattedKey(key);
    };
    DictionaryService.prototype.getDateDictionarySettings = function () {
        return this.dateDictionarySettings;
    };
    DictionaryService.prototype.createDateDictionarySettings = function () {
        return {
            labelMonthNext: this.getDictionaryValue('calendar.nextDay.label'),
            labelMonthPrev: this.getDictionaryValue('calendar.prevDay.label'),
            labelMonthSelect: this.getDictionaryValue('calendar.monthSelect.label'),
            labelYearSelect: this.getDictionaryValue('calendar.yearSelect.label'),
            monthsFull: [
                this.getDictionaryValue('calendar.month.jan.full'),
                this.getDictionaryValue('calendar.month.feb.full'),
                this.getDictionaryValue('calendar.month.mar.full'),
                this.getDictionaryValue('calendar.month.apr.full'),
                this.getDictionaryValue('calendar.month.may.full'),
                this.getDictionaryValue('calendar.month.jun.full'),
                this.getDictionaryValue('calendar.month.jul.full'),
                this.getDictionaryValue('calendar.month.aug.full'),
                this.getDictionaryValue('calendar.month.sep.full'),
                this.getDictionaryValue('calendar.month.oct.full'),
                this.getDictionaryValue('calendar.month.nov.full'),
                this.getDictionaryValue('calendar.month.dec.full')
            ],
            monthsShort: [
                this.getDictionaryValue('calendar.month.jan.short'),
                this.getDictionaryValue('calendar.month.feb.short'),
                this.getDictionaryValue('calendar.month.mar.short'),
                this.getDictionaryValue('calendar.month.apr.short'),
                this.getDictionaryValue('calendar.month.may.short'),
                this.getDictionaryValue('calendar.month.jun.short'),
                this.getDictionaryValue('calendar.month.jul.short'),
                this.getDictionaryValue('calendar.month.aug.short'),
                this.getDictionaryValue('calendar.month.sep.short'),
                this.getDictionaryValue('calendar.month.oct.short'),
                this.getDictionaryValue('calendar.month.nov.short'),
                this.getDictionaryValue('calendar.month.dec.short')
            ],
            weekdaysFull: [
                this.getDictionaryValue('calendar.day.sun.full'),
                this.getDictionaryValue('calendar.day.mon.full'),
                this.getDictionaryValue('calendar.day.tue.full'),
                this.getDictionaryValue('calendar.day.wen.full'),
                this.getDictionaryValue('calendar.day.thu.full'),
                this.getDictionaryValue('calendar.day.fri.full'),
                this.getDictionaryValue('calendar.day.sat.full')
            ],
            weekdaysShort: [
                this.getDictionaryValue('calendar.day.sun.short'),
                this.getDictionaryValue('calendar.day.mon.short'),
                this.getDictionaryValue('calendar.day.tue.short'),
                this.getDictionaryValue('calendar.day.wen.short'),
                this.getDictionaryValue('calendar.day.thu.short'),
                this.getDictionaryValue('calendar.day.fri.short'),
                this.getDictionaryValue('calendar.day.sat.short')
            ],
            weekdaysLetter: [
                this.getDictionaryValue('calendar.day.sun.letter'),
                this.getDictionaryValue('calendar.day.mon.letter'),
                this.getDictionaryValue('calendar.day.tue.letter'),
                this.getDictionaryValue('calendar.day.wen.letter'),
                this.getDictionaryValue('calendar.day.thu.letter'),
                this.getDictionaryValue('calendar.day.fri.letter'),
                this.getDictionaryValue('calendar.day.sat.letter')
            ],
            today: this.getDictionaryValue('calendar.today.label'),
            clear: this.getDictionaryValue('calendar.clear.label'),
            close: this.getDictionaryValue('calendar.close.label'),
            format: this.getDictionaryValue('calendar.format'),
            max: true,
            container: 'body'
        };
    };
    DictionaryService.prototype.loadDictionary = function () {
        this.dictionary = this.getDictionaryFromDb();
        this.dateDictionarySettings = this.createDateDictionarySettings();
    };
    DictionaryService.prototype.getFormattedKey = function (key) {
        var stack = key.split(".");
        var last = stack.pop();
        var first = stack.pop();
        return first + "." + last;
    };
    return DictionaryService;
}());

//# sourceMappingURL=dictionary.service.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_entities_mock_data_cycles_mock_data__ = __webpack_require__(212);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrainingsComponent = (function () {
    function TrainingsComponent() {
    }
    TrainingsComponent.prototype.ngOnInit = function () {
        this.showContents = [false, false, true];
    };
    TrainingsComponent.prototype.getCycles = function () {
        return __WEBPACK_IMPORTED_MODULE_1__shared_entities_mock_data_cycles_mock_data__["a" /* CYCLES_LIST */];
    };
    TrainingsComponent.prototype.showContent = function (index) {
        return this.showContents[index];
    };
    return TrainingsComponent;
}());
TrainingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-training',
        template: __webpack_require__(315),
        styles: [__webpack_require__(287)]
    }),
    __metadata("design:paramtypes", [])
], TrainingsComponent);

//# sourceMappingURL=trainings.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__weights_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightsBackEndService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeightsBackEndService = (function (_super) {
    __extends(WeightsBackEndService, _super);
    function WeightsBackEndService(injector) {
        var _this = _super.call(this, injector.get(__WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */])) || this;
        _this.injector = injector;
        return _this;
    }
    WeightsBackEndService.prototype.getWeightsPreviews = function () {
        console.log('WeightsBackEndService#getWeightsPreviews not implemented yet');
        return null;
    };
    WeightsBackEndService.prototype.getWeights = function (weightsPreview) {
        console.log('WeightsBackEndService#getWeights not implemented yet');
        return null;
    };
    WeightsBackEndService.prototype.getAllDays = function (weights) {
        console.log('WeightsBackEndService#getAllDays not implemented yet');
        return null;
    };
    WeightsBackEndService.prototype.getAllValues = function (weights) {
        console.log('WeightsBackEndService#getAllValues not implemented yet');
        return null;
    };
    WeightsBackEndService.prototype.addWeight = function (weightToAdd) {
        console.log('WeightsBackEndService#addWeights not implemented yet');
    };
    WeightsBackEndService.prototype.editWeights = function (weights) {
        console.log('WeightsBackEndService#editWeights not implemented yet');
    };
    WeightsBackEndService.prototype.deleteWeights = function (weights) {
        console.log('WeightsBackEndService#deleteWeights not implemented yet');
    };
    return WeightsBackEndService;
}(__WEBPACK_IMPORTED_MODULE_0__weights_service__["a" /* WeightsService */]));
WeightsBackEndService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"]) === "function" && _a || Object])
], WeightsBackEndService);

var _a;
//# sourceMappingURL=weights.back-end.service.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_entities_get_entities__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_entities_mock_data_weights_mock_data__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_entities_mock_data_previews_weight_previews_mock_data__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__weights_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_service_injector__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightsMockService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WeightsMockService = (function (_super) {
    __extends(WeightsMockService, _super);
    function WeightsMockService(injector) {
        var _this = _super.call(this, injector.get(__WEBPACK_IMPORTED_MODULE_6__shared_services_service_injector__["a" /* ServiceInjector */])) || this;
        _this.injector = injector;
        _this.newId = __WEBPACK_IMPORTED_MODULE_3__shared_entities_mock_data_weights_mock_data__["a" /* WEIGHT_LIST */][0].length + __WEBPACK_IMPORTED_MODULE_3__shared_entities_mock_data_weights_mock_data__["a" /* WEIGHT_LIST */][1].length;
        return _this;
    }
    WeightsMockService.prototype.getWeightsPreviews = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            // timeout is simulation of 'getting from http'
            setTimeout(function () {
                observer.next(__WEBPACK_IMPORTED_MODULE_4__shared_entities_mock_data_previews_weight_previews_mock_data__["a" /* WEIGHTS_PREVIEWS_LIST */]);
            }, 500);
            setTimeout(function () {
                observer.complete();
            }, 600);
        });
    };
    ;
    WeightsMockService.prototype.getWeights = function (weightsPreview) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var weightsToReturn;
            if (weightsPreview.month === 10) {
                weightsToReturn = __WEBPACK_IMPORTED_MODULE_3__shared_entities_mock_data_weights_mock_data__["a" /* WEIGHT_LIST */][0];
            }
            else {
                weightsToReturn = __WEBPACK_IMPORTED_MODULE_3__shared_entities_mock_data_weights_mock_data__["a" /* WEIGHT_LIST */][1];
            }
            // timeout is simulation of 'getting from http'
            setTimeout(function () {
                observer.next(weightsToReturn);
            }, 1000);
            setTimeout(function () {
                observer.complete();
            }, 1100);
        });
    };
    WeightsMockService.prototype.getAllDays = function (weights) {
        var days = [];
        for (var _i = 0, weights_1 = weights; _i < weights_1.length; _i++) {
            var weight = weights_1[_i];
            days.push(weight.measurementDate.getDate());
        }
        return days;
    };
    WeightsMockService.prototype.getAllValues = function (weights) {
        var values = [];
        for (var _i = 0, weights_2 = weights; _i < weights_2.length; _i++) {
            var weight = weights_2[_i];
            values.push(weight.value);
        }
        return values;
    };
    // for mock we add only to second month
    WeightsMockService.prototype.addWeight = function (weightToAdd) {
        var weightId = this.newId;
        this.newId++;
        var weight = new __WEBPACK_IMPORTED_MODULE_2__shared_entities_get_entities__["d" /* Weight */](weightId, weightToAdd.value, weightToAdd.measurementDate);
        __WEBPACK_IMPORTED_MODULE_3__shared_entities_mock_data_weights_mock_data__["a" /* WEIGHT_LIST */][1].push(weight);
    };
    WeightsMockService.prototype.editWeights = function (weights) {
        for (var _i = 0, weights_3 = weights; _i < weights_3.length; _i++) {
            var weightToUpdate = weights_3[_i];
            for (var _a = 0, WEIGHT_LIST_1 = __WEBPACK_IMPORTED_MODULE_3__shared_entities_mock_data_weights_mock_data__["a" /* WEIGHT_LIST */]; _a < WEIGHT_LIST_1.length; _a++) {
                var weightList = WEIGHT_LIST_1[_a];
                for (var i = 0; i < weightList.length; i++) {
                    if (weightList[i].weightId === weightToUpdate.weightId) {
                        weightList[i] = weightToUpdate;
                        break;
                    }
                }
            }
        }
    };
    WeightsMockService.prototype.deleteWeights = function (weights) {
        for (var _i = 0, weights_4 = weights; _i < weights_4.length; _i++) {
            var weightToDelete = weights_4[_i];
            for (var _a = 0, WEIGHT_LIST_2 = __WEBPACK_IMPORTED_MODULE_3__shared_entities_mock_data_weights_mock_data__["a" /* WEIGHT_LIST */]; _a < WEIGHT_LIST_2.length; _a++) {
                var weightList = WEIGHT_LIST_2[_a];
                for (var i = 0; i < weightList.length; i++) {
                    if (weightList[i].weightId === weightToDelete.weightId) {
                        weightList.splice(i, 1);
                        break;
                    }
                }
            }
        }
    };
    return WeightsMockService;
}(__WEBPACK_IMPORTED_MODULE_5__weights_service__["a" /* WeightsService */]));
WeightsMockService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _a || Object])
], WeightsMockService);

var _a;
//# sourceMappingURL=weights.mock.service.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_service_injector__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var WeightsService = (function () {
    function WeightsService(serviceInjector) {
        this.dictionaryService = serviceInjector.getDictionaryService();
    }
    WeightsService.prototype.getPreviewTitle = function (weightsPreview) {
        return this.dictionaryService.getDateDictionarySettings().monthsFull[weightsPreview.month - 1] + " " + weightsPreview.year + "r.";
    };
    WeightsService.prototype.formatDaysToDisplayingValuesFromWeights = function (weights) {
        var days = this.getAllDays(weights);
        var formattedDays = this.formatDaysToDisplayingValues(days);
        return formattedDays;
    };
    WeightsService.prototype.formatDaysToDisplayingValues = function (days) {
        var _this = this;
        var formattedDays = [];
        days.forEach(function (day) {
            formattedDays.push(_this.formatDay(day));
        });
        return formattedDays;
    };
    WeightsService.prototype.formatDay = function (day) {
        if (day > 0 && day < 10) {
            return this.dictionaryService.getDictionaryValue('calendar.day') + " 0" + day;
        }
        else {
            return this.dictionaryService.getDictionaryValue('calendar.day') + " " + day;
        }
    };
    return WeightsService;
}());
WeightsService = __decorate([
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__shared_services_service_injector__["a" /* ServiceInjector */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _a || Object])
], WeightsService);

var _a;
//# sourceMappingURL=weights.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weights_modals_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeightsListComponent = (function () {
    function WeightsListComponent(weightsModalsService, serviceInjector) {
        this.weightsModalsService = weightsModalsService;
        this.serviceInjector = serviceInjector;
        this.weightsService = serviceInjector.getWeightsService();
    }
    WeightsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadWeightsPreviews();
        this.weightsModalsService.refreshPage.subscribe(function () { return _this.ngOnInit(); });
    };
    WeightsListComponent.prototype.loadWeightsPreviews = function () {
        var _this = this;
        this.isLoading = true;
        this.weightsService.getWeightsPreviews()
            .subscribe(function (previews) {
            _this.weightsPreviews = previews.slice().reverse();
        }, function () { }, function () {
            _this.isLoading = false;
        });
    };
    WeightsListComponent.prototype.onAddClick = function () {
        this.weightsModalsService.callAddWeight();
    };
    return WeightsListComponent;
}());
WeightsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-weights-list',
        template: __webpack_require__(320),
        styles: [__webpack_require__(135), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_weights_modals_service__["a" /* WeightsModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_weights_modals_service__["a" /* WeightsModalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _b || Object])
], WeightsListComponent);

var _a, _b;
//# sourceMappingURL=weights-list.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".material-button, .card-content span.card-title .card-title-icons i, .prices-card-content .card-title-icons i {\n  display: inline;\n  cursor: pointer;\n  -webkit-filter: contrast(0);\n          filter: contrast(0); }\n  .material-button:hover, .card-content span.card-title .card-title-icons i:hover, .prices-card-content .card-title-icons i:hover {\n    -webkit-filter: contrast(1);\n            filter: contrast(1); }\n\n.arrow, .down-arrow, .left-arrow {\n  -webkit-filter: contrast(0);\n          filter: contrast(0);\n  cursor: pointer; }\n  .arrow:hover, .down-arrow:hover, .left-arrow:hover {\n    -webkit-filter: contrast(1);\n            filter: contrast(1); }\n\n.left-arrow {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.card-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n  .card-content span.card-title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n    -ms-flex-item-align: center;\n        align-self: center;\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n    .card-content span.card-title p {\n      margin-right: 15px; }\n    .card-content span.card-title .card-title-icons {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-align: baseline;\n          -ms-flex-align: baseline;\n              align-items: baseline;\n      -ms-flex-item-align: center;\n          align-self: center;\n      -webkit-box-ordinal-group: 100;\n          -ms-flex-order: 99;\n              order: 99;\n      visibility: hidden; }\n      .card-content span.card-title .card-title-icons i {\n        margin-right: 5px; }\n  .card-content img.right {\n    -webkit-box-ordinal-group: 100;\n        -ms-flex-order: 99;\n            order: 99;\n    -ms-flex-preferred-size: 40px;\n        flex-basis: 40px; }\n\n.card-content:hover span.card-title .card-title-icons {\n  visibility: visible; }\n\n.input-field input:focus {\n  border-bottom: 1px solid #1976D2;\n  box-shadow: 0 1px 0 0 #1976D2; }\n  .input-field input:focus + label {\n    color: #1976D2; }\n\n.input-field .dropdown-content li > span {\n  color: black; }\n\n.input-field .autocomplete-content li .highlight {\n  color: #1976D2; }\n\n.red-checkbox[type=\"checkbox\"].filled-in:checked + label:after {\n  background-color: #B71C1C;\n  border: 2px solid #B71C1C; }\n\n.loading {\n  padding: 0; }\n\n.preloader-wrapper.big {\n  width: 120px;\n  height: 120px; }\n\n.preloader-wrapper {\n  display: block;\n  position: relative;\n  top: 150px;\n  margin: 0 auto; }\n\n.progress {\n  margin: 0;\n  background-color: #1976D2; }\n  .progress .indeterminate {\n    background-color: #90CAF9; }\n\n.no-data {\n  margin-top: 150px; }\n  .no-data i.large.material-icons {\n    color: #1976D2;\n    margin-bottom: 100px;\n    font-size: 12rem; }\n  .no-data p {\n    font-size: 24px; }\n    .no-data p a:hover {\n      text-decoration: underline;\n      cursor: pointer; }\n  .no-data.small {\n    margin-top: 30px; }\n    .no-data.small i.medium.material-icons {\n      color: #1976D2;\n      margin-bottom: 30px;\n      font-size: 12rem; }\n    .no-data.small p {\n      margin-bottom: 0px; }\n\n.prices-card-content {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  height: 100%; }\n  .prices-card-content span {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n    width: 100%; }\n    .prices-card-content span.card-title {\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n    .prices-card-content span.card-subtitle {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2;\n      -ms-flex-pack: distribute;\n          justify-content: space-around; }\n  .prices-card-content .card-title-icons {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n    -webkit-box-ordinal-group: 100;\n        -ms-flex-order: 99;\n            order: 99;\n    visibility: hidden;\n    margin-bottom: 16px; }\n    .prices-card-content .card-title-icons i {\n      display: inline;\n      margin-right: 5px; }\n\n.prices-card-content:hover .card-title-icons {\n  visibility: visible; }\n\n.card-reveal:hover .row.icons-container {\n  visibility: visible; }\n\n.card-reveal .row.icons-container {\n  cursor: default;\n  margin-top: 25px;\n  visibility: hidden; }\n  .card-reveal .row.icons-container i {\n    display: inline;\n    margin: 0 10px;\n    -webkit-filter: contrast(0);\n            filter: contrast(0); }\n    .card-reveal .row.icons-container i:hover {\n      -webkit-filter: contrast(1);\n              filter: contrast(1);\n      cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_values__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModal; });


var BaseModal = (function () {
    function BaseModal(serviceInjector) {
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dictionaryService = serviceInjector.getDictionaryService();
    }
    BaseModal.prototype.ngOnInit = function () {
        this.modalParams = __WEBPACK_IMPORTED_MODULE_1__global_values__["b" /* MODAL_PARAMS */];
        this.datePickerParams = this.dictionaryService.getDateDictionarySettings();
    };
    BaseModal.prototype.ngAfterViewChecked = function () {
        if (typeof Materialize.updateTextFields === "function") {
            Materialize.updateTextFields();
        }
    };
    BaseModal.prototype.openModal = function () {
        if (this.canModalBeOpened()) {
            this.initDataBeforeOpenModal();
            this.modalActions.emit({ action: "modal", params: ['open'] });
        }
    };
    BaseModal.prototype.closeModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
        $('.lean-overlay').remove();
    };
    // "on" only for style purposes in html
    BaseModal.prototype.onCloseModal = function () {
        this.closeModal();
    };
    BaseModal.prototype.canModalBeOpened = function () {
        return true;
    };
    ;
    BaseModal.prototype.isDataValid = function () {
        return true;
    };
    ;
    return BaseModal;
}());

//# sourceMappingURL=base.modal.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 179;


/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(76);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricesModalsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PricesModalsService = (function () {
    function PricesModalsService() {
        this.addProduct = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.addPrice = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.addShoppingList = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.editProduct = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.editPrices = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.deleteProduct = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.deletePrices = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.refreshPage = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
    }
    PricesModalsService.prototype.callAddProduct = function () {
        this.addProduct.next(null);
    };
    PricesModalsService.prototype.callAddPrice = function (product) {
        this.addPrice.next(product);
    };
    PricesModalsService.prototype.callAddShoppingList = function (products) {
        this.addShoppingList.next(products);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], PricesModalsService);

//# sourceMappingURL=prices-modals.service.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weights_weights_list_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trainings_trainings_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reports_reports_list_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__prices_prices_list_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_component__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCoachRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/weights', pathMatch: 'full' },
    { path: 'weights', component: __WEBPACK_IMPORTED_MODULE_2__weights_weights_list_component__["a" /* WeightsListComponent */] },
    { path: 'prices', component: __WEBPACK_IMPORTED_MODULE_5__prices_prices_list_component__["a" /* PricesListComponent */] },
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_4__reports_reports_list_component__["a" /* ReportsListComponent */] },
    { path: 'trainings', component: __WEBPACK_IMPORTED_MODULE_3__trainings_trainings_component__["a" /* TrainingsComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__about_component__["a" /* AboutComponent */] }
];
var MyCoachRoutingModule = (function () {
    function MyCoachRoutingModule() {
    }
    return MyCoachRoutingModule;
}());
MyCoachRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], MyCoachRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-root',
        template: __webpack_require__(296),
        styles: [__webpack_require__(288)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__weights_weights_module__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reports_reports_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__trainings_tranings_module__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__prices_prices_module__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_dictionary_mock_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_dictionary_back_end_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_date_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_component__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_16__about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__prices_prices_module__["a" /* PricesModule */],
            __WEBPACK_IMPORTED_MODULE_8__reports_reports_module__["a" /* ReportsModule */],
            __WEBPACK_IMPORTED_MODULE_9__trainings_tranings_module__["a" /* TrainingsModule */],
            __WEBPACK_IMPORTED_MODULE_7__weights_weights_module__["a" /* WeightsModule */],
            __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* MyCoachRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__shared_services_service_injector__["a" /* ServiceInjector */],
            __WEBPACK_IMPORTED_MODULE_15__shared_services_date_service__["a" /* DateService */],
            __WEBPACK_IMPORTED_MODULE_12__shared_services_dictionary_mock_service__["a" /* DictionaryMockService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_services_dictionary_back_end_service__["a" /* DictionaryBackEndService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        $(".button-collapse").sideNav();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-header',
        template: "\n  <nav>\n    <div class=\"nav-wrapper blue darken-2\">\n      <a href=\"#\" class=\"brand-logo\">{{'navbar.applicationName.label' | dictionary}}</a>\n      <a href=\"#\" data-activates=\"mobile-nav\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li [routerLink]=\"['/weights']\" routerLinkActive=\"active\"><a>{{'navbar.weights.label' | dictionary}}</a></li>\n        <li [routerLink]=\"['/trainings']\" routerLinkActive=\"active\"><a>{{'navbar.trainings.label' | dictionary}}</a></li>\n        <li [routerLink]=\"['/prices']\" routerLinkActive=\"active\"><a>{{'navbar.foodPrices.label' | dictionary}}</a></li>\n        <li [routerLink]=\"['/reports']\" routerLinkActive=\"active\"><a>{{'navbar.reports.label' | dictionary}}</a></li>\n        <li [routerLink]=\"['/about']\" routerLinkActive=\"active\"><a>{{'navbar.about.label' | dictionary}}</a></li>\n      </ul>\n      <ul class=\"side-nav\" id=\"mobile-nav\">\n        <h4>{{'navbar.navigation.label' | dictionary}}</h4>\n        <div class=\"divider\"></div>\n        <li [routerLink]=\"['/weights']\" routerLinkActive=\"active\"><a>{{'navbar.weights.label' | dictionary}}</a></li>\n        <li [routerLink]=\"['/trainings']\" routerLinkActive=\"active\"><a>{{'navbar.trainings.label' | dictionary}}</a></li>\n        <li [routerLink]=\"['/prices']\" routerLinkActive=\"active\"><a>{{'navbar.foodPrices.label' | dictionary}}</a></li>\n        <li [routerLink]=\"['/reports']\" routerLinkActive=\"active\"><a>{{'navbar.reports.label' | dictionary}}</a></li>\n        <li [routerLink]=\"['/about']\" routerLinkActive=\"active\"><a>{{'navbar.about.label' | dictionary}}</a></li>\n      </ul>\n    </div>\n  </nav>\n",
        styles: ['.side-nav h4 {color: black; padding-left: 5px;}']
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_entities_add_entities__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_prices_modals_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_date_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_base_modal__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceAddModal; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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






var PriceAddModal = (function (_super) {
    __extends(PriceAddModal, _super);
    function PriceAddModal(pricesModalsService, serviceInjector, dateService) {
        var _this = _super.call(this, serviceInjector) || this;
        _this.pricesModalsService = pricesModalsService;
        _this.serviceInjector = serviceInjector;
        _this.dateService = dateService;
        _this.place = '';
        _this.priceDate = '';
        _this.price = 0;
        _this.quantity = 1;
        _this.pricesService = serviceInjector.getPricesService();
        return _this;
    }
    PriceAddModal.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.pricesModalsService.addPrice.subscribe(function (product) {
            _this.product = product;
            _this.openModal();
        });
    };
    PriceAddModal.prototype.initDataBeforeOpenModal = function () {
        this.place = '';
        this.priceDate = '';
        this.price = 0;
        this.quantity = 1;
    };
    PriceAddModal.prototype.isDataValid = function () {
        return this.quantity > 0 && this.price > 0 && this.dateService.isDateValid(this.priceDate);
    };
    PriceAddModal.prototype.onAddClick = function () {
        this.priceToAdd = new __WEBPACK_IMPORTED_MODULE_1__shared_entities_add_entities__["d" /* NewPrice */](this.product.productId, this.price, this.quantity, this.place, this.dateService.parseStringToDate(this.priceDate));
        this.pricesService.addPrice(this.priceToAdd);
        this.pricesModalsService.callRefreshPage();
        this.closeModal();
    };
    PriceAddModal.prototype.getProductName = function () {
        if (this.product) {
            return this.product.productName;
        }
        return '';
    };
    return PriceAddModal;
}(__WEBPACK_IMPORTED_MODULE_5__shared_components_base_modal__["a" /* BaseModal */]));
PriceAddModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-price-add-modal',
        template: __webpack_require__(297),
        styles: [__webpack_require__(34), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_prices_modals_service__["a" /* PricesModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_prices_modals_service__["a" /* PricesModalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_date_service__["a" /* DateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_date_service__["a" /* DateService */]) === "function" && _c || Object])
], PriceAddModal);

var _a, _b, _c;
//# sourceMappingURL=price-add.modal.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_prices_modals_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_date_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_base_modal__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricesDeleteModal; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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





var PricesDeleteModal = (function (_super) {
    __extends(PricesDeleteModal, _super);
    function PricesDeleteModal(pricesModalsService, serviceInjector, dateService) {
        var _this = _super.call(this, serviceInjector) || this;
        _this.pricesModalsService = pricesModalsService;
        _this.serviceInjector = serviceInjector;
        _this.dateService = dateService;
        _this.selectedPrices = [];
        _this.checkboxesForPrices = [];
        _this.pricesToDeleteIndexes = [];
        _this.pricesService = serviceInjector.getPricesService();
        return _this;
    }
    PricesDeleteModal.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.pricesModalsService.deletePrices.subscribe(function (data) {
            _this.selectedPrices = data.prices;
            _this.modalTitle = data.modalTitle;
            _this.openModal();
        });
    };
    PricesDeleteModal.prototype.initDataBeforeOpenModal = function () {
        var _this = this;
        this.pricesToDeleteIndexes = [];
        this.checkboxesForPrices = [];
        if (this.selectedPrices) {
            this.selectedPrices.forEach(function () { return _this.checkboxesForPrices.push(false); });
        }
    };
    PricesDeleteModal.prototype.isDataValid = function () {
        for (var _i = 0, _a = this.checkboxesForPrices; _i < _a.length; _i++) {
            var checkbox = _a[_i];
            if (checkbox) {
                return true;
            }
        }
        return false;
    };
    PricesDeleteModal.prototype.onDeleteClick = function () {
        var _this = this;
        for (var i = 0; i < this.checkboxesForPrices.length; i++) {
            if (this.checkboxesForPrices[i]) {
                this.pricesToDeleteIndexes.push(i);
            }
        }
        if (this.pricesToDeleteIndexes.length > 0) {
            var pricesToDelete_1 = [];
            this.pricesToDeleteIndexes.forEach(function (index) {
                pricesToDelete_1.push(_this.selectedPrices[index]);
            });
            this.pricesService.deletePrices(pricesToDelete_1);
            this.pricesModalsService.callRefreshPage();
        }
        this.closeModal();
    };
    PricesDeleteModal.prototype.getDateAsString = function (date) {
        return this.dateService.parseDateToString(date);
    };
    return PricesDeleteModal;
}(__WEBPACK_IMPORTED_MODULE_4__shared_components_base_modal__["a" /* BaseModal */]));
PricesDeleteModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-prices-delete-modal',
        template: __webpack_require__(298),
        styles: [__webpack_require__(34), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_prices_modals_service__["a" /* PricesModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_prices_modals_service__["a" /* PricesModalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_date_service__["a" /* DateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_date_service__["a" /* DateService */]) === "function" && _c || Object])
], PricesDeleteModal);

var _a, _b, _c;
//# sourceMappingURL=prices-delete.modal.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_prices_modals_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_global_values__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_base_modal__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricesEditModal; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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





var PricesEditModal = (function (_super) {
    __extends(PricesEditModal, _super);
    function PricesEditModal(pricesModalsService, serviceInjector) {
        var _this = _super.call(this, serviceInjector) || this;
        _this.pricesModalsService = pricesModalsService;
        _this.serviceInjector = serviceInjector;
        _this.selectedPrices = [];
        _this.pricesToEditIndexes = [];
        _this.pricesService = serviceInjector.getPricesService();
        return _this;
    }
    PricesEditModal.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.pricesModalsService.editPrices.subscribe(function (data) {
            _this.selectedPrices = data.prices;
            _this.modalTitle = data.modalTitle;
            _this.openModal();
        });
    };
    PricesEditModal.prototype.initDataBeforeOpenModal = function () {
        this.pricesToEditIndexes = [];
    };
    PricesEditModal.prototype.isDataValid = function () {
        return this.pricesToEditIndexes.length > 0;
    };
    PricesEditModal.prototype.onEditClick = function () {
        var _this = this;
        if (this.pricesToEditIndexes.length > 0) {
            var pricesToEdit_1 = [];
            this.pricesToEditIndexes.forEach(function (index) {
                pricesToEdit_1.push(_this.selectedPrices[index]);
                _this.pricesService.editPrices(pricesToEdit_1);
            });
            this.pricesModalsService.callRefreshPage();
        }
        this.closeModal();
    };
    PricesEditModal.prototype.addPriceIndexToChanged = function (price) {
        if (this.pricesToEditIndexes.indexOf(price) === __WEBPACK_IMPORTED_MODULE_3__shared_global_values__["a" /* DOES_NOT_CONTAIN */]) {
            this.pricesToEditIndexes.push(price);
        }
    };
    return PricesEditModal;
}(__WEBPACK_IMPORTED_MODULE_4__shared_components_base_modal__["a" /* BaseModal */]));
PricesEditModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-prices-edit-modal',
        template: __webpack_require__(299),
        styles: [__webpack_require__(34), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_prices_modals_service__["a" /* PricesModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_prices_modals_service__["a" /* PricesModalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _b || Object])
], PricesEditModal);

var _a, _b;
//# sourceMappingURL=prices-edit.modal.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricesModals; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable:component-class-suffix */

var PricesModals = (function () {
    function PricesModals() {
    }
    return PricesModals;
}());
PricesModals = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-prices-modals',
        template: "\n    <coach-price-add-modal></coach-price-add-modal>\n    <coach-prices-delete-modal></coach-prices-delete-modal>\n    <coach-prices-edit-modal></coach-prices-edit-modal>\n    <coach-product-add-modal></coach-product-add-modal>\n    <coach-product-delete-modal></coach-product-delete-modal>\n    <coach-product-edit-modal></coach-product-edit-modal>\n    <coach-shopping-list-modal></coach-shopping-list-modal>\n  "
    })
], PricesModals);

//# sourceMappingURL=prices.modals.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_entities_add_entities__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_prices_modals_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_base_modal__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAddModal; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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







var ProductAddModal = (function (_super) {
    __extends(ProductAddModal, _super);
    function ProductAddModal(pricesModalsService, serviceInjector, http) {
        var _this = _super.call(this, serviceInjector) || this;
        _this.pricesModalsService = pricesModalsService;
        _this.serviceInjector = serviceInjector;
        _this.http = http;
        _this.productName = '';
        _this.screen = '';
        _this.uploadUrl = "/product/uploadPhoto";
        _this.imagesUrl = "/images/";
        _this.pricesService = serviceInjector.getPricesService();
        return _this;
    }
    ProductAddModal.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.pricesModalsService.addProduct.subscribe(function () {
            _this.openModal();
        });
    };
    ProductAddModal.prototype.initDataBeforeOpenModal = function () {
        this.productName = '';
        this.screen = '';
        if ($('#fab').hasClass('active')) {
            $('#fab a').click();
        }
    };
    ProductAddModal.prototype.isDataValid = function () {
        return this.productName.length > 0;
    };
    ProductAddModal.prototype.uploadPhoto = function () {
        var _this = this;
        if (this.photoFile.nativeElement.files.length > 0) {
            var file = this.photoFile.nativeElement.files[0];
            var input = new FormData();
            input.append("file", file);
            this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].url + this.uploadUrl, input).subscribe(function (res) {
                _this.screen = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].url + _this.imagesUrl + res['_body'];
            }, function (err) {
                console.log("not ok");
                console.log(err);
            });
        }
    };
    ProductAddModal.prototype.onAddClick = function () {
        this.productToAdd = new __WEBPACK_IMPORTED_MODULE_1__shared_entities_add_entities__["e" /* NewProduct */](this.productName, this.screen);
        this.pricesService.addProduct(this.productToAdd);
        this.pricesModalsService.callRefreshPage();
        this.onCloseModal();
    };
    ProductAddModal.prototype.canStoreFiles = function () {
        return true;
    };
    return ProductAddModal;
}(__WEBPACK_IMPORTED_MODULE_5__shared_components_base_modal__["a" /* BaseModal */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("photoFile"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ProductAddModal.prototype, "photoFile", void 0);
ProductAddModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-product-add-modal',
        template: __webpack_require__(300),
        styles: [__webpack_require__(34), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_prices_modals_service__["a" /* PricesModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_prices_modals_service__["a" /* PricesModalsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === "function" && _d || Object])
], ProductAddModal);

var _a, _b, _c, _d;
//# sourceMappingURL=product-add.modal.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_prices_modals_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_base_modal__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDeleteModal; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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




var ProductDeleteModal = (function (_super) {
    __extends(ProductDeleteModal, _super);
    function ProductDeleteModal(pricesModalsService, serviceInjector) {
        var _this = _super.call(this, serviceInjector) || this;
        _this.pricesModalsService = pricesModalsService;
        _this.serviceInjector = serviceInjector;
        _this.selectedProduct = null;
        _this.pricesService = serviceInjector.getPricesService();
        return _this;
    }
    ProductDeleteModal.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.pricesModalsService.deleteProduct.subscribe(function (product) {
            _this.selectedProduct = product;
            _this.openModal();
        });
    };
    ;
    ProductDeleteModal.prototype.initDataBeforeOpenModal = function () {
        this.modalTitle = this.selectedProduct.productName;
    };
    ProductDeleteModal.prototype.isDataValid = function () {
        return true;
    };
    ProductDeleteModal.prototype.onDeleteClick = function () {
        this.pricesService.deleteProduct(this.selectedProduct);
        this.pricesModalsService.callRefreshPage();
        this.closeModal();
    };
    return ProductDeleteModal;
}(__WEBPACK_IMPORTED_MODULE_3__shared_components_base_modal__["a" /* BaseModal */]));
ProductDeleteModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-product-delete-modal',
        template: __webpack_require__(301),
        styles: [__webpack_require__(34), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_prices_modals_service__["a" /* PricesModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_prices_modals_service__["a" /* PricesModalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _b || Object])
], ProductDeleteModal);

var _a, _b;
//# sourceMappingURL=product-delete.modal.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_prices_modals_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_base_modal__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditModal; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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




var ProductEditModal = (function (_super) {
    __extends(ProductEditModal, _super);
    function ProductEditModal(pricesModalsService, serviceInjector) {
        var _this = _super.call(this, serviceInjector) || this;
        _this.pricesModalsService = pricesModalsService;
        _this.serviceInjector = serviceInjector;
        _this.selectedProduct = null;
        _this.productName = '';
        _this.screen = '';
        _this.pricesService = serviceInjector.getPricesService();
        return _this;
    }
    ProductEditModal.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.pricesModalsService.editProduct.subscribe(function (product) {
            _this.selectedProduct = product;
            _this.openModal();
        });
    };
    ProductEditModal.prototype.initDataBeforeOpenModal = function () {
        this.productName = this.selectedProduct.productName;
        this.screen = this.selectedProduct.screenUrl;
    };
    ProductEditModal.prototype.isDataValid = function () {
        return this.productName.length > 0;
    };
    ProductEditModal.prototype.onEditClick = function () {
        this.selectedProduct.productName = this.productName;
        this.selectedProduct.screenUrl = this.screen;
        this.pricesService.editProduct(this.selectedProduct);
        this.pricesModalsService.callRefreshPage();
        this.closeModal();
    };
    ProductEditModal.prototype.canStoreFiles = function () {
        return true;
    };
    return ProductEditModal;
}(__WEBPACK_IMPORTED_MODULE_3__shared_components_base_modal__["a" /* BaseModal */]));
ProductEditModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-product-edit-modal',
        template: __webpack_require__(302),
        styles: [__webpack_require__(34), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_prices_modals_service__["a" /* PricesModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_prices_modals_service__["a" /* PricesModalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _b || Object])
], ProductEditModal);

var _a, _b;
//# sourceMappingURL=product-edit.modal.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_entities_add_entities__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_prices_modals_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_global_values__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_date_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_base_modal__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListModal; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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







var ShoppingListModal = (function (_super) {
    __extends(ShoppingListModal, _super);
    function ShoppingListModal(pricesModalsService, serviceInjector, dateService) {
        var _this = _super.call(this, serviceInjector) || this;
        _this.pricesModalsService = pricesModalsService;
        _this.serviceInjector = serviceInjector;
        _this.dateService = dateService;
        _this.shoppingDate = '';
        _this.place = '';
        _this.autoCompleteData = { data: {} };
        _this.productNamesForPrices = [];
        _this.pricesService = serviceInjector.getPricesService();
        _this.products = [];
        _this.shoppingListToAdd = new __WEBPACK_IMPORTED_MODULE_1__shared_entities_add_entities__["c" /* ShoppingList */]('', []);
        return _this;
    }
    ShoppingListModal.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.pricesModalsService.addShoppingList.subscribe(function (products) {
            _this.products = products;
            _this.openModal();
        });
        this.productNamesForPrices = [];
    };
    ShoppingListModal.prototype.initDataBeforeOpenModal = function () {
        this.shoppingListToAdd = new __WEBPACK_IMPORTED_MODULE_1__shared_entities_add_entities__["c" /* ShoppingList */]('', []);
        this.addNewEmptyPriceToList();
        this.shoppingDate = '';
        this.place = '';
        this.productNamesForPrices = [];
        this.autoCompleteData = { data: {} };
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            this.autoCompleteData.data[product.productName] = product.screenUrl;
        }
        if ($('#fab').hasClass('active')) {
            $('#fab a').click();
        }
    };
    ShoppingListModal.prototype.isDataValid = function () {
        return this.products.length > 0 && this.hasEveryProductValidPriceAndQuantity()
            && this.hasEveryProductValidName() && this.dateService.isDateValid(this.shoppingDate)
            && this.place.length > 0;
    };
    ShoppingListModal.prototype.onAddShoppingListClick = function () {
        this.shoppingListToAdd.shoppingDate = this.dateService.parseStringToDate(this.shoppingDate);
        this.shoppingListToAdd.place = this.place;
        for (var i = 0; i < this.shoppingListToAdd.prices.length; i++) {
            this.shoppingListToAdd.prices[i].productId = this.getProductIdForName(this.productNamesForPrices[i]);
        }
        this.pricesService.addShoppingList(this.shoppingListToAdd);
        this.pricesModalsService.callRefreshPage();
        this.closeModal();
    };
    ShoppingListModal.prototype.onAddProductClick = function () {
        this.pricesModalsService.callAddProduct();
    };
    ShoppingListModal.prototype.addNewEmptyPriceToList = function () {
        this.shoppingListToAdd.prices.push(new __WEBPACK_IMPORTED_MODULE_1__shared_entities_add_entities__["d" /* NewPrice */](-1, 0, 0));
        this.productNamesForPrices.push('');
    };
    ;
    ShoppingListModal.prototype.onDeletePrice = function (index) {
        this.shoppingListToAdd.prices.splice(index, 1);
        this.productNamesForPrices.splice(index, 1);
    };
    ShoppingListModal.prototype.getProductIdForName = function (productName) {
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.productName === productName) {
                return product.productId;
            }
        }
        return __WEBPACK_IMPORTED_MODULE_4__shared_global_values__["a" /* DOES_NOT_CONTAIN */];
    };
    ShoppingListModal.prototype.hasEveryProductValidPriceAndQuantity = function () {
        if (!this.shoppingListToAdd.prices) {
            return false;
        }
        for (var _i = 0, _a = this.shoppingListToAdd.prices; _i < _a.length; _i++) {
            var price = _a[_i];
            if (price.value <= 0 || price.quantity <= 0) {
                return false;
            }
        }
        return true;
    };
    ShoppingListModal.prototype.hasEveryProductValidName = function () {
        for (var _i = 0, _a = this.productNamesForPrices; _i < _a.length; _i++) {
            var productName = _a[_i];
            if (this.getProductIdForName(productName) === __WEBPACK_IMPORTED_MODULE_4__shared_global_values__["a" /* DOES_NOT_CONTAIN */]) {
                return false;
            }
        }
        return true;
    };
    return ShoppingListModal;
}(__WEBPACK_IMPORTED_MODULE_6__shared_components_base_modal__["a" /* BaseModal */]));
ShoppingListModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-shopping-list-modal',
        template: __webpack_require__(303),
        styles: [__webpack_require__(34), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_prices_modals_service__["a" /* PricesModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_prices_modals_service__["a" /* PricesModalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_date_service__["a" /* DateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_date_service__["a" /* DateService */]) === "function" && _c || Object])
], ShoppingListModal);

var _a, _b, _c;
//# sourceMappingURL=shopping-list.modal.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_components_base_card_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_entities_get_entities__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_prices_modals_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_date_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricesCardComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
}(__WEBPACK_IMPORTED_MODULE_0__shared_components_base_card_component__["a" /* BaseCardComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_entities_get_entities__["a" /* Product */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_entities_get_entities__["a" /* Product */]) === "function" && _a || Object)
], PricesCardComponent.prototype, "productPreview", void 0);
PricesCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'coach-prices-card',
        template: __webpack_require__(304),
        styles: [__webpack_require__(133)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_prices_modals_service__["a" /* PricesModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_prices_modals_service__["a" /* PricesModalsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_date_service__["a" /* DateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_date_service__["a" /* DateService */]) === "function" && _d || Object])
], PricesCardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=prices-card.component.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prices_list_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_prices_mock_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_prices_back_end_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_prices_modals_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__prices_card_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modals_prices_modals__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modals_product_add_modal__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modals_price_add_modal__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modals_prices_edit_modal__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modals_product_edit_modal__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modals_product_delete_modal__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modals_prices_delete_modal__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modals_shopping_list_modal__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var PricesModule = (function () {
    function PricesModule() {
    }
    return PricesModule;
}());
PricesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__prices_list_component__["a" /* PricesListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__prices_card_component__["a" /* PricesCardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__modals_prices_modals__["a" /* PricesModals */],
            __WEBPACK_IMPORTED_MODULE_12__modals_price_add_modal__["a" /* PriceAddModal */],
            __WEBPACK_IMPORTED_MODULE_16__modals_prices_delete_modal__["a" /* PricesDeleteModal */],
            __WEBPACK_IMPORTED_MODULE_13__modals_prices_edit_modal__["a" /* PricesEditModal */],
            __WEBPACK_IMPORTED_MODULE_11__modals_product_add_modal__["a" /* ProductAddModal */],
            __WEBPACK_IMPORTED_MODULE_15__modals_product_delete_modal__["a" /* ProductDeleteModal */],
            __WEBPACK_IMPORTED_MODULE_14__modals_product_edit_modal__["a" /* ProductEditModal */],
            __WEBPACK_IMPORTED_MODULE_17__modals_shopping_list_modal__["a" /* ShoppingListModal */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_prices_mock_service__["a" /* PricesMockService */],
            __WEBPACK_IMPORTED_MODULE_5__services_prices_back_end_service__["a" /* PricesBackEndService */],
            __WEBPACK_IMPORTED_MODULE_8__services_prices_modals_service__["a" /* PricesModalsService */]
        ]
    })
], PricesModule);

//# sourceMappingURL=prices.module.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_entities_add_entities__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_report_modals_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_date_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_base_modal__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportAddModal; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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






var ReportAddModal = (function (_super) {
    __extends(ReportAddModal, _super);
    function ReportAddModal(reportModalsService, serviceInjector, dateService) {
        var _this = _super.call(this, serviceInjector) || this;
        _this.reportModalsService = reportModalsService;
        _this.serviceInjector = serviceInjector;
        _this.dateService = dateService;
        _this.reportContent = '';
        _this.startDate = '';
        _this.endDate = '';
        _this.reportService = serviceInjector.getReportService();
        return _this;
    }
    ReportAddModal.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.reportModalsService.addReport.subscribe(function () {
            _this.openModal();
        });
    };
    ReportAddModal.prototype.initDataBeforeOpenModal = function () {
        this.reportContent = '';
        this.startDate = '';
        this.endDate = '';
    };
    ReportAddModal.prototype.isDataValid = function () {
        return this.reportContent.length > 0 && this.dateService.isSecondDateLater(this.startDate, this.endDate);
    };
    ReportAddModal.prototype.onAddClick = function () {
        this.reportToAdd = new __WEBPACK_IMPORTED_MODULE_1__shared_entities_add_entities__["b" /* NewReport */](this.reportContent, this.dateService.parseStringToDate(this.startDate), this.dateService.parseStringToDate(this.endDate));
        this.reportService.addReport(this.reportToAdd);
        this.reportModalsService.callRefreshPage();
        this.closeModal();
    };
    return ReportAddModal;
}(__WEBPACK_IMPORTED_MODULE_5__shared_components_base_modal__["a" /* BaseModal */]));
ReportAddModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-report-add-modal',
        template: __webpack_require__(306),
        styles: [__webpack_require__(93), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_report_modals_service__["a" /* ReportModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_report_modals_service__["a" /* ReportModalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_date_service__["a" /* DateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_date_service__["a" /* DateService */]) === "function" && _c || Object])
], ReportAddModal);

var _a, _b, _c;
//# sourceMappingURL=report-add.modal.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_report_modals_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_base_modal__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDeleteModal; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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




var ReportDeleteModal = (function (_super) {
    __extends(ReportDeleteModal, _super);
    function ReportDeleteModal(reportModalsService, serviceInjector) {
        var _this = _super.call(this, serviceInjector) || this;
        _this.reportModalsService = reportModalsService;
        _this.serviceInjector = serviceInjector;
        _this.selectedReport = null;
        _this.reportService = serviceInjector.getReportService();
        return _this;
    }
    ReportDeleteModal.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.reportModalsService.deleteReport.subscribe(function (data) {
            _this.selectedReport = data.report;
            _this.modalTitle = data.modalTitle;
            _this.openModal();
        });
    };
    ;
    ReportDeleteModal.prototype.initDataBeforeOpenModal = function () {
    };
    ReportDeleteModal.prototype.canModalBeOpened = function () {
        if (!this.selectedReport) {
            Materialize.toast(this.dictionaryService.getDictionaryValue('page.reports.loadFirst.tooltip'), 3000);
            return false;
        }
        return true;
    };
    ReportDeleteModal.prototype.isDataValid = function () {
        return true;
    };
    ReportDeleteModal.prototype.onDeleteClick = function () {
        this.reportService.deleteReport(this.selectedReport);
        this.reportModalsService.callRefreshPage();
        this.closeModal();
    };
    return ReportDeleteModal;
}(__WEBPACK_IMPORTED_MODULE_3__shared_components_base_modal__["a" /* BaseModal */]));
ReportDeleteModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-report-delete-modal',
        template: __webpack_require__(307),
        styles: [__webpack_require__(93), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_report_modals_service__["a" /* ReportModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_report_modals_service__["a" /* ReportModalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _b || Object])
], ReportDeleteModal);

var _a, _b;
//# sourceMappingURL=report-delete.modal.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_report_modals_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_date_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_base_modal__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportEditModal; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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





var ReportEditModal = (function (_super) {
    __extends(ReportEditModal, _super);
    function ReportEditModal(reportModalsService, serviceInjector, dateService) {
        var _this = _super.call(this, serviceInjector) || this;
        _this.reportModalsService = reportModalsService;
        _this.serviceInjector = serviceInjector;
        _this.dateService = dateService;
        _this.selectedReport = null;
        _this.reportContent = '';
        _this.startDate = '';
        _this.endDate = '';
        _this.reportService = serviceInjector.getReportService();
        return _this;
    }
    ReportEditModal.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.reportModalsService.editReport.subscribe(function (data) {
            _this.selectedReport = data.report;
            _this.modalTitle = data.modalTitle;
            _this.openModal();
        });
    };
    ReportEditModal.prototype.initDataBeforeOpenModal = function () {
        this.reportContent = this.selectedReport.content;
        this.startDate = this.dateService.parseDateToString(this.selectedReport.startDate);
        this.endDate = this.dateService.parseDateToString(this.selectedReport.endDate);
    };
    ReportEditModal.prototype.canModalBeOpened = function () {
        if (!this.selectedReport) {
            Materialize.toast(this.dictionaryService.getDictionaryValue('page.reports.loadFirst.tooltip'), 3000);
            return false;
        }
        return true;
    };
    ReportEditModal.prototype.isDataValid = function () {
        return this.reportContent.length > 0 && this.dateService.isSecondDateLater(this.startDate, this.endDate);
    };
    ReportEditModal.prototype.onEditClick = function () {
        this.selectedReport.startDate = this.dateService.parseStringToDate(this.startDate);
        this.selectedReport.endDate = this.dateService.parseStringToDate(this.endDate);
        this.selectedReport.content = this.reportContent;
        this.reportService.editReport(this.selectedReport);
        this.reportModalsService.callRefreshPage();
        this.closeModal();
    };
    return ReportEditModal;
}(__WEBPACK_IMPORTED_MODULE_4__shared_components_base_modal__["a" /* BaseModal */]));
ReportEditModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-report-edit-modal',
        template: __webpack_require__(308),
        styles: [__webpack_require__(93), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_report_modals_service__["a" /* ReportModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_report_modals_service__["a" /* ReportModalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_date_service__["a" /* DateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_date_service__["a" /* DateService */]) === "function" && _c || Object])
], ReportEditModal);

var _a, _b, _c;
//# sourceMappingURL=report-edit.modal.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportModals; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable:component-class-suffix */

var ReportModals = (function () {
    function ReportModals() {
    }
    return ReportModals;
}());
ReportModals = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-report-modals',
        template: "\n    <coach-report-add-modal></coach-report-add-modal>\n    <coach-report-delete-modal></coach-report-delete-modal>\n    <coach-report-edit-modal></coach-report-edit-modal>"
    })
], ReportModals);

//# sourceMappingURL=report.modals.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_entities_preview_entities__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_modals_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_base_card_component__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportCardComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportCardComponent = (function (_super) {
    __extends(ReportCardComponent, _super);
    function ReportCardComponent(reportModalsService, serviceInjector) {
        var _this = _super.call(this) || this;
        _this.reportModalsService = reportModalsService;
        _this.serviceInjector = serviceInjector;
        _this.reportService = serviceInjector.getReportService();
        return _this;
    }
    ReportCardComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.report = null;
        this.previewTitle = this.reportService.getPreviewTitle(this.reportPreview);
    };
    ReportCardComponent.prototype.onReportClick = function () {
        var _this = this;
        this.toggleShow();
        if (this.showData) {
            if (this.report == null) {
                this.reportService.getReport(this.reportPreview.reportId)
                    .subscribe(function (report) {
                    _this.report = report;
                }, function () { }, function () {
                    _this.isLoading = false;
                });
            }
        }
    };
    ReportCardComponent.prototype.onEditClick = function () {
        this.reportModalsService.callEditReport(this.report, this.previewTitle);
    };
    ReportCardComponent.prototype.onDeleteClick = function () {
        this.reportModalsService.callDeleteReport(this.report, this.previewTitle);
    };
    return ReportCardComponent;
}(__WEBPACK_IMPORTED_MODULE_4__shared_components_base_card_component__["a" /* BaseCardComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_entities_preview_entities__["a" /* ReportPreview */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_entities_preview_entities__["a" /* ReportPreview */]) === "function" && _a || Object)
], ReportCardComponent.prototype, "reportPreview", void 0);
ReportCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-report-card',
        template: __webpack_require__(309),
        styles: [__webpack_require__(134), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_report_modals_service__["a" /* ReportModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_report_modals_service__["a" /* ReportModalsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _c || Object])
], ReportCardComponent);

var _a, _b, _c;
//# sourceMappingURL=report-card.component.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Cycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Exercise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ExerciseSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Price; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Report; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Series; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Training; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Weight; });
var Cycle = (function () {
    function Cycle(cycleId, sets, startDate, endDate) {
        this.cycleId = cycleId;
        this.sets = sets;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return Cycle;
}());

var Exercise = (function () {
    function Exercise(exerciseId, exerciseName, exerciseSessions) {
        this.exerciseId = exerciseId;
        this.exerciseName = exerciseName;
        this.exerciseSessions = exerciseSessions;
    }
    return Exercise;
}());

var ExerciseSession = (function () {
    function ExerciseSession(exereciseSessionId, series) {
        this.exereciseSessionId = exereciseSessionId;
        this.series = series;
    }
    return ExerciseSession;
}());

var Price = (function () {
    function Price(priceId, priceDate, place, quantity, value, productId) {
        this.priceId = priceId;
        this.priceDate = priceDate;
        this.place = place;
        this.quantity = quantity;
        this.value = value;
        this.productId = productId;
    }
    return Price;
}());

var Product = (function () {
    function Product(productId, productName, screenUrl, average) {
        this.productId = productId;
        this.productName = productName;
        this.screenUrl = screenUrl;
        this.average = average;
    }
    return Product;
}());

var Report = (function () {
    function Report(reportId, content, startDate, endDate) {
        this.reportId = reportId;
        this.content = content;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return Report;
}());

var Series = (function () {
    function Series(seriesId, repeats, weight, comment) {
        this.seriesId = seriesId;
        this.repeats = repeats;
        this.weight = weight;
        this.comment = comment;
    }
    return Series;
}());

var Set = (function () {
    function Set(setId, setName, exercises, trainings) {
        this.setId = setId;
        this.setName = setName;
        this.exercises = exercises;
        this.trainings = trainings;
    }
    return Set;
}());

var Training = (function () {
    function Training(trainingId, trainingDate) {
        this.trainingId = trainingId;
        this.trainingDate = trainingDate;
    }
    return Training;
}());

var Weight = (function () {
    function Weight(weightId, value, measurementDate) {
        this.weightId = weightId;
        this.value = value;
        this.measurementDate = measurementDate;
    }
    return Weight;
}());

//# sourceMappingURL=get.entities.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reports_list_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_card_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_report_back_end_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_report_mock_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_report_modals_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modals_report_modals__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modals_report_add_modal__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modals_report_delete_modal__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modals_report_edit_modal__ = __webpack_require__(207);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ReportsModule = (function () {
    function ReportsModule() {
    }
    return ReportsModule;
}());
ReportsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__reports_list_component__["a" /* ReportsListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__report_card_component__["a" /* ReportCardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__modals_report_modals__["a" /* ReportModals */],
            __WEBPACK_IMPORTED_MODULE_11__modals_report_add_modal__["a" /* ReportAddModal */],
            __WEBPACK_IMPORTED_MODULE_12__modals_report_delete_modal__["a" /* ReportDeleteModal */],
            __WEBPACK_IMPORTED_MODULE_13__modals_report_edit_modal__["a" /* ReportEditModal */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_report_back_end_service__["a" /* ReportBackEndService */],
            __WEBPACK_IMPORTED_MODULE_8__services_report_mock_service__["a" /* ReportMockService */],
            __WEBPACK_IMPORTED_MODULE_9__services_report_modals_service__["a" /* ReportModalsService */]
        ]
    })
], ReportsModule);

//# sourceMappingURL=reports.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LineChartComponent = (function () {
    function LineChartComponent() {
        this.minValue = 99;
        this.maxValue = 0;
        this.dataOffset = 5;
        this.isChartLegend = false;
        this.chartType = 'line';
        this.chartOptions = {
            responsive: true,
            animation: {
                easing: 'easeInOutExpo'
            },
        };
        this.chartColors = [
            {
                backgroundColor: '#BBDEFB',
                borderColor: '#1976D2',
                pointBackgroundColor: '#1976D2',
                pointBorderColor: '#BBDEFB',
                pointHoverBackgroundColor: '#2196F3',
                pointHoverBorderColor: '#1565C0' // MATERIAL DESIGN 800
            },
            {
                backgroundColor: '#FFCDD2',
                borderColor: '#D32F2F',
                pointBackgroundColor: '#D32F2F',
                pointBorderColor: '#FFCDD2',
                pointHoverBackgroundColor: '#F44336',
                pointHoverBorderColor: '#C62828' // MATERIAL DESIGN 800
            },
            {
                backgroundColor: '#C8E6C9',
                borderColor: '#388E3C',
                pointBackgroundColor: '#388E3C',
                pointBorderColor: '#C8E6C9',
                pointHoverBackgroundColor: '#4CAF50',
                pointHoverBorderColor: '#2E7D32' // MATERIAL DESIGN 800
            }
        ];
    }
    LineChartComponent.prototype.ngOnInit = function () {
        this.findMinAndMaxValues();
    };
    LineChartComponent.prototype.findMinAndMaxValues = function () {
        var _this = this;
        this.chartData[0].data.forEach(function (value) {
            if (value < _this.minValue) {
                _this.minValue = Math.round(value);
            }
            else if (value > _this.maxValue) {
                _this.maxValue = Math.round(value);
            }
        });
    };
    return LineChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LineChartComponent.prototype, "chartData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LineChartComponent.prototype, "chartLabels", void 0);
LineChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-line-chart',
        template: __webpack_require__(311),
        styles: [__webpack_require__(7)]
    })
], LineChartComponent);

//# sourceMappingURL=line-chart.component.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_entities__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CYCLES_LIST; });

var CYCLES_LIST = [
    null,
    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["e" /* Cycle */](1, [
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["f" /* Set */](1, "Push", [
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](1, "Wyciskanie leżąc", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](1, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](1, 3.75, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](2, 5, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](3, 6.25, 12)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](10, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](28, 5, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](29, 6.25, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](30, 7.5, 12)
                ])
            ]),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](2, "Wyciskanie w skosie", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](2, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](4, 1.25, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](5, 2.5, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](6, 3.75, 12)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](11, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](31, 2.5, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](32, 3.75, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](33, 5, 12)
                ])
            ]),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](3, "Wyciskanie siedząc", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](3, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](7, 3.75, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](8, 5, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](9, 6.25, 12)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](12, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](34, 5, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](35, 6.25, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](36, 7.5, 12)
                ])
            ])
        ], [
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["j" /* Training */](1, new Date(2016, 9, 9)),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["j" /* Training */](4, new Date(2016, 9, 16))
        ]),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["f" /* Set */](2, "Pull", [
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](4, "Wiosłowanie", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](4, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](10, 0, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](11, 1.25, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](12, 2.5, 12)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](13, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](37, 1.25, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](38, 2.5, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](39, 3.75, 12)
                ])
            ]),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](5, "Podciąganie hantli", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](5, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](13, 1.25, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](14, 2.5, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](15, 3.75, 12)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](14, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](40, 2.5, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](41, 3.75, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](42, 5, 12)
                ])
            ]),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](6, "Uginanie ramion", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](6, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](16, 1.25, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](17, 2.5, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](18, 3.75, 12)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](15, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](43, 2.5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](44, 3.75, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](45, 5, 10)
                ])
            ])
        ], [
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["j" /* Training */](2, new Date(2016, 9, 11)),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["j" /* Training */](5, new Date(2016, 9, 18))
        ]),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["f" /* Set */](3, "Legs", [
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](7, "Przysiady", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](7, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](19, 1.25, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](20, 2.5, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](21, 3.75, 12)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](16, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](46, 8, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](47, 10, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](48, 15, 12)
                ])
            ]),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](8, "Martwy na prostych", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](8, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](22, 1.25, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](23, 2.5, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](24, 3.75, 12)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](17, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](49, 2.5, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](50, 3.75, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](51, 5, 12)
                ])
            ]),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](9, "Wypady", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](9, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](25, 11.25, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](26, 12.5, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](27, 13.75, 12)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](18, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](52, 12.5, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](53, 13.75, 12),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](54, 15, 12)
                ])
            ])
        ], [
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["j" /* Training */](3, new Date(2016, 9, 13)),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["j" /* Training */](6, new Date(2016, 9, 20))
        ])
    ], new Date(2016, 9, 1), new Date(2016, 9, 30)),
    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["e" /* Cycle */](2, [
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["f" /* Set */](4, "Push", [
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](10, "Wyciskanie leżąc hantli", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](19, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](55, 2.5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](56, 3.75, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](57, 5, 10)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](28, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](82, 3.75, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](83, 5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](84, 6.25, 10)
                ])
            ]),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](11, "Wyciskanie w skosie hantli", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](20, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](58, 2.5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](59, 3.75, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](60, 5, 10)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](29, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](85, 2.5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](86, 3.75, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](87, 5, 10)
                ])
            ]),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](12, "Wznosy boczne", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](21, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](61, 3.75, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](62, 5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](63, 6.25, 10)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](30, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](88, 5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](89, 6.25, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](90, 7.5, 10)
                ])
            ])
        ], [
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["j" /* Training */](7, new Date(2016, 10, 1)),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["j" /* Training */](10, new Date(2016, 10, 8))
        ]),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["f" /* Set */](5, "Pull", [
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](13, "Wiosłowanie hantli", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](22, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](64, 2.5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](65, 3.75, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](66, 5, 10)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](31, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](91, 3.75, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](92, 5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](93, 6.25, 10)
                ])
            ]),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](14, "Podciąganie na drążku", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](23, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](67, 2.5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](68, 3.75, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](69, 5, 10)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](32, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](94, 3.75, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](95, 3.75, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](96, 5, 10)
                ])
            ]),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](15, "Uginanie ramion na modlitewniku", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](24, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](70, 3.75, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](71, 5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](72, 6.25, 10)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](33, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](97, 5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](98, 7, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](99, 10, 10)
                ])
            ])
        ], [
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["j" /* Training */](8, new Date(2016, 10, 3)),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["j" /* Training */](15, new Date(2016, 10, 10))
        ]),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["f" /* Set */](6, "Legs", [
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](16, "Przysiad front", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](25, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](73, 2.5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](74, 3.75, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](75, 5, 10)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](34, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](100, 3.75, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](101, 5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](102, 6.25, 10)
                ])
            ]),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](17, "Martwy na prostych (sztanga)", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](26, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](76, 5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](77, 7.5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](78, 10, 10)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](35, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](103, 6, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](104, 9, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](105, 12, 10)
                ])
            ]),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["g" /* Exercise */](18, "Wypad ze sztangą na barkach", [
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](27, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](73, 2.5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](74, 3.75, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](75, 5, 10)
                ]),
                new __WEBPACK_IMPORTED_MODULE_0__get_entities__["h" /* ExerciseSession */](36, [
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](106, 3.75, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](107, 5, 10),
                    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["i" /* Series */](108, 6.25, 10)
                ])
            ])
        ], [
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["j" /* Training */](9, new Date(2016, 10, 5)),
            new __WEBPACK_IMPORTED_MODULE_0__get_entities__["j" /* Training */](12, new Date(2016, 10, 12))
        ])
    ], new Date(2016, 10, 1))
];
//# sourceMappingURL=cycles.mock-data.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__preview_entities__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REPORT_PREVIEWS_LIST; });

var REPORT_PREVIEWS_LIST = [
    new __WEBPACK_IMPORTED_MODULE_0__preview_entities__["a" /* ReportPreview */](1, new Date(2016, 10, 8), new Date(2016, 10, 14)),
    new __WEBPACK_IMPORTED_MODULE_0__preview_entities__["a" /* ReportPreview */](2, new Date(2016, 10, 15), new Date(2016, 10, 21)),
    new __WEBPACK_IMPORTED_MODULE_0__preview_entities__["a" /* ReportPreview */](3, new Date(2016, 10, 22), new Date(2016, 10, 28))
];
//# sourceMappingURL=report-previews.mock-data.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__preview_entities__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WEIGHTS_PREVIEWS_LIST; });

var WEIGHTS_PREVIEWS_LIST = [
    new __WEBPACK_IMPORTED_MODULE_0__preview_entities__["b" /* WeightsPreview */](10, 2016),
    new __WEBPACK_IMPORTED_MODULE_0__preview_entities__["b" /* WeightsPreview */](11, 2016)
];
//# sourceMappingURL=weight-previews.mock-data.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_entities__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRICES_LIST; });

var PRICES_LIST = [
    [
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["b" /* Price */](1, new Date(2016, 8, 9), 'Auchan', 1, 13.5, 1),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["b" /* Price */](3, new Date(2016, 9, 9), 'M1', 1, 14.2, 1),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["b" /* Price */](5, new Date(2016, 10, 9), 'Auchan', 1, 13.6, 1)
    ],
    [
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["b" /* Price */](2, new Date(2016, 8, 9), 'Auchan', 1, 18.9, 2),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["b" /* Price */](4, new Date(2016, 9, 9), 'M1', 1, 19.5, 2),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["b" /* Price */](6, new Date(2016, 11, 11), 'Auchan', 1, 19, 2),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["b" /* Price */](10, new Date(2016, 12, 29), 'M1', 1.5, 22, 2),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["b" /* Price */](11, new Date(2017, 1, 8), 'Jakaś chujowa długa nazwa', 0.3, 4, 2),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["b" /* Price */](12, new Date(2017, 2, 3), 'Jakaś chujowa długa nazwa znów', 0.5, 6, 2)
    ],
    [
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["b" /* Price */](7, new Date(2017, 2, 2), 'Dupa raz', 1, 18.9, 3),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["b" /* Price */](8, new Date(2017, 3, 2), 'Dupa dwa', 1, 19.5, 3),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["b" /* Price */](9, new Date(2017, 4, 2), 'Dupa trzy', 1, 19, 3)
    ],
    []
];
//# sourceMappingURL=prices.mock-data.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_entities__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRODUCTS_LIST; });

var PRODUCTS_LIST = [
    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["a" /* Product */](1, 'Kurczak', 'http://vignette2.wikia.nocookie.net/kielbasa/images/a/ad/Kurczak.jpg/revision/latest?cb=20130323205029&path-prefix=pl', 16.24),
    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["a" /* Product */](2, 'Indyk', 'http://media-cache-ak0.pinimg.com/736x/75/3f/9a/753f9a186a18e67f1820ec56508dccd2.jpg', 19.12),
    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["a" /* Product */](3, 'Serek wiejski', 'http://piatnica.com.pl/p/public/upload/product/yyt2ck3efd0ih642jm4ai2rws.jpg', 1.55),
    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["a" /* Product */](4, 'Masło', 'http://www.jakkupowac.pl/vars/upload/fckeditor/image/maslo/maslo_estra_mlekpol.jpg', 4.18)
];
//# sourceMappingURL=products.mock-data.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_entities__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REPORTS_LIST; });

var REPORTS_LIST = [
    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["c" /* Report */](1, 'Mogło byc lepiej, forma bez zmian...', new Date(2016, 10, 8), new Date(2016, 10, 14)),
    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["c" /* Report */](2, 'Testowy komunikat Testowy komunikat Testowy komunikat Testowy komunikat Testowy komunikat' +
        ' Testowy komunikat Testowy komunikat Testowy komunikat Testowy komunikat Testowy komunikat Testowy komunikat ', new Date(2016, 10, 15), new Date(2016, 10, 21)),
    new __WEBPACK_IMPORTED_MODULE_0__get_entities__["c" /* Report */](3, 'Lipa kolego', new Date(2016, 10, 22), new Date(2016, 10, 28))
];
//# sourceMappingURL=reports.mock-data.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_entities__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WEIGHT_LIST; });

var WEIGHT_LIST = [
    [
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](1, 79.6, new Date(2016, 10, 1)),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](2, 79.3, new Date(2016, 10, 2)),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](3, 79.4, new Date(2016, 10, 3)),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](4, 79.5, new Date(2016, 10, 4)),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](5, 80.6, new Date(2016, 10, 5)),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](6, 80.2, new Date(2016, 10, 6)),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](7, 79.6, new Date(2016, 10, 7)),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](8, 79.1, new Date(2016, 10, 8)),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](9, 79.3, new Date(2016, 10, 9)),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](10, 79.5, new Date(2016, 10, 10)),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](11, 79.7, new Date(2016, 10, 11)),
    ],
    [
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](12, 78.6, new Date(2016, 11, 1)),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](13, 78.0, new Date(2016, 11, 2)),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](14, 78.0, new Date(2016, 11, 3)),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](15, 78.9, new Date(2016, 11, 4)),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](16, 78.3, new Date(2016, 11, 5)),
        new __WEBPACK_IMPORTED_MODULE_0__get_entities__["d" /* Weight */](17, 78.1, new Date(2016, 11, 6))
    ]
];
//# sourceMappingURL=weights.mock-data.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleLoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CircleLoaderComponent = (function () {
    function CircleLoaderComponent() {
    }
    return CircleLoaderComponent;
}());
CircleLoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-circle-loader',
        template: __webpack_require__(312),
        styles: [__webpack_require__(7)]
    })
], CircleLoaderComponent);

//# sourceMappingURL=circle-loader.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripLoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StripLoaderComponent = (function () {
    function StripLoaderComponent() {
    }
    return StripLoaderComponent;
}());
StripLoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-strip-loader',
        template: __webpack_require__(313),
        styles: [__webpack_require__(7)]
    })
], StripLoaderComponent);

//# sourceMappingURL=strip-loader.component.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalFooterComponent = (function () {
    function ModalFooterComponent() {
        this.rightButtonAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.leftButtonAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ModalFooterComponent.prototype.onRightButtonClick = function () {
        this.rightButtonAction.emit(null);
    };
    ModalFooterComponent.prototype.onLeftButtonClick = function () {
        this.leftButtonAction.emit(null);
    };
    return ModalFooterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModalFooterComponent.prototype, "rightButtonLabel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModalFooterComponent.prototype, "leftButtonLabel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ModalFooterComponent.prototype, "isDataValid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ModalFooterComponent.prototype, "rightButtonAction", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ModalFooterComponent.prototype, "leftButtonAction", void 0);
ModalFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-modal-footer',
        template: __webpack_require__(314),
        styles: [__webpack_require__(7)]
    })
], ModalFooterComponent);

//# sourceMappingURL=modal-footer.component.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_service_injector__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DictionaryPipe = (function () {
    function DictionaryPipe(serviceInjector) {
        this.dictionaryService = serviceInjector.getDictionaryService();
    }
    DictionaryPipe.prototype.transform = function (key) {
        return this.dictionaryService.getDictionaryValue(key);
    };
    return DictionaryPipe;
}());
DictionaryPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'dictionary' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_service_injector__["a" /* ServiceInjector */]) === "function" && _a || Object])
], DictionaryPipe);

var _a;
//# sourceMappingURL=dictionary.pipe.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trainings_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TrainingsModule = (function () {
    function TrainingsModule() {
    }
    return TrainingsModule;
}());
TrainingsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__trainings_component__["a" /* TrainingsComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]
        ]
    })
], TrainingsModule);

//# sourceMappingURL=tranings.module.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weights_modals_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_entities_add_entities__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_date_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_base_modal__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightAddModal; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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






var WeightAddModal = (function (_super) {
    __extends(WeightAddModal, _super);
    function WeightAddModal(weightsModalsService, serviceInjector, dateService) {
        var _this = _super.call(this, serviceInjector) || this;
        _this.weightsModalsService = weightsModalsService;
        _this.serviceInjector = serviceInjector;
        _this.dateService = dateService;
        _this.weightValue = 50;
        _this.measurementDate = '';
        _this.weightsService = serviceInjector.getWeightsService();
        return _this;
    }
    WeightAddModal.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.weightsModalsService.addWeight.subscribe(function () {
            _this.openModal();
        });
    };
    WeightAddModal.prototype.initDataBeforeOpenModal = function () {
        this.weightValue = 50;
        this.measurementDate = '';
    };
    WeightAddModal.prototype.isDataValid = function () {
        return this.weightValue > 0 && this.dateService.isDateValid(this.measurementDate);
    };
    WeightAddModal.prototype.onAddClick = function () {
        this.weightToAdd = new __WEBPACK_IMPORTED_MODULE_3__shared_entities_add_entities__["a" /* NewWeight */](this.weightValue, this.dateService.parseStringToDate(this.measurementDate));
        this.weightsService.addWeight(this.weightToAdd);
        this.weightsModalsService.callRefreshPage();
        this.closeModal();
    };
    return WeightAddModal;
}(__WEBPACK_IMPORTED_MODULE_5__shared_components_base_modal__["a" /* BaseModal */]));
WeightAddModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-weight-add-modal',
        template: __webpack_require__(316),
        styles: [__webpack_require__(94), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_weights_modals_service__["a" /* WeightsModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_weights_modals_service__["a" /* WeightsModalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_date_service__["a" /* DateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_date_service__["a" /* DateService */]) === "function" && _c || Object])
], WeightAddModal);

var _a, _b, _c;
//# sourceMappingURL=weight-add.modal.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weights_modals_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_base_modal__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightsDeleteModal; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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




var WeightsDeleteModal = (function (_super) {
    __extends(WeightsDeleteModal, _super);
    function WeightsDeleteModal(weightsModalsService, serviceInjector) {
        var _this = _super.call(this, serviceInjector) || this;
        _this.weightsModalsService = weightsModalsService;
        _this.serviceInjector = serviceInjector;
        _this.formattedDays = [];
        _this.selectedWeights = [];
        _this.checkboxesForWeights = [];
        _this.weightsToDeleteIndexes = [];
        _this.weightsService = serviceInjector.getWeightsService();
        return _this;
    }
    WeightsDeleteModal.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.weightsModalsService.deleteWeights.subscribe(function (data) {
            _this.selectedWeights = data.weights;
            _this.modalTitle = data.modalTitle;
            _this.openModal();
        });
    };
    WeightsDeleteModal.prototype.initDataBeforeOpenModal = function () {
        var _this = this;
        this.weightsToDeleteIndexes = [];
        this.checkboxesForWeights = [];
        this.selectedWeights.forEach(function () { return _this.checkboxesForWeights.push(false); });
        this.formattedDays = this.weightsService.formatDaysToDisplayingValuesFromWeights(this.selectedWeights);
    };
    WeightsDeleteModal.prototype.canModalBeOpened = function () {
        if (!this.selectedWeights) {
            Materialize.toast(this.dictionaryService.getDictionaryValue('page.weights.loadFirst.tooltip'), 3000);
            return false;
        }
        return true;
    };
    WeightsDeleteModal.prototype.isDataValid = function () {
        for (var _i = 0, _a = this.checkboxesForWeights; _i < _a.length; _i++) {
            var checkbox = _a[_i];
            if (checkbox) {
                return true;
            }
        }
        return false;
    };
    WeightsDeleteModal.prototype.onDeleteClick = function () {
        var _this = this;
        for (var i = 0; i < this.checkboxesForWeights.length; i++) {
            if (this.checkboxesForWeights[i]) {
                this.weightsToDeleteIndexes.push(i);
            }
        }
        var weightsToDelete = [];
        this.weightsToDeleteIndexes.forEach(function (index) {
            weightsToDelete.push(_this.selectedWeights[index]);
        });
        this.weightsService.deleteWeights(weightsToDelete);
        this.weightsModalsService.callRefreshPage();
        this.closeModal();
    };
    return WeightsDeleteModal;
}(__WEBPACK_IMPORTED_MODULE_3__shared_components_base_modal__["a" /* BaseModal */]));
WeightsDeleteModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-weights-delete-modal',
        template: __webpack_require__(317),
        styles: [__webpack_require__(94), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_weights_modals_service__["a" /* WeightsModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_weights_modals_service__["a" /* WeightsModalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _b || Object])
], WeightsDeleteModal);

var _a, _b;
//# sourceMappingURL=weights-delete.modal.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weights_modals_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_global_values__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_base_modal__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightsEditModal; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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





var WeightsEditModal = (function (_super) {
    __extends(WeightsEditModal, _super);
    function WeightsEditModal(weightsModalsService, serviceInjector) {
        var _this = _super.call(this, serviceInjector) || this;
        _this.weightsModalsService = weightsModalsService;
        _this.serviceInjector = serviceInjector;
        _this.formattedDays = [];
        _this.selectedWeights = [];
        _this.weightsToEditIndexes = [];
        _this.weightsService = serviceInjector.getWeightsService();
        return _this;
    }
    WeightsEditModal.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.weightsModalsService.editWeights.subscribe(function (data) {
            _this.selectedWeights = data.weights;
            _this.modalTitle = data.modalTitle;
            _this.openModal();
        });
    };
    WeightsEditModal.prototype.initDataBeforeOpenModal = function () {
        this.weightsToEditIndexes = [];
        this.formattedDays = this.weightsService.formatDaysToDisplayingValuesFromWeights(this.selectedWeights);
    };
    WeightsEditModal.prototype.canModalBeOpened = function () {
        if (!this.selectedWeights) {
            Materialize.toast(this.dictionaryService.getDictionaryValue('page.weights.loadFirst.tooltip'), 3000);
            return false;
        }
        return true;
    };
    WeightsEditModal.prototype.isDataValid = function () {
        return this.weightsToEditIndexes.length > 0;
    };
    WeightsEditModal.prototype.onEditClick = function () {
        var _this = this;
        var weightsToEdit = [];
        this.weightsToEditIndexes.forEach(function (index) {
            weightsToEdit.push(_this.selectedWeights[index]);
            _this.weightsService.editWeights(weightsToEdit);
        });
        this.weightsModalsService.callRefreshPage();
        this.closeModal();
    };
    WeightsEditModal.prototype.addDayIndexToChanged = function (dateIndex) {
        if (this.weightsToEditIndexes.indexOf(dateIndex) === __WEBPACK_IMPORTED_MODULE_2__shared_global_values__["a" /* DOES_NOT_CONTAIN */]) {
            this.weightsToEditIndexes.push(dateIndex);
        }
    };
    return WeightsEditModal;
}(__WEBPACK_IMPORTED_MODULE_4__shared_components_base_modal__["a" /* BaseModal */]));
WeightsEditModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-weights-edit-modal',
        template: __webpack_require__(318),
        styles: [__webpack_require__(94), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_weights_modals_service__["a" /* WeightsModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_weights_modals_service__["a" /* WeightsModalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _b || Object])
], WeightsEditModal);

var _a, _b;
//# sourceMappingURL=weights-edit.modal.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightsModals; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable:component-class-suffix */

var WeightsModals = (function () {
    function WeightsModals() {
    }
    return WeightsModals;
}());
WeightsModals = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-weights-modals',
        template: "\n    <coach-weight-add-modal></coach-weight-add-modal>\n    <coach-weights-edit-modal></coach-weights-edit-modal>\n    <coach-weights-delete-modal></coach-weights-delete-modal>"
    })
], WeightsModals);

//# sourceMappingURL=weights.modals.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_entities_preview_entities__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weights_modals_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_base_card_component__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightsCardComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WeightsCardComponent = (function (_super) {
    __extends(WeightsCardComponent, _super);
    function WeightsCardComponent(weightsModalsService, serviceInjector) {
        var _this = _super.call(this) || this;
        _this.weightsModalsService = weightsModalsService;
        _this.serviceInjector = serviceInjector;
        _this.chartData = [];
        _this.chartLabels = [];
        _this.weightsService = serviceInjector.getWeightsService();
        _this.dictionaryService = serviceInjector.getDictionaryService();
        return _this;
    }
    WeightsCardComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.weights = null;
        this.previewTitle = this.weightsService.getPreviewTitle(this.weightsPreview);
    };
    WeightsCardComponent.prototype.onWeightsClick = function () {
        var _this = this;
        this.toggleShow();
        if (this.showData) {
            if (this.weights == null) {
                this.weightsService.getWeights(this.weightsPreview)
                    .subscribe(function (weights) {
                    _this.weights = weights;
                    _this.weightsDays = _this.weightsService.getAllDays(_this.weights);
                    _this.weightsValues = _this.weightsService.getAllValues(_this.weights);
                    _this.chartData = [
                        {
                            data: _this.weightsValues,
                            label: _this.dictionaryService.getDictionaryValue('page.weights.chart.point.label')
                        }
                    ];
                    _this.chartLabels = _this.weightsService.formatDaysToDisplayingValues(_this.weightsDays);
                }, function () {
                }, function () {
                    _this.isLoading = false;
                });
            }
        }
    };
    WeightsCardComponent.prototype.onEditClick = function () {
        this.weightsModalsService.callEditWeights(this.weights, this.previewTitle);
    };
    WeightsCardComponent.prototype.onDeleteClick = function () {
        this.weightsModalsService.callDeleteWeights(this.weights, this.previewTitle);
    };
    return WeightsCardComponent;
}(__WEBPACK_IMPORTED_MODULE_4__shared_components_base_card_component__["a" /* BaseCardComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_entities_preview_entities__["b" /* WeightsPreview */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_entities_preview_entities__["b" /* WeightsPreview */]) === "function" && _a || Object)
], WeightsCardComponent.prototype, "weightsPreview", void 0);
WeightsCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coach-weights-card',
        template: __webpack_require__(319),
        styles: [__webpack_require__(135), __webpack_require__(7)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_weights_modals_service__["a" /* WeightsModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_weights_modals_service__["a" /* WeightsModalsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_service_injector__["a" /* ServiceInjector */]) === "function" && _c || Object])
], WeightsCardComponent);

var _a, _b, _c;
//# sourceMappingURL=weights-card.component.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weights_list_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weights_card_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_weights_mock_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_weights_back_end_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_weights_modals_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modals_weights_edit_modal__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modals_weights_modals__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modals_weights_delete_modal__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modals_weight_add_modal__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var WeightsModule = (function () {
    function WeightsModule() {
    }
    return WeightsModule;
}());
WeightsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__weights_list_component__["a" /* WeightsListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__weights_card_component__["a" /* WeightsCardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__modals_weights_modals__["a" /* WeightsModals */],
            __WEBPACK_IMPORTED_MODULE_9__modals_weights_edit_modal__["a" /* WeightsEditModal */],
            __WEBPACK_IMPORTED_MODULE_12__modals_weights_delete_modal__["a" /* WeightsDeleteModal */],
            __WEBPACK_IMPORTED_MODULE_13__modals_weight_add_modal__["a" /* WeightAddModal */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_weights_mock_service__["a" /* WeightsMockService */],
            __WEBPACK_IMPORTED_MODULE_7__services_weights_back_end_service__["a" /* WeightsBackEndService */],
            __WEBPACK_IMPORTED_MODULE_8__services_weights_modals_service__["a" /* WeightsModalsService */]
        ]
    })
], WeightsModule);

//# sourceMappingURL=weights.module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_injector__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateService = (function () {
    function DateService(serviceInjector) {
        this.serviceInjector = serviceInjector;
        this.dictionaryService = serviceInjector.getDictionaryService();
        this.configureMoment();
    }
    DateService.prototype.parseDateToString = function (dateObj) {
        var formattedDateString = moment(dateObj).format(this.getDateFormat());
        return formattedDateString;
    };
    DateService.prototype.parseStringToDate = function (dateString) {
        var formattedDateObj = moment(dateString, this.getDateFormat()).toDate();
        return formattedDateObj;
    };
    DateService.prototype.isDateValid = function (date) {
        return moment(date, this.getDateFormat()).isValid();
    };
    DateService.prototype.isSecondDateLater = function (firstDate, secondDate) {
        if (this.isDateValid(firstDate) && this.isDateValid(secondDate)) {
            var diff = moment(this.parseStringToDate(secondDate)).diff(moment(this.parseStringToDate(firstDate)));
            return diff > 0;
        }
        return false;
    };
    DateService.prototype.getDateFormat = function () {
        return this.dictionaryService.getDictionaryValue('calendar.format.momentjs');
    };
    DateService.prototype.configureMoment = function () {
        moment.updateLocale('en', {
            months: this.dictionaryService.getDateDictionarySettings().monthsFull,
            monthsShort: this.dictionaryService.getDateDictionarySettings().monthsShort
        });
    };
    return DateService;
}());
DateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_injector__["a" /* ServiceInjector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_injector__["a" /* ServiceInjector */]) === "function" && _a || Object])
], DateService);

var _a;
//# sourceMappingURL=date.service.js.map

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

module.exports = "<coach-header></coach-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

module.exports = "<div id=\"price-add\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[modalParams]\"\n     [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n    <h3>{{'page.prices.modal.add.addPrice.title' | dictionary}} - {{getProductName()}}</h3>\n    <div class=\"row\">\n      <form materialize class=\"col s12\">\n        <div class=\"input-field col s6 m6 l3\">\n          <i class=\"material-icons prefix\">shop</i>\n          <label for=\"quantity\">{{'page.prices.modal.add.quantity.label' | dictionary}}</label>\n          <input id=\"quantity\" type=\"number\" step=\"0.1\" min=\"0\" [(ngModel)]=\"quantity\" name=\"quantity\">\n        </div>\n        <div class=\"input-field col s6 m6 l3\">\n          <i class=\"material-icons prefix\">payment</i>\n          <label for=\"price\">{{'page.prices.modal.add.price.label' | dictionary}}</label>\n          <input id=\"price\" type=\"number\" step=\"0.1\" min=\"0\" [(ngModel)]=\"price\" name=\"quantity\">\n        </div>\n        <div class=\"input-field col s12 m12 l6\">\n          <i class=\"material-icons prefix\">today</i>\n          <label for=\"price-date\">{{'page.prices.modal.add.date.label' | dictionary}}</label>\n          <input id=\"price-date\" type=\"date\" class=\"datepicker\" materialize=\"pickadate\"\n                 [(ngModel)]=\"priceDate\" name=\"priceDate\"\n                 [materializeParams]=\"[datePickerParams]\">\n        </div>\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">location_on</i>\n          <label for=\"place\">{{'page.prices.modal.add.place.label' | dictionary}}</label>\n          <input id=\"place\" type=\"text\" [(ngModel)]=\"place\" name=\"place\"/>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <coach-modal-footer leftButtonLabel=\"{{'global.add.label' | dictionary}}\"\n                      rightButtonLabel=\"{{'global.close.label' | dictionary}}\"\n                      (leftButtonAction)=\"onAddClick()\"\n                      (rightButtonAction)=\"onCloseModal()\"\n                      [isDataValid]=\"isDataValid()\"></coach-modal-footer>\n</div>\n"

/***/ }),

/***/ 298:
/***/ (function(module, exports) {

module.exports = "<div id=\"prices-delete\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[modalParams]\"\n     [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n\n    <h3>{{modalTitle}}</h3>\n\n    <form materialize class=\"col s12\">\n      <div class=\"row\">\n        <p *ngFor=\"let price of selectedPrices; let i = index\">\n          <input type=\"checkbox\" id=\"{{i}}\" name=\"{{i}}\" class=\"filled-in red-checkbox\" [(ngModel)]=\"checkboxesForPrices[i]\"/>\n          <label for=\"{{i}}\">{{getDateAsString(price.priceDate)}} - {{price.quantity}} x {{price.value}} {{'global.currency.label' | dictionary}}</label>\n        </p>\n      </div>\n    </form>\n  </div>\n\n  <coach-modal-footer leftButtonLabel=\"{{'global.delete.label' | dictionary}}\"\n                      rightButtonLabel=\"{{'global.close.label' | dictionary}}\"\n                      (leftButtonAction)=\"onDeleteClick()\"\n                      (rightButtonAction)=\"onCloseModal()\"\n                      [isDataValid]=\"isDataValid()\"></coach-modal-footer>\n</div>\n"

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

module.exports = "<div id=\"prices-edit\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[modalParams]\"\n     [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n\n    <h3>{{modalTitle}}</h3>\n\n    <table class=\"striped\">\n      <thead>\n      <tr>\n        <!--<th data-field=\"Day\">{{'page.prices.day.label' | dictionary}}</th>-->\n        <th data-field=\"Place\">{{'page.prices.place.label' | dictionary}}</th>\n        <th data-field=\"Price\">{{'page.prices.price.label' | dictionary}}</th>\n        <th data-field=\"Quantity\">{{'page.prices.quantity.label' | dictionary}}</th>\n      </tr>\n      </thead>\n\n      <tbody>\n      <tr *ngFor=\"let price of selectedPrices; let i = index\">\n        <!--<td>{{dateService.parseDateToString(price.priceDate)}} r.</td>-->\n        <td>\n          <div class=\"input-field inline\">\n            <input type=\"text\" [(ngModel)]=\"price.place\" (ngModelChange)=\"addPriceIndexToChanged(i)\">\n          </div>\n        </td>\n        <td>\n          <div class=\"input-field inline\">\n            <input type=\"number\" step=\"0.1\" [(ngModel)]=\"price.value\" (ngModelChange)=\"addPriceIndexToChanged(i)\">\n          </div>\n        </td>\n        <td>\n          <div class=\"input-field inline\">\n            <input type=\"number\" step=\"0.1\" [(ngModel)]=\"price.quantity\" (ngModelChange)=\"addPriceIndexToChanged(i)\">\n          </div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <coach-modal-footer leftButtonLabel=\"{{'global.edit.label' | dictionary}}\"\n                      rightButtonLabel=\"{{'global.close.label' | dictionary}}\"\n                      (leftButtonAction)=\"onEditClick()\"\n                      (rightButtonAction)=\"onCloseModal()\"\n                      [isDataValid]=\"isDataValid()\"></coach-modal-footer>\n</div>\n"

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

module.exports = "<div id=\"product-add\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[modalParams]\"\n     [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n\n    <h3>{{'page.prices.modal.add.addProduct.title' | dictionary}}</h3>\n\n    <div class=\"row\">\n      <form materialize class=\"col s12\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">receipt</i>\n          <label for=\"product-name\">{{'page.prices.modal.add.productName.label' | dictionary}}</label>\n          <input id=\"product-name\" type=\"text\" [(ngModel)]=\"productName\" name=\"productName\"/>\n        </div>\n        <div *ngIf=\"!canStoreFiles()\" class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">perm_media</i>\n          <label for=\"screen-url\">Screen link</label>\n          <input id=\"screen-url\" type=\"text\" [(ngModel)]=\"screen\" name=\"screen\"/>\n        </div>\n        <div *ngIf=\"canStoreFiles() && !screen\" class=\"file-field input-field col s12\">\n          <div class=\"btn blue\">\n            <span>{{'page.prices.modal.add.selectPhoto.label' | dictionary}}</span>\n            <input #photoFile type=\"file\" accept=\"image/*\" (change)=\"uploadPhoto()\">\n          </div>\n          <div class=\"file-path-wrapper\">\n            <input class=\"file-path validate\" type=\"text\">\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"row\" *ngIf=\"screen\" >\n      <div class=\"col s12 center\">\n        <img [src]=\"screen\" style=\"height: 300px; width: 300px;\"/>\n      </div>\n    </div>\n  </div>\n\n  <coach-modal-footer leftButtonLabel=\"{{'global.add.label' | dictionary}}\"\n                      rightButtonLabel=\"{{'global.close.label' | dictionary}}\"\n                      (leftButtonAction)=\"onAddClick()\"\n                      (rightButtonAction)=\"onCloseModal()\"\n                      [isDataValid]=\"isDataValid()\"></coach-modal-footer>\n\n</div>\n"

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

module.exports = "<div id=\"product-delete\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[modalParams]\"\n     [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n\n    <h3>{{modalTitle}}</h3>\n\n    <div class=\"col s12\">\n      <div class=\"row\">\n        <p>{{'page.prices.modal.deleteProduct.content' | dictionary}}</p>\n      </div>\n    </div>\n  </div>\n\n  <coach-modal-footer leftButtonLabel=\"{{'global.delete.label' | dictionary}}\"\n                      rightButtonLabel=\"{{'global.close.label' | dictionary}}\"\n                      (leftButtonAction)=\"onDeleteClick()\"\n                      (rightButtonAction)=\"onCloseModal()\"\n                      [isDataValid]=\"isDataValid()\"></coach-modal-footer>\n</div>\n"

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

module.exports = "<div id=\"product-edit\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[modalParams]\"\n     [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n\n    <h3>{{'page.prices.modal.edit.title' | dictionary}}</h3>\n\n    <div class=\"row\">\n      <form materialize class=\"col s12\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">receipt</i>\n          <label for=\"product-name\">{{'page.prices.modal.add.productName.label' | dictionary}}</label>\n          <input id=\"product-name\" type=\"text\" [(ngModel)]=\"productName\" name=\"productName\"/>\n        </div>\n        <div *ngIf=\"!canStoreFiles()\" class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">perm_media</i>\n          <label for=\"screen-url\">Screen link</label>\n          <input id=\"screen-url\" type=\"text\" [(ngModel)]=\"screen\" name=\"screen\"/>\n        </div>\n        <div *ngIf=\"canStoreFiles()\" class=\"file-field input-field col s12\">\n          <div class=\"btn blue\">\n            <span>{{'page.prices.modal.add.selectPhoto.label' | dictionary}}</span>\n            <input type=\"file\">\n          </div>\n          <div class=\"file-path-wrapper\">\n            <input class=\"file-path\" type=\"text\" [(ngModel)]=\"screen\" name=\"screen\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <coach-modal-footer leftButtonLabel=\"{{'global.edit.label' | dictionary}}\"\n                      rightButtonLabel=\"{{'global.close.label' | dictionary}}\"\n                      (leftButtonAction)=\"onEditClick()\"\n                      (rightButtonAction)=\"onCloseModal()\"\n                      [isDataValid]=\"isDataValid()\"></coach-modal-footer>\n</div>\n"

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports = "<div id=\"shopping-list\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[modalParams]\"\n     [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n\n    <h3>{{'page.prices.modal.add.shoppingList.title' | dictionary}}</h3>\n\n    <div *ngIf=\"!products\" class=\"col s12 center no-data small\">\n      <div class=\"row\">\n        <i class=\"medium material-icons\">info_outline</i>\n      </div>\n      <div class=\"row\">\n        <p>{{'page.prices.list.noData.info' | dictionary}} <a (click)=\"onAddProductClick()\">{{'page.prices.list.noData.click.info'\n          | dictionary}}</a></p>\n      </div>\n    </div>\n\n    <form materialize *ngIf=\"products\">\n      <div class=\"row\">\n        <div class=\"input-field col s12 m6 l6\">\n          <i class=\"material-icons prefix\">location_on</i>\n          <label for=\"place\">{{'page.prices.modal.add.place.label' | dictionary}}</label>\n          <input id=\"place\" type=\"text\" [(ngModel)]=\"place\" name=\"place\"/>\n        </div>\n        <div class=\"input-field col s12 m6 l6\">\n          <i class=\"material-icons prefix\">today</i>\n          <label for=\"shopping-date\">{{'page.prices.modal.add.date.label' | dictionary}}</label>\n          <input id=\"shopping-date\" type=\"date\" class=\"datepicker\" materialize=\"pickadate\"\n                 [(ngModel)]=\"shoppingDate\" name=\"priceDate\"\n                 [materializeParams]=\"[datePickerParams]\">\n        </div>\n      </div>\n\n      <table class=\"striped\">\n        <thead>\n        <tr>\n          <th data-field=\"Product\">{{'page.prices.product.label' | dictionary}}</th>\n          <th data-field=\"Price\">{{'page.prices.price.label' | dictionary}}</th>\n          <th data-field=\"Quantity\">{{'page.prices.quantity.label' | dictionary}}</th>\n          <th data-field=\"Delete\" class=\"icons\">{{'global.delete.label' | dictionary}}</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let price of shoppingListToAdd.prices; let i = index\">\n          <td>\n            <div class=\"input-field inline\">\n              <label for=\"{{'product_' + (i + 1)}}\">{{'page.prices.product.label' | dictionary}} #{{(i + 1)}}</label>\n              <input type=\"text\" [(ngModel)]=\"productNamesForPrices[i]\" class=\"autocomplete\" name=\"{{'product_' + (i + 1)}}\" id=\"{{'product_' + (i + 1)}}\" materialize=\"autocomplete\" [materializeParams]=\"[autoCompleteData]\">\n            </div>\n          </td>\n          <td>\n            <div class=\"input-field inline\">\n              <label for=\"{{'price' + (i + 1)}}\">{{'page.prices.price.label' | dictionary}} #{{(i + 1)}}</label>\n              <input type=\"number\" step=\"0.1\" min=\"0\" [(ngModel)]=\"price.value\" name=\"{{'price' + (i + 1)}}\" id=\"{{'price' + (i + 1)}}\">\n            </div>\n          </td>\n          <td>\n            <div class=\"input-field inline\">\n              <label for=\"{{'quantity' + (i + 1)}}\">{{'page.prices.quantity.label' | dictionary}} #{{(i + 1)}}</label>\n              <input type=\"number\" step=\"0.1\" min=\"0\" [(ngModel)]=\"price.quantity\" name=\"{{'quantity' + (i + 1)}}\" id=\"{{'quantity' + (i + 1)}}\">\n            </div>\n          </td>\n          <td class=\"icons\">\n            <i (click)=\"onDeletePrice(i)\" class=\"small material-icons material-button tooltipped\"\n               materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"50\"\n               [attr.data-tooltip]=\"'page.prices.deletePrice.tooltip' | dictionary\">delete</i>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n      <a (click)=\"addNewEmptyPriceToList()\">{{'page.prices.modal.add.addPrice.title' | dictionary}}</a>\n    </form>\n  </div>\n\n  <coach-modal-footer leftButtonLabel=\"{{'global.add.label' | dictionary}}\"\n                      rightButtonLabel=\"{{'global.close.label' | dictionary}}\"\n                      (leftButtonAction)=\"onAddShoppingListClick()\"\n                      (rightButtonAction)=\"onCloseModal()\"\n                      [isDataValid]=\"isDataValid()\"></coach-modal-footer>\n</div>\n"

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports = "<div class=\"card medium grey lighten-3 hoverable\">\n  <div class=\"card-image waves-effect waves-block waves-light\">\n    <img class=\"activator\" [src]=\"productPreview.screenUrl\">\n  </div>\n  <div class=\"card-content prices-card-content\">\n    <span class=\"card-title grey-text activator text-darken-4\">\n      <p>{{productPreview.productName}}</p>\n      <i class=\"material-icons right\">more_vert</i>\n    </span>\n    <span class=\"card-subtitle\">\n      <p>{{'page.prices.avgPrice.label' | dictionary}} {{productPreview.average}} {{'global.currency.label' | dictionary}}</p>\n    </span>\n    <div class=\"card-title-icons\">\n      <i (click)=\"onEditProductClick()\" class=\"small material-icons tooltipped\"\n         materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"50\"\n         [attr.data-tooltip]=\"'page.prices.editProduct.tooltip' | dictionary\">mode_edit</i>\n      <i (click)=\"onDeleteProductClick()\" class=\"small material-icons tooltipped\"\n         materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"50\"\n         [attr.data-tooltip]=\"'page.prices.deleteProduct.tooltip' | dictionary\">delete</i>\n    </div>\n  </div>\n\n  <div class=\"card-reveal\">\n    <span class=\"card-title grey-text text-darken-4\">{{productPreview.productName}}\n      <i class=\"material-icons right\">close</i>\n    </span>\n    <table *ngIf=\"prices.length > 0\">\n      <thead>\n      <tr>\n        <th data-field=\"Day\">{{'page.prices.day.label' | dictionary}}</th>\n        <th data-field=\"Place\">{{'page.prices.place.label' | dictionary}}</th>\n        <th data-field=\"Price\">{{'page.prices.price.label' | dictionary}}</th>\n        <th data-field=\"Quantity\">{{'page.prices.quantity.label' | dictionary}}</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let price of prices\">\n        <td>{{dateService.parseDateToString(price.priceDate)}} r.</td>\n        <td>{{price.place}}</td>\n        <td>{{price.value}} {{'global.currency.label' | dictionary}}</td>\n        <td>{{price.quantity}}</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <div class=\"row icons-container\" *ngIf=\"prices.length > 0\">\n      <div class=\"col s12\">\n        <i (click)=\"onAddPriceClick()\" class=\"edit-button small material-icons tooltipped\" materialize=\"tooltip\"\n           data-position=\"bottom\" data-delay=\"50\"\n           [attr.data-tooltip]=\"'page.prices.addPrice.tooltip' | dictionary\">note_add</i>\n        <i (click)=\"onEditPricesClick()\" class=\"edit-button small material-icons tooltipped\" materialize=\"tooltip\"\n           data-position=\"bottom\" data-delay=\"50\"\n           [attr.data-tooltip]=\"'page.prices.editPrices.tooltip' | dictionary\">mode_edit</i>\n        <i (click)=\"onDeletePricesClick()\" class=\"delete-button small material-icons tooltipped\"\n           materialize=\"tooltip\"\n           data-position=\"bottom\" data-delay=\"50\"\n           [attr.data-tooltip]=\"'page.prices.deletePrices.tooltip' | dictionary\">delete</i>\n      </div>\n    </div>\n\n    <div *ngIf=\"prices.length === 0\" class=\"col s12 center no-data small\">\n      <div class=\"row\">\n        <i class=\"medium material-icons\">info_outline</i>\n      </div>\n      <div class=\"row\">\n        <p>{{'page.prices.productPrices.noData.info' | dictionary}} <a (click)=\"onAddPriceClick()\">{{'page.prices.productPrices.noData.click.info'\n          | dictionary}}</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div *ngIf=\"isLoading\">\n      <coach-circle-loader></coach-circle-loader>\n    </div>\n\n    <div *ngIf=\"!isLoading\">\n      <div *ngFor=\"let productPreview of productPreviews\" class=\"col l6 m12 s12\">\n        <coach-prices-card [productPreview]=\"productPreview\"></coach-prices-card>\n      </div>\n\n      <div *ngIf=\"productPreviews.length === 0\" class=\"col s12 center no-data\">\n        <div class=\"row\">\n          <i class=\"large material-icons\">info_outline</i>\n        </div>\n        <div class=\"row\">\n          <p>{{'page.prices.list.noData.info' | dictionary}} <a (click)=\"onAddProductClick()\">{{'page.prices.list.noData.click.info'\n            | dictionary}}</a></p>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"fab\" class=\"fixed-action-btn vertical click-to-toggle\" style=\"bottom: 45px; right: 24px;\">\n      <a class=\"btn-floating btn-large waves-effect waves-light blue\">\n        <i class=\"material-icons\">menu</i>\n      </a>\n      <ul>\n        <li materialize=\"tooltip\" data-position=\"left\" data-delay=\"50\" [attr.data-tooltip]=\"'page.prices.addProduct.tooltip' | dictionary\"\n            (click)=\"onAddProductClick()\"><a class=\"btn-floating red\"><i class=\"material-icons\">add</i></a></li>\n        <li materialize=\"tooltip\" data-position=\"left\" data-delay=\"50\" [attr.data-tooltip]=\"'page.weights.addShoppingList.tooltip' | dictionary\"\n            (click)=\"onAddShoppingListClick()\"><a class=\"btn-floating green darken-1\"><i class=\"material-icons\">toc</i></a>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n</div>\n\n<coach-prices-modals></coach-prices-modals>\n"

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

module.exports = "<div id=\"report-add\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[modalParams]\"\n     [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n    <h3>{{'page.reports.modal.add.title' | dictionary}}</h3>\n    <div class=\"row\">\n      <form materialize class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n            <i class=\"material-icons prefix\">today</i>\n            <label for=\"start-date\">{{'page.reports.modal.startDate.label' | dictionary}}</label>\n            <input id=\"start-date\" type=\"date\" class=\"datepicker\" materialize=\"pickadate\"\n              [(ngModel)]=\"startDate\" name=\"startDate\" [materializeParams]=\"[datePickerParams]\">\n          </div>\n          <div class=\"input-field col s6\">\n            <i class=\"material-icons prefix\">today</i>\n            <label for=\"end-date\">{{'page.reports.modal.endDate.label' | dictionary}}</label>\n            <input id=\"end-date\" type=\"date\" class=\"datepicker\" materialize=\"pickadate\"\n                   [(ngModel)]=\"endDate\" name=\"endDate\" [materializeParams]=\"[datePickerParams]\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <i class=\"material-icons prefix\">receipt</i>\n            <textarea id=\"report-content\" class=\"materialize-textarea\" [(ngModel)]=\"reportContent\" name=\"reportContent\" length=\"2000\" materialize=\"characterCounter\"></textarea>\n            <label for=\"report-content\">{{'page.reports.modal.reportContent.label' | dictionary}}</label>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <coach-modal-footer leftButtonLabel=\"{{'global.add.label' | dictionary}}\"\n                      rightButtonLabel=\"{{'global.close.label' | dictionary}}\"\n                      (leftButtonAction)=\"onAddClick()\"\n                      (rightButtonAction)=\"onCloseModal()\"\n                      [isDataValid]=\"isDataValid()\"></coach-modal-footer>\n\n</div>\n"

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

module.exports = "<div id=\"reports-delete\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[modalParams]\"\n     [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n\n    <h3>{{modalTitle}}</h3>\n\n    <div class=\"col s12\">\n      <div class=\"row\">\n        <p>{{'page.reports.modal.delete.content' | dictionary}}</p>\n      </div>\n    </div>\n  </div>\n\n  <coach-modal-footer leftButtonLabel=\"{{'global.delete.label' | dictionary}}\"\n                      rightButtonLabel=\"{{'global.close.label' | dictionary}}\"\n                      (leftButtonAction)=\"onDeleteClick()\"\n                      (rightButtonAction)=\"onCloseModal()\"\n                      [isDataValid]=\"isDataValid()\"></coach-modal-footer>\n</div>\n"

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

module.exports = "<div id=\"report-edit\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[modalParams]\"\n     [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n    <h3>{{modalTitle}}</h3>\n    <div class=\"row\">\n      <form materialize class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n            <i class=\"material-icons prefix\">today</i>\n            <label for=\"start-date\">{{'page.reports.modal.startDate.label' | dictionary}}</label>\n            <input id=\"start-date\" type=\"date\" class=\"datepicker\" materialize=\"pickadate\"\n                   [(ngModel)]=\"startDate\" name=\"startDate\" [materializeParams]=\"[datePickerParams]\">\n          </div>\n          <div class=\"input-field col s6\">\n            <i class=\"material-icons prefix\">today</i>\n            <label for=\"end-date\">{{'page.reports.modal.endDate.label' | dictionary}}</label>\n            <input id=\"end-date\" type=\"date\" class=\"datepicker\" materialize=\"pickadate\"\n                   [(ngModel)]=\"endDate\" name=\"endDate\" [materializeParams]=\"[datePickerParams]\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <i class=\"material-icons prefix\">receipt</i>\n            <textarea id=\"report-content\" class=\"materialize-textarea active\" [(ngModel)]=\"reportContent\" name=\"reportContent\" length=\"2000\" materialize=\"characterCounter\"></textarea>\n            <label for=\"report-content\">{{'page.reports.modal.reportContent.label' | dictionary}}</label>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <coach-modal-footer leftButtonLabel=\"{{'global.edit.label' | dictionary}}\"\n                      rightButtonLabel=\"{{'global.close.label' | dictionary}}\"\n                      (leftButtonAction)=\"onEditClick()\"\n                      (rightButtonAction)=\"onCloseModal()\"\n                      [isDataValid]=\"isDataValid()\"></coach-modal-footer>\n\n</div>\n"

/***/ }),

/***/ 309:
/***/ (function(module, exports) {

module.exports = "<div class=\"card grey lighten-3 hoverable\">\n  <div class=\"card-content\">\n    <span class=\"card-title\">\n      <p>{{previewTitle}}</p>\n      <div class=\"card-title-icons\">\n        <i (click)=\"onEditClick()\" class=\"small material-icons tooltipped\" materialize=\"tooltip\"\n           data-position=\"bottom\" data-delay=\"50\" [attr.data-tooltip]=\"'page.reports.edit.tooltip' | dictionary\">mode_edit</i>\n        <i (click)=\"onDeleteClick()\" class=\"small material-icons tooltipped\" materialize=\"tooltip\"\n           data-position=\"bottom\" data-delay=\"50\" [attr.data-tooltip]=\"'page.reports.delete.tooltip' | dictionary\">delete</i>\n      </div>\n    </span>\n    <img class=\"right tooltipped\" [ngClass]=\"arrowImageClass\" src=\"assets/img/arrow_down.png\"\n         (click)=\"onReportClick()\"/>\n  </div>\n  <div *ngIf=\"showData\" class=\"card-action\" [ngClass]=\"getLoadingStyle()\">\n    <div *ngIf=\"isLoading\">\n      <coach-strip-loader></coach-strip-loader>\n    </div>\n    <div *ngIf=\"!isLoading\">\n      {{report.content}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div *ngIf=\"isLoading\">\n      <coach-circle-loader></coach-circle-loader>\n    </div>\n\n    <div *ngIf=\"!isLoading\">\n      <div *ngFor=\"let reportPreview of reportPreviews\" class=\"col s12\">\n        <coach-report-card [reportPreview]=\"reportPreview\"></coach-report-card>\n      </div>\n\n      <div *ngIf=\"reportPreviews.length === 0\" class=\"col s12 center no-data\">\n        <div class=\"row\">\n          <i class=\"large material-icons\">info_outline</i>\n        </div>\n        <div class=\"row\">\n          <p>{{'page.reports.list.noData.info' | dictionary}} <a (click)=\"onAddClick()\">{{'page.reports.list.noData.click.info' | dictionary}}</a></p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"fixed-action-btn tooltipped\" materialize=\"tooltip\"\n         data-position=\"left\" data-delay=\"50\" [attr.data-tooltip]=\"'page.reports.add.tooltip' | dictionary\"\n         style=\"bottom: 45px; right: 24px;\"\n         (click)=\"onAddClick()\">\n      <a class=\"btn-floating btn-large waves-effect waves-light blue\">\n        <i class=\"large material-icons\">add</i>\n      </a>\n    </div>\n\n  </div>\n</div>\n\n<coach-report-modals></coach-report-modals>\n"

/***/ }),

/***/ 311:
/***/ (function(module, exports) {

module.exports = "<div style=\"display: block\">\n  <canvas baseChart height=\"60\"\n          [datasets]=\"chartData\"\n          [labels]=\"chartLabels\"\n          [options]=\"chartOptions\"\n          [colors]=\"chartColors\"\n          [legend]=\"isChartLegend\"\n          [chartType]=\"chartType\">\n  </canvas>\n</div>\n"

/***/ }),

/***/ 312:
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader-wrapper big active\">\n  <div class=\"spinner-layer spinner-blue-only\">\n    <div class=\"circle-clipper left\">\n      <div class=\"circle\"></div>\n    </div>\n    <div class=\"gap-patch\">\n      <div class=\"circle\"></div>\n    </div>\n    <div class=\"circle-clipper right\">\n      <div class=\"circle\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n  <div class=\"indeterminate\"></div>\n</div>\n"

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-footer\">\n  <a class=\"modal-action modal-close waves-effect waves-red btn-flat\" (click)=\"onRightButtonClick()\">{{rightButtonLabel}}</a>\n  <a class=\"modal-action modal-close waves-effect waves-teal btn-flat\" (click)=\"onLeftButtonClick()\" [class.disabled]=\"!isDataValid\">{{leftButtonLabel}}</a>\n</div>\n"

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div *ngFor=\"let cycle of getCycles(); let i = index\" class=\"col s12\">\n      <div class=\"card grey lighten-3\">\n        <div class=\"card-content\">\n          <span class=\"card-title\">Cykl {{ i + 1}}</span>\n        </div>\n        <div *ngIf=\"showContent(i)\" class=\"center card-action\">\n          <table *ngFor=\"let set of cycle.sets\" class=\"responsive-table\">\n            <thead>\n            <tr>\n              <th data-field=\"Set\">{{set.setName | uppercase}}</th>\n              <th *ngFor=\"let training of set.trainings\" data-field=\"Day 01\">{{training.trainingDate | date: \"dd-MM-yyyy\"}}</th>\n            </tr>\n            </thead>\n            <tbody>\n            <!--TODO SPARSUJ EXERCISE'Y DOBRA FUNKCJA-->\n            <tr *ngFor=\"let exercise of set.exercises\">\n              <td>{{exercise.exerciseName}}</td>\n              <td *ngFor=\"let session of exercise.exerciseSessions\">\n                <div *ngFor=\"let series of session.series\">\n                  {{series.repeats}} x {{series.weight}} kg\n                </div>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\n      <a class=\"btn-floating btn-large waves-effect waves-light blue\">\n        <i class=\"large material-icons\">add</i>\n      </a>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "<div id=\"weight-add\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[modalParams]\"\n     [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n\n    <h3>{{'page.weights.modal.add.title' | dictionary}}</h3>\n\n    <div class=\"row\">\n      <form materialize class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n            <i class=\"material-icons prefix\">assignment_ind</i>\n            <label for=\"weight\">{{'page.weights.modal.add.weight.label' | dictionary}}</label>\n            <input id=\"weight\" type=\"number\" step=\"0.1\" min=\"0\" [(ngModel)]=\"weightValue\" name=\"weightValue\">\n          </div>\n          <div class=\"input-field col s6\">\n            <i class=\"material-icons prefix\">today</i>\n            <label for=\"measurement-date\">{{'page.weights.modal.add.date.label' | dictionary}}</label>\n            <input id=\"measurement-date\" type=\"date\" class=\"datepicker\" materialize=\"pickadate\"\n                   [(ngModel)]=\"measurementDate\" name=\"measurementDate\"\n                   [materializeParams]=\"[datePickerParams]\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <coach-modal-footer leftButtonLabel=\"{{'global.add.label' | dictionary}}\"\n                      rightButtonLabel=\"{{'global.close.label' | dictionary}}\"\n                      (leftButtonAction)=\"onAddClick()\"\n                      (rightButtonAction)=\"onCloseModal()\"\n                      [isDataValid]=\"isDataValid()\"></coach-modal-footer>\n\n</div>\n"

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "<div id=\"weights-delete\" class=\"modal fourty-width-modal\" materialize=\"modal\" [materializeParams]=\"[modalParams]\"\n     [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n\n    <h3>{{modalTitle}}</h3>\n\n    <form materialize class=\"col s12\">\n      <div class=\"row\">\n        <p *ngFor=\"let weight of selectedWeights; let i = index\">\n          <input type=\"checkbox\" id=\"{{formattedDays[i]}}\" name=\"{{formattedDays[i]}}\" class=\"filled-in red-checkbox\"\n                 [(ngModel)]=\"checkboxesForWeights[i]\"/>\n          <label for=\"{{formattedDays[i]}}\">{{formattedDays[i]}} - {{weight.value}}</label>\n        </p>\n      </div>\n    </form>\n  </div>\n\n  <coach-modal-footer leftButtonLabel=\"{{'global.delete.label' | dictionary}}\"\n                      rightButtonLabel=\"{{'global.close.label' | dictionary}}\"\n                      (leftButtonAction)=\"onDeleteClick()\"\n                      (rightButtonAction)=\"onCloseModal()\"\n                      [isDataValid]=\"isDataValid()\"></coach-modal-footer>\n</div>\n"

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = "<div id=\"weights-edit\" class=\"modal fourty-width-modal\" materialize=\"modal\" [materializeParams]=\"[modalParams]\"\n     [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n    <h3>{{modalTitle}}</h3>\n    <table class=\"striped\">\n      <thead>\n      <tr>\n        <th data-field=\"day\">{{'page.weights.modal.edit.day.label' | dictionary}}</th>\n        <th data-field=\"measurement\">{{'page.weights.modal.edit.measurement.label' | dictionary}}</th>\n      </tr>\n      </thead>\n\n      <tbody>\n      <tr *ngFor=\"let weight of selectedWeights; let i = index\">\n        <td class=\"half-width-cell\">{{formattedDays[i]}}</td>\n        <td class=\"half-width-cell\">\n          <div class=\"input-field inline\">\n            <input type=\"number\" step=\"0.1\" [(ngModel)]=\"weight.value\" (ngModelChange)=\"addDayIndexToChanged(i)\">\n          </div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n  <coach-modal-footer leftButtonLabel=\"{{'global.edit.label' | dictionary}}\"\n                      rightButtonLabel=\"{{'global.close.label' | dictionary}}\"\n                      (leftButtonAction)=\"onEditClick()\"\n                      (rightButtonAction)=\"onCloseModal()\"\n                      [isDataValid]=\"isDataValid()\"></coach-modal-footer>\n</div>\n"

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

module.exports = "<div class=\"card grey lighten-3 hoverable\">\n  <div class=\"card-content\">\n    <span class=\"card-title\">\n      <p>{{previewTitle}}</p>\n      <div class=\"card-title-icons\">\n        <i (click)=\"onEditClick()\" class=\"small material-icons tooltipped\" materialize=\"tooltip\"\n           data-position=\"bottom\" data-delay=\"50\"\n           [attr.data-tooltip]=\"'page.weights.edit.tooltip' | dictionary\">mode_edit</i>\n        <i (click)=\"onDeleteClick()\" class=\"small material-icons tooltipped\" materialize=\"tooltip\"\n           data-position=\"bottom\" data-delay=\"50\"\n           [attr.data-tooltip]=\"'page.weights.delete.tooltip' | dictionary\">delete</i>\n      </div>\n    </span>\n    <img class=\"right\" [ngClass]=\"arrowImageClass\" src=\"assets/img/arrow_down.png\"\n         (click)=\"onWeightsClick()\"/>\n  </div>\n  <div *ngIf=\"showData\" class=\"center card-action\" [ngClass]=\"getLoadingStyle()\">\n    <div *ngIf=\"isLoading\">\n      <coach-strip-loader></coach-strip-loader>\n    </div>\n    <div *ngIf=\"!isLoading\">\n      <coach-line-chart [chartData]=\"chartData\" [chartLabels]=\"chartLabels\"></coach-line-chart>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div *ngIf=\"isLoading\">\n      <coach-circle-loader></coach-circle-loader>\n    </div>\n\n    <div *ngIf=\"!isLoading\">\n      <div *ngFor=\"let weightsPreview of weightsPreviews\" class=\"col s12\">\n        <coach-weights-card [weightsPreview]=\"weightsPreview\"></coach-weights-card>\n      </div>\n\n      <div *ngIf=\"weightsPreviews.length === 0\" class=\"col s12 center no-data\">\n        <div class=\"row\">\n          <i class=\"large material-icons\">info_outline</i>\n        </div>\n        <div class=\"row\">\n          <p>{{'page.weights.list.noData.info' | dictionary}} <a (click)=\"onAddClick()\">{{'page.weights.list.noData.click.info'\n            | dictionary}}</a></p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"fixed-action-btn tooltipped\" materialize=\"tooltip\"\n         data-position=\"left\" data-delay=\"50\" [attr.data-tooltip]=\"'page.weights.add.tooltip' | dictionary\"\n         style=\"bottom: 45px; right: 24px;\"\n         (click)=\"onAddClick()\">\n      <a class=\"btn-floating btn-large waves-effect waves-light blue\">\n        <i class=\"large material-icons\">add</i>\n      </a>\n    </div>\n  </div>\n</div>\n\n<coach-weights-modals></coach-weights-modals>\n"

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "#shopping-list table {\n  margin-bottom: 20px; }\n  #shopping-list table th.icons {\n    text-align: center; }\n  #shopping-list table td {\n    vertical-align: top; }\n    #shopping-list table td.icons {\n      padding-top: 35px;\n      text-align: center; }\n\n#shopping-list a {\n  cursor: pointer; }\n\n.my-drop-zone {\n  border: dotted 3px lightgray; }\n\n.nv-file-over {\n  border: dotted 3px red; }\n\n/* Default class applied to drop zones on over */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportModalsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ReportModalsService = (function () {
    function ReportModalsService() {
        this.addReport = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.editReport = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.deleteReport = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.refreshPage = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    ReportModalsService.prototype.callAddReport = function () {
        this.addReport.next(null);
    };
    ReportModalsService.prototype.callEditReport = function (report, modalTitle) {
        this.editReport.next({ report: report, modalTitle: modalTitle });
    };
    ReportModalsService.prototype.callDeleteReport = function (report, modalTitle) {
        this.deleteReport.next({ report: report, modalTitle: modalTitle });
    };
    ReportModalsService.prototype.callRefreshPage = function () {
        this.refreshPage.next(null);
    };
    return ReportModalsService;
}());
ReportModalsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ReportModalsService);

//# sourceMappingURL=report-modals.service.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightsModalsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WeightsModalsService = (function () {
    function WeightsModalsService() {
        this.addWeight = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.editWeights = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.deleteWeights = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.refreshPage = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
    }
    WeightsModalsService.prototype.callAddWeight = function () {
        this.addWeight.next(null);
    };
    WeightsModalsService.prototype.callEditWeights = function (weights, modalTitle) {
        this.editWeights.next({ weights: weights, modalTitle: modalTitle });
    };
    WeightsModalsService.prototype.callDeleteWeights = function (weights, modalTitle) {
        this.deleteWeights.next({ weights: weights, modalTitle: modalTitle });
    };
    WeightsModalsService.prototype.callRefreshPage = function () {
        this.refreshPage.next(null);
    };
    return WeightsModalsService;
}());
WeightsModalsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], WeightsModalsService);

//# sourceMappingURL=weights-modals.service.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NewCycle */
/* unused harmony export NewExerciseSession */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NewPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NewProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NewReport; });
/* unused harmony export NewSeries */
/* unused harmony export NewSet */
/* unused harmony export NewTraining */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ShoppingList; });
var NewCycle = (function () {
    function NewCycle(startDate, sets) {
        this.startDate = startDate;
        this.sets = sets;
    }
    return NewCycle;
}());

var NewExerciseSession = (function () {
    function NewExerciseSession(exerciseId, series) {
        this.exerciseId = exerciseId;
        this.series = series;
    }
    return NewExerciseSession;
}());

var NewPrice = (function () {
    function NewPrice(productId, value, quantity, place, priceDate) {
        this.productId = productId;
        this.value = value;
        this.quantity = quantity;
        this.place = place;
        this.priceDate = priceDate;
    }
    return NewPrice;
}());

// screen can be file or string, not sure how sending files will be implemented
var NewProduct = (function () {
    function NewProduct(productName, screen) {
        this.productName = productName;
        this.screen = screen;
    }
    return NewProduct;
}());

var NewReport = (function () {
    function NewReport(content, startDate, endDate) {
        this.content = content;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return NewReport;
}());

var NewSeries = (function () {
    function NewSeries(weight, repeats, comment) {
        this.weight = weight;
        this.repeats = repeats;
        this.comment = comment;
    }
    return NewSeries;
}());

var NewSet = (function () {
    function NewSet(setName, exercises) {
        this.setName = setName;
        this.exercises = exercises;
    }
    return NewSet;
}());

var NewTraining = (function () {
    function NewTraining(setId, exerciseSessions, date) {
        this.setId = setId;
        this.exerciseSessions = exerciseSessions;
        this.date = date;
    }
    return NewTraining;
}());

var NewWeight = (function () {
    function NewWeight(value, measurementDate) {
        this.value = value;
        this.measurementDate = measurementDate;
    }
    return NewWeight;
}());

var ShoppingList = (function () {
    function ShoppingList(place, prices, shoppingDate) {
        this.place = place;
        this.prices = prices;
        this.shoppingDate = shoppingDate;
    }
    return ShoppingList;
}());

//# sourceMappingURL=add.entities.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CyclePreview */
/* unused harmony export SetPreview */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WeightsPreview; });
var CyclePreview = (function () {
    function CyclePreview(cycleId, startDate, endDate) {
        this.cycleId = cycleId;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return CyclePreview;
}());

var SetPreview = (function () {
    function SetPreview(setId, setName) {
        this.setId = setId;
        this.setName = setName;
    }
    return SetPreview;
}());

var ReportPreview = (function () {
    function ReportPreview(reportId, startDate, endDate) {
        this.reportId = reportId;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return ReportPreview;
}());

var WeightsPreview = (function () {
    function WeightsPreview(month, year) {
        this.month = month;
        this.year = year;
    }
    return WeightsPreview;
}());

//# sourceMappingURL=preview.entities.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MODAL_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOES_NOT_CONTAIN; });
var MODAL_PARAMS = {
    dismissible: false,
    in_duration: 900,
    out_duration: 900
};
var DOES_NOT_CONTAIN = -1;
//# sourceMappingURL=global.values.js.map

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weights_services_weights_back_end_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weights_services_weights_mock_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reports_services_report_back_end_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reports_services_report_mock_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dictionary_mock_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dictionary_back_end_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__prices_services_prices_back_end_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__prices_services_prices_mock_service__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceInjector; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ServiceInjector = (function () {
    function ServiceInjector(injector) {
        this.injector = injector;
    }
    ServiceInjector.prototype.getWeightsService = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isBackendServerAvailable) {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_1__weights_services_weights_back_end_service__["a" /* WeightsBackEndService */]);
        }
        else {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_2__weights_services_weights_mock_service__["a" /* WeightsMockService */]);
        }
    };
    ServiceInjector.prototype.getReportService = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isBackendServerAvailable) {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_4__reports_services_report_back_end_service__["a" /* ReportBackEndService */]);
        }
        else {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_5__reports_services_report_mock_service__["a" /* ReportMockService */]);
        }
    };
    ServiceInjector.prototype.getPricesService = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isBackendServerAvailable) {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_8__prices_services_prices_back_end_service__["a" /* PricesBackEndService */]);
        }
        else {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_9__prices_services_prices_mock_service__["a" /* PricesMockService */]);
        }
    };
    ServiceInjector.prototype.getDictionaryService = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isBackendServerAvailable) {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_7__dictionary_back_end_service__["a" /* DictionaryBackEndService */]);
        }
        else {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_6__dictionary_mock_service__["a" /* DictionaryMockService */]);
        }
    };
    return ServiceInjector;
}());
ServiceInjector = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _a || Object])
], ServiceInjector);

var _a;
//# sourceMappingURL=service.injector.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loaders_circle_loader_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loaders_strip_loader_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_modal_footer_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charts_line_chart_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_materialize__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_dictionary_pipe__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6_angular2_materialize__["MaterializeDirective"],
            __WEBPACK_IMPORTED_MODULE_0__loaders_circle_loader_component__["a" /* CircleLoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_1__loaders_strip_loader_component__["a" /* StripLoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__modals_modal_footer_component__["a" /* ModalFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__charts_line_chart_component__["a" /* LineChartComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_dictionary_pipe__["a" /* DictionaryPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6_angular2_materialize__["MaterializeDirective"],
            __WEBPACK_IMPORTED_MODULE_0__loaders_circle_loader_component__["a" /* CircleLoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_1__loaders_strip_loader_component__["a" /* StripLoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__modals_modal_footer_component__["a" /* ModalFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__charts_line_chart_component__["a" /* LineChartComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_dictionary_pipe__["a" /* DictionaryPipe */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(180);


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".material-button, .card-content span.card-title .card-title-icons i {\n  display: inline;\n  cursor: pointer;\n  -webkit-filter: contrast(0);\n          filter: contrast(0); }\n  .material-button:hover, .card-content span.card-title .card-title-icons i:hover {\n    -webkit-filter: contrast(1);\n            filter: contrast(1); }\n\n.arrow, .down-arrow, .left-arrow {\n  -webkit-filter: contrast(0);\n          filter: contrast(0);\n  cursor: pointer; }\n  .arrow:hover, .down-arrow:hover, .left-arrow:hover {\n    -webkit-filter: contrast(1);\n            filter: contrast(1); }\n\n.left-arrow {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.card-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n  .card-content span.card-title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n    -ms-flex-item-align: center;\n        align-self: center;\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n    .card-content span.card-title p {\n      margin-right: 15px; }\n    .card-content span.card-title .card-title-icons {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-align: baseline;\n          -ms-flex-align: baseline;\n              align-items: baseline;\n      -ms-flex-item-align: center;\n          align-self: center;\n      -webkit-box-ordinal-group: 100;\n          -ms-flex-order: 99;\n              order: 99;\n      visibility: hidden; }\n      .card-content span.card-title .card-title-icons i {\n        margin-right: 5px; }\n  .card-content img.right {\n    -webkit-box-ordinal-group: 100;\n        -ms-flex-order: 99;\n            order: 99;\n    -ms-flex-preferred-size: 40px;\n        flex-basis: 40px; }\n\n.card-content:hover span.card-title .card-title-icons {\n  visibility: visible; }\n\n.input-field input:focus {\n  border-bottom: 1px solid #1976D2;\n  box-shadow: 0 1px 0 0 #1976D2; }\n  .input-field input:focus + label {\n    color: #1976D2; }\n\n.input-field .dropdown-content li > span {\n  color: black; }\n\n.input-field .autocomplete-content li .highlight {\n  color: #1976D2; }\n\n.red-checkbox[type=\"checkbox\"].filled-in:checked + label:after {\n  background-color: #B71C1C;\n  border: 2px solid #B71C1C; }\n\n.loading {\n  padding: 0; }\n\n.preloader-wrapper.big {\n  width: 120px;\n  height: 120px; }\n\n.preloader-wrapper {\n  display: block;\n  position: relative;\n  top: 150px;\n  margin: 0 auto; }\n\n.progress {\n  margin: 0;\n  background-color: #1976D2; }\n  .progress .indeterminate {\n    background-color: #90CAF9; }\n\n.no-data {\n  margin-top: 150px; }\n  .no-data i.large.material-icons {\n    color: #1976D2;\n    margin-bottom: 100px;\n    font-size: 12rem; }\n  .no-data p {\n    font-size: 24px; }\n    .no-data p a:hover {\n      text-decoration: underline;\n      cursor: pointer; }\n  .no-data.small {\n    margin-top: 30px; }\n    .no-data.small i.medium.material-icons {\n      color: #1976D2;\n      margin-bottom: 30px;\n      font-size: 12rem; }\n    .no-data.small p {\n      margin-bottom: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseCardComponent; });
var BaseCardComponent = (function () {
    function BaseCardComponent() {
    }
    BaseCardComponent.prototype.ngOnInit = function () {
        // false showData because at first toggle we want to see true to load data
        this.showData = false;
        this.isLoading = true;
        this.arrowImageClass = 'left-arrow';
    };
    BaseCardComponent.prototype.toggleShow = function () {
        this.showData = !this.showData;
        if (this.showData) {
            this.arrowImageClass = 'down-arrow';
        }
        else {
            this.arrowImageClass = 'left-arrow';
        }
    };
    BaseCardComponent.prototype.getLoadingStyle = function () {
        if (this.isLoading) {
            return "loading";
        }
        else {
            return "";
        }
    };
    return BaseCardComponent;
}());

//# sourceMappingURL=base-card.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dictionary_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryMockService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DictionaryMockService = (function (_super) {
    __extends(DictionaryMockService, _super);
    function DictionaryMockService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Application for dev purposes is in english, but for date picker we have different rule. Mainly only for test
    // if we can really modify calendar values
    DictionaryMockService.prototype.getDictionaryFromDb = function () {
        return {
            'page.weights.modal.add.title': 'Add weight',
            'calendar.nextDay.label': 'Następny',
            'calendar.prevDay.label': 'Poprzedni',
            'calendar.monthSelect.label': 'Wybierz miesiąc',
            'calendar.yearSelect.label': 'Wybierz rok',
            'calendar.today.label': 'Dzisiaj',
            'calendar.clear.label': 'Czyść',
            'calendar.close.label': 'Wyjdź',
            'calendar.month.jan.full': 'Styczeń',
            'calendar.month.feb.full': 'Luty',
            'calendar.month.mar.full': 'Marzec',
            'calendar.month.apr.full': 'Kwiecień',
            'calendar.month.may.full': 'Maj',
            'calendar.month.jun.full': 'Czerwiec',
            'calendar.month.jul.full': 'Lipiec',
            'calendar.month.aug.full': 'Sierpień',
            'calendar.month.sep.full': 'Wrzesień',
            'calendar.month.oct.full': 'Październik',
            'calendar.month.nov.full': 'Listopad',
            'calendar.month.dec.full': 'Grudzień',
            'calendar.month.jan.short': 'Sty',
            'calendar.month.feb.short': 'Lut',
            'calendar.month.mar.short': 'Mar',
            'calendar.month.apr.short': 'Kwi',
            'calendar.month.may.short': 'Maj',
            'calendar.month.jun.short': 'Cze',
            'calendar.month.jul.short': 'Lip',
            'calendar.month.aug.short': 'Sie',
            'calendar.month.sep.short': 'Wrz',
            'calendar.month.oct.short': 'Paź',
            'calendar.month.nov.short': 'Lis',
            'calendar.month.dec.short': 'Gru',
            'calendar.day.mon.full': 'Poniedziałek',
            'calendar.day.tue.full': 'Wtorek',
            'calendar.day.wen.full': 'Środa',
            'calendar.day.thu.full': 'Czwartek',
            'calendar.day.fri.full': 'Piątek',
            'calendar.day.sat.full': 'Sobota',
            'calendar.day.sun.full': 'Niedziela',
            'calendar.day.mon.short': 'Pn',
            'calendar.day.tue.short': 'Wt',
            'calendar.day.wen.short': 'Śr',
            'calendar.day.thu.short': 'Czw',
            'calendar.day.fri.short': 'Pt',
            'calendar.day.sat.short': 'Sb',
            'calendar.day.sun.short': 'Ndz',
            'calendar.day.mon.letter': 'P',
            'calendar.day.tue.letter': 'W',
            'calendar.day.wen.letter': 'Ś',
            'calendar.day.thu.letter': 'C',
            'calendar.day.fri.letter': 'P',
            'calendar.day.sat.letter': 'S',
            'calendar.day.sun.letter': 'N',
            'calendar.day': 'Dzień',
            'calendar.format': 'dd mmm yyyy',
            'calendar.format.momentjs': 'DD MMM YYYY'
        };
    };
    return DictionaryMockService;
}(__WEBPACK_IMPORTED_MODULE_0__dictionary_service__["a" /* DictionaryService */]));
DictionaryMockService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], DictionaryMockService);

//# sourceMappingURL=dictionary.mock.service.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    isBackendServerAvailable: false,
    url: "http://localhost:8080"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "@media (min-width: 1280px) {\n  .fourty-width-modal {\n    width: 40%; } }\n\ntd.half-width-cell {\n  width: 50%; }\n\n.input-field input:focus {\n  border-bottom: 1px solid #1976D2;\n  box-shadow: 0 1px 0 0 #1976D2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

},[600]);
//# sourceMappingURL=main.bundle.js.map