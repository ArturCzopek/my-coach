/* tslint:disable:component-class-suffix */
import {Component} from "@angular/core";
import {Report} from "../../shared/entities/get.entities";
import {ReportService} from "../services/report.service";
import {ReportModalsService} from "../services/report-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {DateService} from "../../shared/services/date.service";
import {BaseModal} from "../../shared/components/base.modal";

declare var Materialize: any;

@Component({
  selector: 'coach-report-edit-modal',
  templateUrl: 'report-edit.modal.html',
  styleUrls: ['report.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ReportEditModal extends BaseModal {

  public selectedReport: Report = null;
  public modalTitle: string;
  public reportContent: string = '';
  public startDate: string = '';
  public endDate: string = '';

  private reportService: ReportService;

  constructor(private reportModalsService: ReportModalsService, private serviceInjector: ServiceInjector,
              private dateService: DateService) {
    super(serviceInjector);
    this.reportService = serviceInjector.getReportService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.reportModalsService.editReport.subscribe(
      (data: any) => {
        this.selectedReport = data.report;
        this.modalTitle = data.modalTitle;
        this.openModal();
      }
    );
  }

  public initDataBeforeOpenModal() {
    this.reportContent = this.selectedReport.content;
    this.startDate = this.dateService.parseDateToString(this.selectedReport.startDate);
    this.endDate = this.dateService.parseDateToString(this.selectedReport.endDate);
  }

  public canModalBeOpened(): boolean {
    if (!this.selectedReport) {
      Materialize.toast(this.dictionaryService.getDictionaryValue('page.reports.loadFirst.tooltip'), 3000);
      return false;
    }

    return true;
  }

  public isDataValid(): boolean {
    return this.reportContent.length > 0 && this.dateService.isSecondDateLater(this.startDate, this.endDate);
  }

  public onEditClick() {
    this.selectedReport.startDate = this.dateService.parseStringToDate(this.startDate);
    this.selectedReport.endDate = this.dateService.parseStringToDate(this.endDate);
    this.selectedReport.content = this.reportContent;
    this.reportService.editReport(this.selectedReport);
    this.reportModalsService.callRefreshPage();
    this.closeModal();
  }
}
