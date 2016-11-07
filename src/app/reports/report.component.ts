import {Component, OnInit, Input, EventEmitter} from "@angular/core";
import {ReportPreview} from "../shared/entities/preview.entities";
import {Report} from "../shared/entities/get.entities";
import {ReportService} from "./report.service";
import {MaterializeAction} from 'angular2-materialize';

declare var Materialize:any;

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
  private editModalActions = new EventEmitter<string|MaterializeAction>();
  private deleteModalActions = new EventEmitter<string|MaterializeAction>();
  private editToastActions = new EventEmitter<string|MaterializeAction>();

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

  private toggleShow() {
    this.showReport = !this.showReport;

    if (this.showReport) {
      this.arrowImageClass = 'down-arrow';
    } else {
      this.arrowImageClass = 'left-arrow';
    }
  }

  openEditModal() {

    if (this.showReport) {
      this.editModalActions.emit({action: "modal", params: ['open']});
    } else {
      Materialize.toast('Najpierw wczytaj report!', 3000);

    }
  }

  closeEditModal() {
    this.editModalActions.emit({action: "modal", params: ['close']});
  }

  openDeleteModal() {
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
}
