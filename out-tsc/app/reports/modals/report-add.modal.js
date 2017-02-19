var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter } from "@angular/core";
import { NewReport } from "../../shared/entities/add.entities";
import { ReportModalsService } from "../services/report-modals.service";
import { ServiceInjector } from "../../shared/services/service.injector";
import { MODAL_PARAMS } from "../../shared/global.values";
import { DateService } from "../../shared/services/date.service";
var ReportAddModal = (function () {
    function ReportAddModal(reportModalsService, serviceInjector, dateService) {
        this.reportModalsService = reportModalsService;
        this.serviceInjector = serviceInjector;
        this.dateService = dateService;
        this.addModalActions = new EventEmitter();
        this.reportService = serviceInjector.getReportService();
        this.dictionaryService = serviceInjector.getDictionaryService();
        this.reportContent = '';
        this.startDate = '';
        this.endDate = '';
    }
    ReportAddModal.prototype.ngOnInit = function () {
        var _this = this;
        this.modalParams = MODAL_PARAMS;
        this.datePickerParams = this.dictionaryService.getDateDictionarySettings();
        this.reportModalsService.addReport.subscribe(function () {
            _this.openReportModal();
        });
    };
    ReportAddModal.prototype.openReportModal = function () {
        this.reportContent = '';
        this.startDate = '';
        this.endDate = '';
        this.addModalActions.emit({ action: "modal", params: ['open'] });
    };
    ReportAddModal.prototype.onAddClick = function () {
        this.reportToAdd = new NewReport(this.reportContent, this.dateService.parseStringToDate(this.startDate), this.dateService.parseStringToDate(this.endDate));
        this.reportService.addReport(this.reportToAdd);
        this.reportModalsService.callRefreshPage();
        this.onCloseModal();
    };
    ReportAddModal.prototype.onCloseModal = function () {
        this.addModalActions.emit({ action: "modal", params: ['close'] });
    };
    ReportAddModal.prototype.isDataValid = function () {
        return this.reportContent.length > 0 && this.dateService.isSecondDateLater(this.startDate, this.endDate);
    };
    return ReportAddModal;
}());
ReportAddModal = __decorate([
    Component({
        selector: 'coach-report-add-modal',
        templateUrl: 'report-add.modal.html',
        styleUrls: ['report.modals.scss', '../../shared/materialize-upgrades.scss']
    }),
    __metadata("design:paramtypes", [ReportModalsService, ServiceInjector, DateService])
], ReportAddModal);
export { ReportAddModal };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/reports/modals/report-add.modal.js.map