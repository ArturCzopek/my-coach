var CyclePreview = (function () {
    function CyclePreview(cycleId, startDate, endDate) {
        this.cycleId = cycleId;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return CyclePreview;
}());
export { CyclePreview };
var ReportPreview = (function () {
    function ReportPreview(reportId, startDate, endDate) {
        this.reportId = reportId;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return ReportPreview;
}());
export { ReportPreview };
var WeightsPreview = (function () {
    function WeightsPreview(month, year) {
        this.month = month;
        this.year = year;
    }
    return WeightsPreview;
}());
export { WeightsPreview };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/shared/entities/preview.entities.js.map