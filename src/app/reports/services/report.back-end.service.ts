import {Observable} from "rxjs/Observable";
import {ReportPreview} from "../../shared/entities/preview.entities";
import {Report} from "../../shared/entities/get.entities";
import {ReportService} from "./report.service";
import {NewReport} from "../../shared/entities/add.entities";
import {Injectable, Injector} from "@angular/core";
import {ServiceInjector} from "../../shared/services/service.injector";

@Injectable()
export class ReportBackEndService extends ReportService {

  constructor(private injector: Injector) {
    super(injector.get(ServiceInjector));
  }

  public getReportPreviews(): Observable<ReportPreview[]> {
    console.log("ReportBackEndService#getReportPreviews not implemented yet");
    return null;
  }

  public getReport(reportId: number): Observable<Report> {
    console.log("ReportBackEndService#getReport not implemented yet");
    return null;
  }


  addReport(reportToAdd: NewReport): void {
    console.log("ReportBackEndService#addReport not implemented yet");
    return null;
  }

  deleteReport(reportToDelete: Report): void {
    console.log("ReportBackEndService#deleteReport not implemented yet");
    return null;
  }

  editReport(reportToEdit: Report): void {
    console.log("ReportBackEndService#editReport not implemented yet");
    return null;
  }
}
