var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Component({
        selector: 'coach-header',
        template: "\n<div class=\"navbar-fixed\">\n  <nav>\n    <div class=\"nav-wrapper blue darken-2\">\n      <a href=\"#\" class=\"brand-logo\">{{'navbar.applicationName.label' | dictionary}}</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li [routerLink]=\"['/weights']\" routerLinkActive=\"active\"><a>{{'navbar.weights.label' | dictionary}}</a></li>\n        <li [routerLink]=\"['/trainings']\" routerLinkActive=\"active\"><a>{{'navbar.trainings.label' | dictionary}}</a></li>\n        <li [routerLink]=\"['/prices']\" routerLinkActive=\"active\"><a>{{'navbar.foodPrices.label' | dictionary}}</a></li>\n        <li [routerLink]=\"['/reports']\" routerLinkActive=\"active\"><a>{{'navbar.reports.label' | dictionary}}</a></li>\n        <li [routerLink]=\"['/about']\" routerLinkActive=\"active\"><a>{{'navbar.about.label' | dictionary}}</a></li>\n      </ul>\n    </div>\n  </nav>\n</div>\n",
        styleUrls: []
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/header.component.js.map