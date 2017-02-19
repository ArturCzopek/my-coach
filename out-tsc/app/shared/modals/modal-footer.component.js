var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from "@angular/core";
var ModalFooterComponent = (function () {
    function ModalFooterComponent() {
        this.rightButtonAction = new EventEmitter();
        this.leftButtonAction = new EventEmitter();
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
    Input(),
    __metadata("design:type", String)
], ModalFooterComponent.prototype, "rightButtonLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalFooterComponent.prototype, "leftButtonLabel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalFooterComponent.prototype, "rightButtonAction", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalFooterComponent.prototype, "leftButtonAction", void 0);
ModalFooterComponent = __decorate([
    Component({
        selector: 'coach-modal-footer',
        templateUrl: 'modal-footer.component.html',
        styleUrls: []
    })
], ModalFooterComponent);
export { ModalFooterComponent };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/shared/modals/modal-footer.component.js.map