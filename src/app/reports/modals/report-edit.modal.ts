/* tslint:disable:component-class-suffix */
import {OnInit, Component, EventEmitter, AfterViewChecked} from "@angular/core";
import {Report} from "../../shared/entities/get.entities";
import {MaterializeAction} from "angular2-materialize";
import {ReportService} from "../services/report.service";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {ReportModalsService} from "../services/report-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {MODAL_PARAMS} from "../../shared/global.values";
import {DateService} from "../../shared/services/date.service";

declare var Materialize: any;

@Component({
  selector: 'coach-report-edit-modal',
  templateUrl: 'report-edit.modal.html',
  styleUrls: ['report.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ReportEditModal implements OnInit, AfterViewChecked {

  public selectedReport: Report = null;
  public editModalActions = new EventEmitter<string|MaterializeAction>();
  public modalParams: any;
  public datePickerParams: any;
  public modalTitle: string;

  private reportContent: string = '';
  private startDate: string = '';
  private endDate: string = '';

  private reportService: ReportService;
  private dictionaryService: DictionaryService;

  constructor(private reportModalsService: ReportModalsService, private serviceInjector: ServiceInjector, private dateService: DateService) {
    this.reportService = serviceInjector.getReportService();
    this.dictionaryService = serviceInjector.getDictionaryService();
  }

  ngOnInit(): void {
    this.modalParams = MODAL_PARAMS;
    this.datePickerParams = this.dictionaryService.getDateDictionarySettings();

    this.reportModalsService.editReport.subscribe(
      (data: any) => {
        this.selectedReport = data.report;
        if (this.selectedReport) {
          this.reportContent = this.selectedReport.content;
          this.startDate = this.dateService.parseDateToString(this.selectedReport.startDate);
          this.endDate = this.dateService.parseDateToString(this.selectedReport.endDate);
        }
        this.modalTitle = data.modalTitle;
        this.openEditModal();
      }
    );
  }

  ngAfterViewChecked(): void {
    if (typeof Materialize.updateTextFields === "function") {
      Materialize.updateTextFields();
    }
  }

  public openEditModal() {
    if (this.selectedReport) {
      this.editModalActions.emit({action: "modal", params: ['open']});
    } else {
      Materialize.toast(this.dictionaryService.getDictionaryValue('page.reports.loadFirst.tooltip'), 3000);
    }
  }

  public onEditClick() {
    this.selectedReport.startDate = this.dateService.parseStringToDate(this.startDate);
    this.selectedReport.endDate = this.dateService.parseStringToDate(this.endDate);
    this.reportContent = this.reportContent;
    this.reportService.editReport(this.selectedReport);
    this.reportModalsService.callRefreshPage();
    this.onCloseModal();
  }

  public onCloseModal() {
    this.editModalActions.emit({action: "modal", params: ['close']});
  }

  public isDataValid(): boolean {
    return this.reportContent.length > 0 && this.dateService.isSecondDateLater(this.startDate, this.endDate);
  }
}
