import {Component, OnInit, EventEmitter} from "@angular/core";
import {ReportPreview} from "../shared/entities/preview.entities";
import {ReportService} from "./report.service";
import {MaterializeAction} from "angular2-materialize";
import {Report} from "../shared/entities/get.entities";
declare var Materialize:any;

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
  private editModalActions = new EventEmitter<string|MaterializeAction>();
  private deleteModalActions = new EventEmitter<string|MaterializeAction>();
  private editToastActions = new EventEmitter<string|MaterializeAction>();
  private reportForModal: Report|ReportPreview;

  constructor(private reportService: ReportService) {

  }

  ngOnInit() {
    this.loadReportPreviews();
    this.reportForModal = null;
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

  openEditModal(report: Report) {

    this.reportForModal = report;

    if (this.reportForModal) {
      this.editModalActions.emit({action: "modal", params: ['open']});
    } else {
      Materialize.toast('Najpierw wczytaj report!', 3000);

    }
  }

  closeEditModal() {
    this.editModalActions.emit({action: "modal", params: ['close']});
  }

  openDeleteModal(report: Report) {
    this.reportForModal = report;
    this.deleteModalActions.emit({action: "modal", params: ['open']});
  }

  closeDeleteModal() {
    this.deleteModalActions.emit({action: "modal", params: ['close']});
  }

  editReport() {
    console.log('Not implemented yet')
  }

  deleteReport() {
    console.log('Not implemented yet')
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
