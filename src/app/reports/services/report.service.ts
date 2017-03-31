import {ReportPreview} from "../../shared/entities/preview.entities";
import {Observable} from "rxjs/Observable";
import {Report} from "../../shared/entities/get.entities";
import {NewReport} from "../../shared/entities/add.entities";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {Inject} from "@angular/core";

export abstract class ReportService {

  private dictionaryService: DictionaryService;

  constructor(@Inject(ServiceInjector) serviceInjector: ServiceInjector) {
    this.dictionaryService = serviceInjector.getDictionaryService();
  }

  abstract getReportPreviews(): Observable<ReportPreview[]>;

  abstract getReport(reportId: number): Observable<Report>;

  abstract addReport(reportToAdd: NewReport): void;

  abstract deleteReport(reportToDelete: Report): void;

  abstract editReport(reportToEdit: Report): void;

  public getPreviewTitle(reportPreview: ReportPreview): string {
    return `${this.dictionaryService.getDictionaryValue('page.reports.card.title')} ` +
      `${reportPreview.startDate.getUTCDate() + 1} ` +
      `${this.dictionaryService.getDateDictionarySettings().monthsShort[reportPreview.startDate.getUTCMonth()]} ` +
      `${reportPreview.startDate.getUTCFullYear()} ` +
      `- ${reportPreview.endDate.getUTCDate() + 1} ` +
      `${this.dictionaryService.getDateDictionarySettings().monthsShort[reportPreview.endDate.getUTCMonth()]} ` +
      `${reportPreview.endDate.getUTCFullYear()}`;
  }
}
