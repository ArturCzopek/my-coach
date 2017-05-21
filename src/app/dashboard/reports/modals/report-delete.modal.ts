/* tslint:disable:component-class-suffix */
import {Component, OnInit} from "@angular/core";
import {Report} from "../../../shared/entities/get.entities";
import {ReportService} from "../services/report.service";
import {ReportModalsService} from "../services/report-modals.service";
import {ServiceInjector} from "../../../shared/services/service.injector";
import {BaseModal} from "../../../shared/components/base.modal";

declare var Materialize: any;

@Component({
  selector: 'coach-report-delete-modal',
  templateUrl: 'report-delete.modal.html',
  styleUrls: ['./report.modals.scss', '../../../shared/materialize-upgrades.scss']
})
export class ReportDeleteModal extends BaseModal implements OnInit {

  public selectedReport: Report = null;
  public modalTitle: string;

  private reportService: ReportService;

  constructor(private reportModalsService: ReportModalsService, private serviceInjector: ServiceInjector) {
    super(serviceInjector);
    this.reportService = serviceInjector.getReportService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.initialization$ = this.reportModalsService.deleteReport.subscribe(
      (data: any) => {
        this.selectedReport = data.report;
        this.modalTitle = data.modalTitle;
        this.openModal();
      }
    );
  };

  public canModalBeOpened(): boolean {
    if (!this.selectedReport) {
      Materialize.toast(this.dictionaryService.getDictionaryValue('page.reports.loadFirst.tooltip'), 3000);
      return false;
    }

    return true;
  }

  public isDataValid(): boolean {
    return true;
  }

  public onDeleteClick() {
    this.reportService.deleteReport(this.selectedReport).first()
      .subscribe(
        ok => this.reportModalsService.callRefreshPage(),
        error => console.error('error', error),
        () => this.closeModal()
      );
  }
}
