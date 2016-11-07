import {Component, OnInit, Input} from "@angular/core";
import {ReportPreview} from "../shared/entities/preview.entities";
import {REPORTS_LIST} from "../shared/entities/mock-data/reports.mock-data";
import {Report} from "../shared/entities/get.entities";

@Component({
  selector: 'coach-report',
  templateUrl: 'report.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportComponent implements OnInit {

  @Input() reportPreview: ReportPreview;
  private showReport;
  private isLoadedReport;
  private report: Report;
  private arrowImageClass: string;

  constructor() {
  }

  ngOnInit() {
    this.showReport = false;
    this.isLoadedReport = false;
    this.report = null;
    this.arrowImageClass = 'left-arrow';
  }

  getReportForPreview() {
    this.report = REPORTS_LIST[this.reportPreview.reportId];
    this.isLoadedReport = true;
  }

  toggleShow() {
    this.showReport = !this.showReport;

    if (this.showReport) {
      this.arrowImageClass = 'down-arrow';
    } else {
      this.arrowImageClass = 'left-arrow';
    }
  }

  onReportClick() {
    this.toggleShow();

    if (this.showReport) {
      if (this.report == null) {
        this.loadReport();
      }
    }
  }

  loadReport() {
    this.sleep(5000).then(() => {
      console.log("timeout");
      this.getReportForPreview();
    });
  }

  sleep(time) {
    //noinspection TypeScriptUnresolvedFunction
    return new Promise((resolve) => setTimeout(resolve, time));
  }

}
