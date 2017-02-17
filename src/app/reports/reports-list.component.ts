import {Component, OnInit, EventEmitter} from "@angular/core";
import {ReportPreview} from "../shared/entities/preview.entities";
import {MaterializeAction} from "angular2-materialize";
import {Report} from "../shared/entities/get.entities";
import {ReportService} from "./services/report.service";
import {MODAL_PARAMS} from "../shared/global.values";
import {ServiceInjector} from "../shared/services/service.injector";

declare var Materialize: any;

@Component({
  selector: 'coach-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports.scss', '../shared/materialize-upgrades.scss']
})
export class ReportsListComponent implements OnInit {

  public modalParams;

  private reportPreviews: ReportPreview[];
  private isLoading: boolean;

  public errorMessage: string;
  public addModalActions = new EventEmitter<string|MaterializeAction>();
  public editModalActions = new EventEmitter<string|MaterializeAction>();
  public deleteModalActions = new EventEmitter<string|MaterializeAction>();
  public editToastActions = new EventEmitter<string|MaterializeAction>();

  public reportForModal: Report|ReportPreview;
  private reportService: ReportService;

  constructor(private serviceInjector: ServiceInjector) {
    this.reportService = serviceInjector.getReportService();
  }

  ngOnInit() {
    this.loadReportPreviews();
    this.reportForModal = null;
    this.modalParams = MODAL_PARAMS;
  }

  public loadReportPreviews() {
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
    console.log('Not implemented yet');
  }

  deleteReport() {
    console.log('Not implemented yet');
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
