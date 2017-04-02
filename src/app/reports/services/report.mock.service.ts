import {REPORT_PREVIEWS_LIST} from "../../shared/entities/mock-data/previews/report-previews.mock-data";
import {Observable} from "rxjs/Observable";
import {ReportPreview} from "../../shared/entities/preview.entities";
import {Report} from "../../shared/entities/get.entities";
import {REPORTS_LIST} from "../../shared/entities/mock-data/reports.mock-data";
import {ReportService} from "./report.service";
import {NewReport} from "../../shared/entities/add.entities";
import {Injectable, Injector} from "@angular/core";
import {ServiceInjector} from "../../shared/services/service.injector";

@Injectable()
export class ReportMockService extends ReportService {

  private newReportId: number = REPORTS_LIST.length + 1;

  constructor(private injector: Injector) {
    super(injector.get(ServiceInjector));
  }

  public getReportPreviews(): Observable<ReportPreview[]> {
    return Observable.create(observer => {

      // timeout is simulation of 'getting from http'
      setTimeout(() => {
        observer.next(REPORT_PREVIEWS_LIST);
      }, 500);

      setTimeout(() => {
        observer.complete();
      }, 600);
    });
  }

  public getReport(reportId: number): Observable<Report> {

    return Observable.create(observer => {

      // timeout is simulation of 'getting from http'
      setTimeout(() => {
        observer.next(REPORTS_LIST.find(report => report.reportId === reportId));
      }, 1000);

      setTimeout(() => {
        observer.complete();
      }, 1100);
    });
  }

  public addReport(reportToAdd: NewReport): void {
    const report: Report = new Report(this.newReportId, reportToAdd.content, reportToAdd.startDate, reportToAdd.endDate);
    const reportPreview: ReportPreview = new ReportPreview(this.newReportId, reportToAdd.startDate, reportToAdd.endDate);
    this.newReportId++;

    REPORTS_LIST.push(report);
    REPORT_PREVIEWS_LIST.push(reportPreview);
  }

  public deleteReport(reportToDelete: Report): void {
    const reportId = REPORTS_LIST.findIndex(report => report.reportId === reportToDelete.reportId);
    REPORTS_LIST.splice(reportId, 1);
    REPORT_PREVIEWS_LIST.splice(reportId, 1);
  }


  editReport(reportToEdit: Report): void {
    const reportId: number = REPORTS_LIST.findIndex(report => report.reportId === reportToEdit.reportId);
    REPORTS_LIST[reportId] = reportToEdit;
    REPORT_PREVIEWS_LIST[reportId].startDate = reportToEdit.startDate;
    REPORT_PREVIEWS_LIST[reportId].endDate = reportToEdit.endDate;
  }
}
