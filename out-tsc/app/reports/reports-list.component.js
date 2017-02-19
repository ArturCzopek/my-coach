var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ServiceInjector } from "../shared/services/service.injector";
import { ReportModalsService } from "./services/report-modals.service";
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
            _this.reportPreviews = previews;
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
    Component({
        selector: 'coach-reports-list',
        templateUrl: './reports-list.component.html',
        styleUrls: ['./reports.scss', '../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [ReportModalsService, ServiceInjector])
], ReportsListComponent);
export { ReportsListComponent };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/reports/reports-list.component.js.map