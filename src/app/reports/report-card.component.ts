import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {ReportPreview} from "../shared/entities/preview.entities";
import {Report} from "../shared/entities/get.entities";
import {ReportService} from "./services/report.service";
import {ServiceInjector} from "../shared/services/service.injector";

@Component({
  selector: 'coach-report-card',
  templateUrl: 'report-card.component.html',
  styleUrls: ['./reports.scss', '../shared/materialize-upgrades.scss']
})
export class ReportCardComponent implements OnInit {

  @Input() reportPreview: ReportPreview;
  public report: Report;
  public errorMessage: string;
  public showReport: boolean;
  public isLoading: boolean;

  @Output() editReport = new EventEmitter();
  @Output() deleteReport = new EventEmitter();

  public arrowImageClass: string;

  private reportService: ReportService;

  constructor(public serviceInjector: ServiceInjector) {
    this.reportService = serviceInjector.getReportService();
  }

  ngOnInit() {
    // false showReport because at first toggle we want to see true to load data
    this.showReport = false;
    this.isLoading = true;
    this.errorMessage = '';
    this.report = null;
    this.arrowImageClass = 'left-arrow';
  }

  public onReportClick() {
    this.toggleShow();

    if (this.showReport) {
      if (this.report == null) {
        this.reportService.getReport(this.reportPreview.reportId)
          .subscribe(
            report => {
              this.errorMessage = '';
              this.report = report;
            },
            error => {
              this.errorMessage = 'Cannot load report!';
              console.log(error);
            },
            () => {
              this.isLoading = false;
            }
          );
      }
    }
  }

  public getLoadingStyle() {
    if (this.isLoading) {
      return "loading";
    } else {
      return "";
    }
  }

  onEditClick() {
    this.editReport.emit(this.report);
  }

  onDeleteClick() {
    this.deleteReport.emit(this.reportPreview);
  }

  public toggleShow() {
    this.showReport = !this.showReport;

    if (this.showReport) {
      this.arrowImageClass = 'down-arrow';
    } else {
      this.arrowImageClass = 'left-arrow';
    }
  }
}
