import { Subject } from "rxjs";
var WeightsModalsService = (function () {
    function WeightsModalsService() {
        this.addWeight = new Subject();
        this.editWeights = new Subject();
        this.deleteWeights = new Subject();
        this.refreshPage = new Subject();
    }
    WeightsModalsService.prototype.callAddWeight = function () {
        this.addWeight.next(null);
    };
    WeightsModalsService.prototype.callEditWeights = function (weights, modalTitle) {
        this.editWeights.next({ weights: weights, modalTitle: modalTitle });
    };
    WeightsModalsService.prototype.callDeleteWeights = function (weights, modalTitle) {
        this.deleteWeights.next({ weights: weights, modalTitle: modalTitle });
    };
    WeightsModalsService.prototype.callRefreshPage = function () {
        this.refreshPage.next(null);
    };
    return WeightsModalsService;
}());
export { WeightsModalsService };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/weights/services/weights-modals.service.js.map