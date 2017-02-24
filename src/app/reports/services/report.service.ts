import {ReportPreview} from "../../shared/entities/preview.entities";
import {Observable} from "rxjs";
import {Report} from "../../shared/entities/get.entities";
import {NewReport} from "../../shared/entities/add.entities";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {DictionaryMockService} from "../../shared/services/dictionary.mock.service";

export abstract class ReportService {

  private dictionaryService: DictionaryService;

  constructor() {
    // this.dictionaryService = serviceInjector.getDictionaryService();
    this.dictionaryService = new DictionaryMockService;
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
