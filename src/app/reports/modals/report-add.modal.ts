/* tslint:disable:component-class-suffix */
import {Component, OnInit} from "@angular/core";
import {ReportService} from "../services/report.service";
import {NewReport} from "../../shared/entities/add.entities";
import {ReportModalsService} from "../services/report-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {DateService} from "../../shared/services/date.service";
import {BaseModal} from "../../shared/components/base.modal";

@Component({
  selector: 'coach-report-add-modal',
  templateUrl: 'report-add.modal.html',
  styleUrls: ['./report.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ReportAddModal extends BaseModal implements OnInit {

  public reportContent = '';
  public startDate = '';
  public endDate = '';

  public reportToAdd: NewReport;

  private reportService: ReportService;

  constructor(private reportModalsService: ReportModalsService, private serviceInjector: ServiceInjector,
              private dateService: DateService) {
    super(serviceInjector);
    this.reportService = serviceInjector.getReportService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.reportModalsService.addReport.subscribe(
      () => {
        this.openModal();
      }
    );
  }

  public initDataBeforeOpenModal() {
    this.reportContent = '';
    this.startDate = '';
    this.endDate = '';
  }

  public isDataValid(): boolean {
    return this.reportContent.length > 0 && this.dateService.isSecondDateLater(this.startDate, this.endDate);
  }

  public onAddClick() {
    this.reportToAdd = new NewReport(this.reportContent, this.dateService.parseStringToDate(this.startDate),
      this.dateService.parseStringToDate(this.endDate));

    this.reportService.addReport(this.reportToAdd);
    this.reportModalsService.callRefreshPage();
    this.closeModal();
  }
}
