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
import { CYCLES_LIST } from "../shared/entities/mock-data/cycles.mock-data";
var TrainingsComponent = (function () {
    function TrainingsComponent() {
    }
    TrainingsComponent.prototype.ngOnInit = function () {
        this.showContents = [false, false, true];
    };
    TrainingsComponent.prototype.getCycles = function () {
        return CYCLES_LIST;
    };
    TrainingsComponent.prototype.showContent = function (index) {
        return this.showContents[index];
    };
    return TrainingsComponent;
}());
TrainingsComponent = __decorate([
    Component({
        selector: 'coach-training',
        templateUrl: './trainings.component.html',
        styleUrls: ['./trainings.component.scss']
    }),
    __metadata("design:paramtypes", [])
], TrainingsComponent);
export { TrainingsComponent };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/trainings/trainings.component.js.map