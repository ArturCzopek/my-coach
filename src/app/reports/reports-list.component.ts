import {Component, OnInit} from "@angular/core";
import {REPORT_PREVIEWS_LISTS} from "../shared/entities/mock-data/previews/ReportPreviews";
import {ReportPreview} from "../shared/entities/PreviewEntites";

@Component({
  selector: 'coach-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsListComponent implements OnInit {

  private showReports: boolean[];

  constructor() { }

  ngOnInit() {
    this.showReports = [ false, true, false ];
  }

  getReportPreviews(): ReportPreview[] {
    return REPORT_PREVIEWS_LISTS;
  }


  showReport(index: number): boolean {
    return this.showReports[index];
  }

}
