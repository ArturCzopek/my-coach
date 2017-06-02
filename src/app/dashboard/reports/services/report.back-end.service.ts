import {Observable} from "rxjs/Observable";
import {ReportPreview} from "../../../shared/entities/preview.entities";
import {Report} from "../../../shared/entities/get.entities";
import {ReportService} from "./report.service";
import {NewReport} from "../../../shared/entities/add.entities";
import {Injectable, Injector} from "@angular/core";
import {ServiceInjector} from "../../../shared/services/service.injector";
import {Http} from "@angular/http";
import {environment} from "../../../../environments/environment";
import {UserService} from "../../../shared/services/user.service";

@Injectable()
export class ReportBackEndService extends ReportService {

  private reportUrl = '/report';

  constructor(private injector: Injector, private http: Http, private userService: UserService) {
    super(injector.get(ServiceInjector));
  }

  public getReportPreviews(): Observable<ReportPreview[]> {
    return this.http.get(`${environment.server.url}${this.reportUrl}/previews`, this.userService.prepareAuthOptions()).map(res => res.json());
  }

  public getReport(reportId: number): Observable<Report> {
    return this.http.get(`${environment.server.url}${this.reportUrl}/${reportId}`, this.userService.prepareAuthOptions()).map(res => res.json());
  }

  public addReport(reportToAdd: NewReport): Observable<any> {
    return this.http.post(`${environment.server.url}${this.reportUrl}/add`, reportToAdd, this.userService.prepareAuthOptions());
  }

  public deleteReport(reportToDelete: Report): Observable<any> {
    let options = this.userService.prepareAuthOptions();
    options.body = reportToDelete;
    return this.http.delete(`${environment.server.url}${this.reportUrl}/delete`, options);
  }

  public editReport(reportToEdit: Report): Observable<any> {
    return this.http.put(`${environment.server.url}${this.reportUrl}/update`, reportToEdit, this.userService.prepareAuthOptions());
  }
}
