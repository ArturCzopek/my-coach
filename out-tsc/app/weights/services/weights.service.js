var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject } from "@angular/core";
import { ServiceInjector } from "../../shared/services/service.injector";
var WeightsService = (function () {
    function WeightsService(serviceInjector) {
        this.dictionaryService = serviceInjector.getDictionaryService();
    }
    WeightsService.prototype.getPreviewTitle = function (weightsPreview) {
        return this.dictionaryService.getDateDictionarySettings().monthsFull[weightsPreview.month - 1] + " " + weightsPreview.year + "r.";
    };
    WeightsService.prototype.formatDaysToDisplayingValuesFromWeights = function (weights) {
        var days = this.getAllDays(weights);
        var formattedDays = this.formatDaysToDisplayingValues(days);
        return formattedDays;
    };
    WeightsService.prototype.formatDaysToDisplayingValues = function (days) {
        var _this = this;
        var formattedDays = [];
        days.forEach(function (day) {
            formattedDays.push(_this.formatDay(day));
        });
        return formattedDays;
    };
    WeightsService.prototype.formatDay = function (day) {
        if (day > 0 && day < 10) {
            return this.dictionaryService.getDictionaryValue('calendar.day') + " 0" + day;
        }
        else {
            return this.dictionaryService.getDictionaryValue('calendar.day') + " " + day;
        }
    };
    return WeightsService;
}());
WeightsService = __decorate([
    __param(0, Inject(ServiceInjector)),
    __metadata("design:paramtypes", [ServiceInjector])
], WeightsService);
export { WeightsService };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/weights/services/weights.service.js.map