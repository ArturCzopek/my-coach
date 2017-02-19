var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:component-class-suffix */
import { Component, EventEmitter } from "@angular/core";
import { ReportModalsService } from "../services/report-modals.service";
import { ServiceInjector } from "../../shared/services/service.injector";
import { MODAL_PARAMS } from "../../shared/global.values";
var ReportDeleteModal = (function () {
    function ReportDeleteModal(reportModalsService, serviceInjector) {
        this.reportModalsService = reportModalsService;
        this.serviceInjector = serviceInjector;
        this.selectedReport = null;
        this.deleteModalActions = new EventEmitter();
        this.reportService = serviceInjector.getReportService();
        this.dictionaryService = serviceInjector.getDictionaryService();
    }
    ReportDeleteModal.prototype.ngOnInit = function () {
        var _this = this;
        this.modalParams = MODAL_PARAMS;
        this.reportModalsService.deleteReport.subscribe(function (data) {
            _this.selectedReport = data.report;
            _this.modalTitle = data.modalTitle;
            _this.openDeleteModal();
        });
    };
    ;
    ReportDeleteModal.prototype.openDeleteModal = function () {
        if (this.selectedReport) {
            this.deleteModalActions.emit({ action: "modal", params: ['open'] });
        }
        else {
            Materialize.toast(this.dictionaryService.getDictionaryValue('page.reports.loadFirst.tooltip'), 3000);
        }
    };
    ReportDeleteModal.prototype.onDeleteClick = function () {
        this.reportService.deleteReport(this.selectedReport);
        this.reportModalsService.callRefreshPage();
        this.onCloseModal();
    };
    ReportDeleteModal.prototype.onCloseModal = function () {
        this.deleteModalActions.emit({ action: "modal", params: ['close'] });
    };
    return ReportDeleteModal;
}());
ReportDeleteModal = __decorate([
    Component({
        selector: 'coach-report-delete-modal',
        templateUrl: 'report-delete.modal.html',
        styleUrls: ['report.modals.scss', '../../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [ReportModalsService, ServiceInjector])
], ReportDeleteModal);
export { ReportDeleteModal };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/reports/modals/report-delete.modal.js.map