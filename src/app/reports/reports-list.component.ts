import {Component, OnInit} from "@angular/core";
import {ReportPreview} from "../shared/entities/preview.entities";
import {ReportService} from "./services/report.service";
import {ServiceInjector} from "../shared/services/service.injector";
import {ReportModalsService} from "./services/report-modals.service";

@Component({
  selector: 'coach-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports.scss', '../shared/materialize-upgrades.scss']
})
export class ReportsListComponent implements OnInit {

  public isLoading: boolean;
  private reportPreviews: ReportPreview[];
  private reportService: ReportService;

  constructor(private reportModalsService: ReportModalsService, private serviceInjector: ServiceInjector) {
    this.reportService = serviceInjector.getReportService();
  }

  ngOnInit() {
    this.loadReportPreviews();
    this.reportModalsService.refreshPage.subscribe(() => this.ngOnInit());
  }

  public loadReportPreviews() {
    this.isLoading = true;
    this.reportService.getReportPreviews()
      .subscribe(
        previews => {
          this.reportPreviews = previews;
        },
        () => {
        },
        () => {
          this.isLoading = false;
        }
      );
  }

  onAddClick() {
    this.reportModalsService.callAddReport();
  }
}
