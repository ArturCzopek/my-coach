import { Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ReportPreview } from '../../../shared/entities/preview.entities';
import { Report } from '../../../shared/entities/get.entities';
import { NewReport } from '../../../shared/entities/add.entities';
import { DictionaryService } from '../../../shared/services/dictionary.service';
import { ServiceInjector } from '../../../shared/services/service.injector';
import { DateService } from '../../../shared/services/date.service';

export abstract class ReportService {

    private dictionaryService: DictionaryService;
    private dateService: DateService;

    constructor(
        @Inject(ServiceInjector) protected serviceInjector: ServiceInjector
    ) {
        this.dictionaryService = serviceInjector.getDictionaryService();
        this.dateService = serviceInjector.getDateService();
    }

    abstract getReportPreviews(): Observable<ReportPreview[]>;

    abstract getReport(reportId: number): Observable<Report>;

    abstract addReport(reportToAdd: NewReport): Observable<any>;

    abstract deleteReport(reportToDelete: Report): Observable<any>;

    abstract editReport(reportToEdit: Report): Observable<any>;

    public getPreviewTitle(reportPreview: ReportPreview): string {
        return `${this.dictionaryService.getDictionaryValue('page.reports.card.title')} ` +
            `${reportPreview.startDate.getUTCDate()} ` +
            `${this.dictionaryService.getDateDictionarySettings().monthsShort[reportPreview.startDate.getUTCMonth()]} ` +
            `${reportPreview.startDate.getUTCFullYear()} ` +
            `- ${reportPreview.endDate.getUTCDate()} ` +
            `${this.dictionaryService.getDateDictionarySettings().monthsShort[reportPreview.endDate.getUTCMonth()]} ` +
            `${reportPreview.endDate.getUTCFullYear()}`;
    }

    public parsePreviewsFromServer(reportPreviews: ReportPreview[]): ReportPreview[] {
        return reportPreviews.map(reportPreview => {
            if (typeof reportPreview.startDate === 'string') {
                reportPreview.startDate = this.dateService.parseStringFromServerToDate(reportPreview.startDate);
            }

            if (typeof reportPreview.endDate === 'string') {
                reportPreview.endDate = this.dateService.parseStringFromServerToDate(reportPreview.endDate);
            }

            return reportPreview;
        });
    }

    parseFromServer(report: Report): Report {
        if (typeof report.startDate === 'string') {
            report.startDate = this.dateService.parseStringFromServerToDate(report.startDate);
        }

        if (typeof report.endDate === 'string') {
            report.endDate = this.dateService.parseStringFromServerToDate(report.endDate);
        }

        return report;
    }
}
