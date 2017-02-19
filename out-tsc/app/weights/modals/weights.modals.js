var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable:component-class-suffix */
import { Component } from "@angular/core";
var WeightsModals = (function () {
    function WeightsModals() {
    }
    return WeightsModals;
}());
WeightsModals = __decorate([
    Component({
        selector: 'coach-weights-modals',
        template: "\n    <coach-weight-add-modal></coach-weight-add-modal>\n    <coach-weights-edit-modal></coach-weights-edit-modal>\n    <coach-weights-delete-modal></coach-weights-delete-modal>"
    })
], WeightsModals);
export { WeightsModals };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/weights/modals/weights.modals.js.map