import {ReportPreview} from "../../shared/entities/preview.entities";
import {Observable} from "rxjs";
import {Report} from "../../shared/entities/get.entities";

export abstract class ReportService {

  abstract getReportPreviews(): Observable<ReportPreview[]>;

  abstract getReport(reportId: number): Observable<Report>;
}
