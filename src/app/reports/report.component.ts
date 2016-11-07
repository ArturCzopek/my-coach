import {Component, OnInit, Input} from "@angular/core";
import {ReportPreview} from "../shared/entities/preview.entities";
import {REPORTS_LIST} from "../shared/entities/mock-data/reports.mock-data";
import {Report} from "../shared/entities/get.entities";
import {ReportService} from "./report.service";

@Component({
  selector: 'coach-report',
  templateUrl: 'report.component.html',
  styleUrls: ['reports.scss']
})
export class ReportComponent implements OnInit {

  @Input() reportPreview: ReportPreview;
  private report: Report;
  private errorMessage: string;
  private showReport: boolean;
  private isLoading: boolean;

  private arrowImageClass: string;

  constructor(private reportService: ReportService) {
  }

  ngOnInit() {

    //false showReport because at first toggle we want to see true to load data
    this.showReport = false;
    this.isLoading = true;
    this.errorMessage = '';
    this.report = null;
    this.arrowImageClass = 'left-arrow';
  }

  private toggleShow() {
    this.showReport = !this.showReport;

    if (this.showReport) {
      this.arrowImageClass = 'down-arrow';
    } else {
      this.arrowImageClass = 'left-arrow';
    }
  }

  private onReportClick() {
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

  private isProgressBar() {
    if (this.isLoading) {
      return "loading";
    } else {
      return "";
    }
  }
}
