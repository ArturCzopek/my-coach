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
import { REPORT_PREVIEWS_LIST } from "../../shared/entities/mock-data/previews/report-previews.mock-data";
import { Observable } from "rxjs";
import { ReportPreview } from "../../shared/entities/preview.entities";
import { Report } from "../../shared/entities/get.entities";
import { REPORTS_LIST } from "../../shared/entities/mock-data/reports.mock-data";
import { ReportService } from "./report.service";
import { Injectable } from "@angular/core";
import { DOES_NOT_CONTAIN } from "../../shared/global.values";
var ReportMockService = (function (_super) {
    __extends(ReportMockService, _super);
    function ReportMockService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newId = REPORTS_LIST.length;
        return _this;
    }
    ReportMockService.prototype.getReportPreviews = function () {
        return Observable.create(function (observer) {
            // timeout is simulation of 'getting from http'
            setTimeout(function () {
                observer.next(REPORT_PREVIEWS_LIST);
            }, 1000);
            setTimeout(function () {
                observer.complete();
            }, 1100);
        });
    };
    ReportMockService.prototype.getReport = function (reportId) {
        var reportToReturn;
        for (var _i = 0, REPORTS_LIST_1 = REPORTS_LIST; _i < REPORTS_LIST_1.length; _i++) {
            var report = REPORTS_LIST_1[_i];
            if (report.reportId === reportId) {
                reportToReturn = report;
                break;
            }
        }
        return Observable.create(function (observer) {
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
        var report = new Report(reportId, reportToAdd.content, reportToAdd.startDate, reportToAdd.endDate);
        var reportPreview = new ReportPreview(reportId, reportToAdd.startDate, reportToAdd.endDate);
        REPORTS_LIST.push(report);
        REPORT_PREVIEWS_LIST.push(reportPreview);
    };
    ReportMockService.prototype.deleteReport = function (reportToDelete) {
        var reportIndex = REPORTS_LIST.indexOf(reportToDelete);
        if (reportIndex !== DOES_NOT_CONTAIN) {
            REPORTS_LIST.splice(reportIndex, 1);
        }
        for (var i = 0; i < REPORT_PREVIEWS_LIST.length; i++) {
            if (REPORT_PREVIEWS_LIST[i].reportId === reportToDelete.reportId) {
                REPORT_PREVIEWS_LIST.splice(i, 1);
                break;
            }
        }
    };
    ReportMockService.prototype.editReport = function (reportToEdit) {
        var reportIndex = REPORTS_LIST.indexOf(reportToEdit);
        if (reportIndex !== DOES_NOT_CONTAIN) {
            REPORTS_LIST[reportIndex] = reportToEdit;
        }
        for (var i = 0; i < REPORT_PREVIEWS_LIST.length; i++) {
            if (REPORT_PREVIEWS_LIST[i].reportId === reportToEdit.reportId) {
                REPORT_PREVIEWS_LIST[i].startDate = reportToEdit.startDate;
                REPORT_PREVIEWS_LIST[i].endDate = reportToEdit.endDate;
                break;
            }
        }
    };
    return ReportMockService;
}(ReportService));
ReportMockService = __decorate([
    Injectable()
], ReportMockService);
export { ReportMockService };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/reports/services/report.mock.service.js.map