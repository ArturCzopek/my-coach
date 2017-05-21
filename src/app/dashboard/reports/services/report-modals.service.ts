import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Report} from "../../../shared/entities/get.entities";

@Injectable()
export class ReportModalsService {

  addReport: Subject<any> = new Subject<any>();
  editReport: Subject<any> = new Subject<any>();
  deleteReport: Subject<any> = new Subject<any>();
  refreshPage: Subject<any> = new Subject<any>();

  public callAddReport() {
    this.addReport.next(null);
  }

  public callEditReport(report: Report, modalTitle: string) {
    this.editReport.next({report: report, modalTitle: modalTitle});
  }

  public callDeleteReport(report: Report, modalTitle: string) {
    this.deleteReport.next({report: report, modalTitle: modalTitle});
  }

  public callRefreshPage() {
    this.refreshPage.next(null);
  }
}
