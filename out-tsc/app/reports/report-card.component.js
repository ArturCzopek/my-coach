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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { ReportPreview } from "../shared/entities/preview.entities";
import { ServiceInjector } from "../shared/services/service.injector";
import { ReportModalsService } from "./services/report-modals.service";
import { BaseCardComponent } from "../shared/components/base-card.component";
var ReportCardComponent = (function (_super) {
    __extends(ReportCardComponent, _super);
    function ReportCardComponent(reportModalsService, serviceInjector) {
        var _this = _super.call(this) || this;
        _this.reportModalsService = reportModalsService;
        _this.serviceInjector = serviceInjector;
        _this.reportService = serviceInjector.getReportService();
        return _this;
    }
    ReportCardComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.report = null;
        this.previewTitle = this.reportService.getPreviewTitle(this.reportPreview);
    };
    ReportCardComponent.prototype.onReportClick = function () {
        var _this = this;
        this.toggleShow();
        if (this.showData) {
            if (this.report == null) {
                this.reportService.getReport(this.reportPreview.reportId)
                    .subscribe(function (report) {
                    _this.report = report;
                }, function () { }, function () {
                    _this.isLoading = false;
                });
            }
        }
    };
    ReportCardComponent.prototype.onEditClick = function () {
        this.reportModalsService.callEditReport(this.report, this.previewTitle);
    };
    ReportCardComponent.prototype.onDeleteClick = function () {
        this.reportModalsService.callDeleteReport(this.report, this.previewTitle);
    };
    return ReportCardComponent;
}(BaseCardComponent));
__decorate([
    Input(),
    __metadata("design:type", ReportPreview)
], ReportCardComponent.prototype, "reportPreview", void 0);
ReportCardComponent = __decorate([
    Component({
        selector: 'coach-report-card',
        templateUrl: 'report-card.component.html',
        styleUrls: ['./reports.scss', '../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [ReportModalsService, ServiceInjector])
], ReportCardComponent);
export { ReportCardComponent };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/reports/report-card.component.js.map