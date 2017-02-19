var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
var ReportModalsService = (function () {
    function ReportModalsService() {
        this.addReport = new Subject();
        this.editReport = new Subject();
        this.deleteReport = new Subject();
        this.refreshPage = new Subject();
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
    Injectable()
], ReportModalsService);
export { ReportModalsService };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/reports/services/report-modals.service.js.map