import {Component, OnInit, EventEmitter} from "@angular/core";
import {ReportPreview} from "../shared/entities/preview.entities";
import {ReportService} from "./report.service";
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'coach-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['reports.scss']
})
export class ReportsListComponent implements OnInit {

  private reportPreviews: ReportPreview[];
  private isLoading: boolean;
  private errorMessage: string;
  private addModalActions = new EventEmitter<string|MaterializeAction>();

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

  openAddModal() {
    this.addModalActions.emit({action: "modal", params: ['open']});
  }

  closeAddModal() {
    this.addModalActions.emit({action: "modal", params: ['close']});
  }

  addReport() {
    console.log('Not implemented yet');
  }
}
