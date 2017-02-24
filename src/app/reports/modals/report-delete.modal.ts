/* tslint:disable:component-class-suffix */
import {OnInit, Component, EventEmitter} from "@angular/core";
import {Report} from "../../shared/entities/get.entities";
import {MaterializeAction} from "angular2-materialize";
import {ReportService} from "../services/report.service";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {ReportModalsService} from "../services/report-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {MODAL_PARAMS} from "../../shared/global.values";

declare var Materialize: any;

@Component({
  selector: 'coach-report-delete-modal',
  templateUrl: 'report-delete.modal.html',
  styleUrls: ['report.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ReportDeleteModal implements OnInit {

  public selectedReport: Report = null;
  public deleteModalActions = new EventEmitter<string|MaterializeAction>();
  public modalParams: any;
  public modalTitle: string;

  private reportService: ReportService;
  private dictionaryService: DictionaryService;

  constructor(private reportModalsService: ReportModalsService, private serviceInjector: ServiceInjector) {
    this.reportService = serviceInjector.getReportService();
    this.dictionaryService = serviceInjector.getDictionaryService();
  }

  ngOnInit(): void {
    this.modalParams = MODAL_PARAMS;

    this.reportModalsService.deleteReport.subscribe(
      (data: any) => {
        this.selectedReport = data.report;
        this.modalTitle = data.modalTitle;
        this.openDeleteModal();
      }
    );
  };

  public openDeleteModal() {
    if (this.selectedReport) {
      this.deleteModalActions.emit({action: "modal", params: ['open']});
    } else {
      Materialize.toast(this.dictionaryService.getDictionaryValue('page.reports.loadFirst.tooltip'), 3000);
    }
  }

  public onDeleteClick() {
    this.reportService.deleteReport(this.selectedReport);
    this.reportModalsService.callRefreshPage();
    this.onCloseModal();
  }

  public onCloseModal() {
    this.deleteModalActions.emit({action: "modal", params: ['close']});
  }
}
