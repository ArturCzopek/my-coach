import {Component, OnInit} from "@angular/core";
import {ReportPreview} from "../shared/entities/preview.entities";
import {ReportService} from "./report.service";

@Component({
  selector: 'coach-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['reports.scss']
})
export class ReportsListComponent implements OnInit {

  private reportPreviews: ReportPreview[];
  private isLoading: boolean;
  private errorMessage: string;

  constructor(private reportService: ReportService) {

  }

  ngOnInit() {
    this.loadReportPreviews();
  }

  private loadReportPreviews() {
    this.isLoading = true;
    this.reportService.getReportPreviews()
      .subscribe(
        previews => {
          this.errorMessage = '';
          this.reportPreviews = previews;
        },
        error => {
          this.errorMessage = 'Cannot get report previews!!';
          console.log(error);
        },
        () => {
          this.isLoading = false;
        }
      );
  }
}
