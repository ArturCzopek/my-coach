import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ReportPreview} from "../../shared/entities/preview.entities";
import {Report} from "../../shared/entities/get.entities";
import {ReportService} from "./report.service";

@Injectable()
export class ReportBackEndService implements ReportService {

  constructor() { }

  public getReportPreviews(): Observable<ReportPreview[]> {
    console.log("ReportBackEndService#getReportPreviews not implemented yet");
    return null;
  }

  public getReport(reportId: number): Observable<Report> {
    console.log("ReportBackEndService#getReport not implemented yet");
    return null;
  }
}
