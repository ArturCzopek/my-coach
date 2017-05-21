import {Observable} from "rxjs/Observable";
import {ReportPreview} from "../../shared/entities/preview.entities";
import {Report} from "../../shared/entities/get.entities";
import {ReportService} from "./report.service";
import {NewReport} from "../../shared/entities/add.entities";
import {Injectable, Injector} from "@angular/core";
import {ServiceInjector} from "../../shared/services/service.injector";
import {Http, RequestOptions} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class ReportBackEndService extends ReportService {

  private reportUrl = '/report';

  constructor(private injector: Injector, private http: Http) {
    super(injector.get(ServiceInjector));
  }

  public getReportPreviews(): Observable<ReportPreview[]> {
    return this.http.get(`${environment.server.url}${this.reportUrl}/previews`).map(res => res.json());
  }

  public getReport(reportId: number): Observable<Report> {
    return this.http.get(`${environment.server.url}${this.reportUrl}/${reportId}`).map(res => res.json());
  }

  public addReport(reportToAdd: NewReport): Observable<any> {
    return this.http.post(`${environment.server.url}${this.reportUrl}/add`,  reportToAdd);
  }

  public deleteReport(reportToDelete: Report): Observable<any> {
    return this.http.delete(`${environment.server.url}${this.reportUrl}/delete`, new RequestOptions({body: reportToDelete}));
  }

  public editReport(reportToEdit: Report): Observable<any> {
    return this.http.put(`${environment.server.url}${this.reportUrl}/update`, reportToEdit);
  }
}
