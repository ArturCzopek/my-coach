import {Component, Input} from "@angular/core";
import {ReportPreview} from "../shared/entities/preview.entities";
import {Report} from "../shared/entities/get.entities";
import {ReportService} from "./services/report.service";
import {ServiceInjector} from "../shared/services/service.injector";
import {ReportModalsService} from "./services/report-modals.service";
import {BaseCardComponent} from "../shared/components/base-card.component";

@Component({
  selector: 'coach-report-card',
  templateUrl: 'report-card.component.html',
  styleUrls: ['./reports.scss', '../shared/materialize-upgrades.scss']
})
export class ReportCardComponent extends BaseCardComponent {

  @Input() reportPreview: ReportPreview;
  public report: Report;
  private reportService: ReportService;

  constructor(private reportModalsService: ReportModalsService, private serviceInjector: ServiceInjector) {
    super();
    this.reportService = serviceInjector.getReportService();
  }

  ngOnInit() {
    super.ngOnInit();
    this.report = null;
    this.previewTitle = this.reportService.getPreviewTitle(this.reportPreview);
  }

  public onReportClick() {
    this.toggleShow();

    if (this.showData) {
      if (this.report == null) {
        this.reportService.getReport(this.reportPreview.reportId)
          .subscribe(
            report => {
              this.report = report;
            },
            () => {},
            () => {
              this.isLoading = false;
            }
          );
      }
    }
  }

  public onEditClick() {
    this.reportModalsService.callEditReport(this.report, this.previewTitle);
  }

  public onDeleteClick() {
    this.reportModalsService.callDeleteReport(this.report, this.previewTitle);
  }
}
