var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    Component({
        selector: 'coach-about',
        template: "\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"s12 center\" style=\"margin: 80px 0;\">\n            <h1>{{'page.about.title' | dictionary}}</h1>\n          </div>\n        </div>\n        <div class=\"row\" style=\"margin-bottom: 100px;\">\n          <div class=\"s12 center\">\n            <h4>{{'page.about.content' | dictionary}}</h4>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col s4 center\">\n            <img src=\"assets/img/github.png\"/>\n          </div>\n          <div class=\"col s4 center\">\n            <img src=\"assets/img/github.png\"/>\n          </div>\n          <div class=\"col s4 center\">\n            <img src=\"assets/img/github.png\"/>\n          </div>\n        </div>\n      </div>\n"
    })
], AboutComponent);
export { AboutComponent };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/about.component.js.map