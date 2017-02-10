import {Injectable} from "@angular/core";
import {REPORT_PREVIEWS_LIST} from "../../shared/entities/mock-data/previews/report-previews.mock-data";
import {Observable} from "rxjs";
import {ReportPreview} from "../../shared/entities/preview.entities";
import {Report} from "../../shared/entities/get.entities";
import {REPORTS_LIST} from "../../shared/entities/mock-data/reports.mock-data";
import {ReportService} from "./report.service";

@Injectable()
export class ReportMockService implements ReportService {

  constructor() { }

  public getReportPreviews(): Observable<ReportPreview[]> {
    return Observable.create(observer => {

        //timeout is simulation of 'getting from http'
        setTimeout(() => {
          observer.next(REPORT_PREVIEWS_LIST);
        }, 1000);

        setTimeout(() => {
          observer.complete();
        }, 1100);
    });
  }

  public getReport(reportId: number): Observable<Report> {
    return Observable.create(observer => {

        //timeout is simulation of 'getting from http'
        setTimeout(() => {
          observer.next(REPORTS_LIST[reportId]);
        }, 1000);

        setTimeout(() => {
          observer.complete();
        }, 1100);
    })
  }
}
