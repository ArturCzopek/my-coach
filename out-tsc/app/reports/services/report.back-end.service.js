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
import { ReportService } from "./report.service";
import { Injectable } from "@angular/core";
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
}(ReportService));
ReportBackEndService = __decorate([
    Injectable()
], ReportBackEndService);
export { ReportBackEndService };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/reports/services/report.back-end.service.js.map