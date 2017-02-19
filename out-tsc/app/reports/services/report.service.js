import { DictionaryMockService } from "../../shared/services/dictionary.mock.service";
var ReportService = (function () {
    function ReportService() {
        // this.dictionaryService = serviceInjector.getDictionaryService();
        this.dictionaryService = new DictionaryMockService;
    }
    ReportService.prototype.getPreviewTitle = function (reportPreview) {
        return this.dictionaryService.getDictionaryValue('page.reports.card.title') + " " +
            (reportPreview.startDate.getUTCDate() + 1 + " " + this.dictionaryService.getDateDictionarySettings().monthsShort[reportPreview.startDate.getUTCMonth()] + " " + reportPreview.startDate.getUTCFullYear() + " ") +
            ("- " + (reportPreview.endDate.getUTCDate() + 1) + " " + this.dictionaryService.getDateDictionarySettings().monthsShort[reportPreview.endDate.getUTCMonth()] + " " + reportPreview.endDate.getUTCFullYear());
    };
    return ReportService;
}());
export { ReportService };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/reports/services/report.service.js.map