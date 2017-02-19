import {REPORT_PREVIEWS_LIST} from "../../shared/entities/mock-data/previews/report-previews.mock-data";
import {Observable} from "rxjs";
import {ReportPreview} from "../../shared/entities/preview.entities";
import {Report} from "../../shared/entities/get.entities";
import {REPORTS_LIST} from "../../shared/entities/mock-data/reports.mock-data";
import {ReportService} from "./report.service";
import {NewReport} from "../../shared/entities/add.entities";
import {Injectable} from "@angular/core";
import {DOES_NOT_CONTAIN} from "../../shared/global.values";

@Injectable()
export class ReportMockService extends ReportService {

  private newId: number = REPORTS_LIST.length;

  public getReportPreviews(): Observable<ReportPreview[]> {
    return Observable.create(observer => {

      // timeout is simulation of 'getting from http'
      setTimeout(() => {
        observer.next(REPORT_PREVIEWS_LIST);
      }, 1000);

      setTimeout(() => {
        observer.complete();
      }, 1100);
    });
  }

  public getReport(reportId: number): Observable<Report> {

    let reportToReturn: Report;

    for (const report of REPORTS_LIST) {
      if (report.reportId === reportId) {
        reportToReturn = report;
        break;
      }
    }

    return Observable.create(observer => {

      // timeout is simulation of 'getting from http'
      setTimeout(() => {
        observer.next(reportToReturn);
      }, 1000);

      setTimeout(() => {
        observer.complete();
      }, 1100);
    });
  }


  public addReport(reportToAdd: NewReport): void {
    this.newId++;
    const reportId: number = this.newId;
    const report: Report = new Report(reportId, reportToAdd.content, reportToAdd.startDate, reportToAdd.endDate)
    const reportPreview: ReportPreview = new ReportPreview(reportId, reportToAdd.startDate, reportToAdd.endDate);
    REPORTS_LIST.push(report);
    REPORT_PREVIEWS_LIST.push(reportPreview);
  }

  public deleteReport(reportToDelete: Report): void {

    const reportIndex: number = REPORTS_LIST.indexOf(reportToDelete);
    if (reportIndex !== DOES_NOT_CONTAIN) {
      REPORTS_LIST.splice(reportIndex, 1);
    }

    for (let i = 0; i < REPORT_PREVIEWS_LIST.length; i++) {
      if (REPORT_PREVIEWS_LIST[i].reportId === reportToDelete.reportId) {
        REPORT_PREVIEWS_LIST.splice(i, 1);
        break;
      }
    }
  }


  editReport(reportToEdit: Report): void {

    const reportIndex: number = REPORTS_LIST.indexOf(reportToEdit);
    if (reportIndex !== DOES_NOT_CONTAIN) {
      REPORTS_LIST[reportIndex] = reportToEdit;
    }

    for (let i = 0; i < REPORT_PREVIEWS_LIST.length; i++) {
      if (REPORT_PREVIEWS_LIST[i].reportId === reportToEdit.reportId) {
        REPORT_PREVIEWS_LIST[i].startDate = reportToEdit.startDate;
        REPORT_PREVIEWS_LIST[i].endDate = reportToEdit.endDate;
        break;
      }
    }
  }
}
