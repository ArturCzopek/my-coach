import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {ReportPreview} from "../shared/entities/preview.entities";
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

  @Output() editReport = new EventEmitter();
  @Output() deleteReport = new EventEmitter();

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

  onReportClick() {
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

  getLoadingStyle() {
    if (this.isLoading) {
      return "loading";
    } else {
      return "";
    }
  }

  onEditClick() {
    console.log("emit: " + this.report);
    this.editReport.emit(this.report);
  }

  onDeleteClick() {
    this.deleteReport.emit(this.reportPreview);
  }

  private toggleShow() {
    this.showReport = !this.showReport;

    if (this.showReport) {
      this.arrowImageClass = 'down-arrow';
    } else {
      this.arrowImageClass = 'left-arrow';
    }
  }


}
