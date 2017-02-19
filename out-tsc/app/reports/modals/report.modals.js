var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable:component-class-suffix */
import { Component } from "@angular/core";
var ReportModals = (function () {
    function ReportModals() {
    }
    return ReportModals;
}());
ReportModals = __decorate([
    Component({
        selector: 'coach-report-modals',
        template: "\n    <coach-report-add-modal></coach-report-add-modal>\n    <coach-report-delete-modal></coach-report-delete-modal>\n    <coach-report-edit-modal></coach-report-edit-modal>"
    })
], ReportModals);
export { ReportModals };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/reports/modals/report.modals.js.map