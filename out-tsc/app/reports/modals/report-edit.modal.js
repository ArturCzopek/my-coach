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
import { DateService } from "../../shared/services/date.service";
var ReportEditModal = (function () {
    function ReportEditModal(reportModalsService, serviceInjector, dateService) {
        this.reportModalsService = reportModalsService;
        this.serviceInjector = serviceInjector;
        this.dateService = dateService;
        this.selectedReport = null;
        this.editModalActions = new EventEmitter();
        this.reportContent = '';
        this.startDate = '';
        this.endDate = '';
        this.reportService = serviceInjector.getReportService();
        this.dictionaryService = serviceInjector.getDictionaryService();
    }
    ReportEditModal.prototype.ngOnInit = function () {
        var _this = this;
        this.modalParams = MODAL_PARAMS;
        this.datePickerParams = this.dictionaryService.getDateDictionarySettings();
        this.reportModalsService.editReport.subscribe(function (data) {
            _this.selectedReport = data.report;
            if (_this.selectedReport) {
                _this.reportContent = _this.selectedReport.content;
                _this.startDate = _this.dateService.parseDateToString(_this.selectedReport.startDate);
                _this.endDate = _this.dateService.parseDateToString(_this.selectedReport.endDate);
            }
            _this.modalTitle = data.modalTitle;
            _this.openEditModal();
        });
    };
    ReportEditModal.prototype.ngAfterViewChecked = function () {
        if (typeof Materialize.updateTextFields === "function") {
            Materialize.updateTextFields();
        }
    };
    ReportEditModal.prototype.openEditModal = function () {
        if (this.selectedReport) {
            this.editModalActions.emit({ action: "modal", params: ['open'] });
        }
        else {
            Materialize.toast(this.dictionaryService.getDictionaryValue('page.reports.loadFirst.tooltip'), 3000);
        }
    };
    ReportEditModal.prototype.onEditClick = function () {
        this.selectedReport.startDate = this.dateService.parseStringToDate(this.startDate);
        this.selectedReport.endDate = this.dateService.parseStringToDate(this.endDate);
        this.reportContent = this.reportContent;
        this.reportService.editReport(this.selectedReport);
        this.reportModalsService.callRefreshPage();
        this.onCloseModal();
    };
    ReportEditModal.prototype.onCloseModal = function () {
        this.editModalActions.emit({ action: "modal", params: ['close'] });
    };
    ReportEditModal.prototype.isDataValid = function () {
        return this.reportContent.length > 0 && this.dateService.isSecondDateLater(this.startDate, this.endDate);
    };
    return ReportEditModal;
}());
ReportEditModal = __decorate([
    Component({
        selector: 'coach-report-edit-modal',
        templateUrl: 'report-edit.modal.html',
        styleUrls: ['report.modals.scss', '../../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [ReportModalsService, ServiceInjector, DateService])
], ReportEditModal);
export { ReportEditModal };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/reports/modals/report-edit.modal.js.map