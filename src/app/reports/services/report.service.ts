import {ReportPreview} from "../../shared/entities/preview.entities";
import {Observable} from "rxjs";
import {Report} from "../../shared/entities/get.entities";

export interface ReportService {

  getReportPreviews(): Observable<ReportPreview[]>;

  getReport(reportId: number): Observable<Report>;
}
