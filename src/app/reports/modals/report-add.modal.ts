/* tslint:disable:component-class-suffix */
import {Component, OnInit, EventEmitter} from "@angular/core";
import {ReportService} from "../services/report.service";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {MaterializeAction} from "angular2-materialize";
import {NewReport} from "../../shared/entities/add.entities";
import {ReportModalsService} from "../services/report-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {MODAL_PARAMS} from "../../shared/global.values";
import {DateService} from "../../shared/services/date.service";

@Component({
  selector: 'coach-report-add-modal',
  templateUrl: 'report-add.modal.html',
  styleUrls: ['report.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ReportAddModal implements OnInit {

  private reportService: ReportService;
  private dictionaryService: DictionaryService;

  public addModalActions = new EventEmitter<string|MaterializeAction>();
  public modalParams: any;
  public datePickerParams: any;

  public reportContent: string;
  public startDate: string;
  public endDate: string;

  public reportToAdd: NewReport;

  constructor(private reportModalsService: ReportModalsService, private serviceInjector: ServiceInjector,
              private dateService: DateService) {
    this.reportService = serviceInjector.getReportService();
    this.dictionaryService = serviceInjector.getDictionaryService();
    this.reportContent  = '';
    this.startDate = '';
    this.endDate = '';
  }

  ngOnInit(): void {
    this.modalParams = MODAL_PARAMS;
    this.datePickerParams = this.dictionaryService.getDateDictionarySettings();

    this.reportModalsService.addReport.subscribe(
      () => {
        this.openReportModal();
      }
    );
  }

  public openReportModal() {
    this.reportContent = '';
    this.startDate = '';
    this.endDate = '';
    this.addModalActions.emit({action: "modal", params: ['open']});
  }

  public onAddClick() {
    this.reportToAdd = new NewReport(this.reportContent, this.dateService.parseStringToDate(this.startDate),
                        this.dateService.parseStringToDate(this.endDate));
    this.reportService.addReport(this.reportToAdd);
    this.reportModalsService.callRefreshPage();
    this.onCloseModal();
  }

  public onCloseModal() {
    this.addModalActions.emit({action: "modal", params: ['close']});
  }

  public isDataValid(): boolean {
    return this.reportContent.length > 0 && this.dateService.isSecondDateLater(this.startDate, this.endDate);
  }
}
