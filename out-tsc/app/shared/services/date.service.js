var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { ServiceInjector } from "./service.injector";
var DateService = (function () {
    function DateService(serviceInjector) {
        this.serviceInjector = serviceInjector;
        this.dictionaryService = serviceInjector.getDictionaryService();
        this.configureMoment();
    }
    DateService.prototype.parseDateToString = function (dateObj) {
        var formattedDateString = moment(dateObj).format(this.getDateFormat());
        return formattedDateString;
    };
    DateService.prototype.parseStringToDate = function (dateString) {
        var formattedDateObj = moment(dateString, this.getDateFormat()).toDate();
        return formattedDateObj;
    };
    DateService.prototype.isDateValid = function (date) {
        return moment(date, this.getDateFormat()).isValid();
    };
    DateService.prototype.isSecondDateLater = function (firstDate, secondDate) {
        if (this.isDateValid(firstDate) && this.isDateValid(secondDate)) {
            var diff = moment(this.parseStringToDate(secondDate)).diff(moment(this.parseStringToDate(firstDate)));
            return diff > 0;
        }
        return false;
    };
    DateService.prototype.getDateFormat = function () {
        return this.dictionaryService.getDictionaryValue('calendar.format.momentjs');
    };
    DateService.prototype.configureMoment = function () {
        moment.updateLocale('en', {
            months: this.dictionaryService.getDateDictionarySettings().monthsFull,
            monthsShort: this.dictionaryService.getDateDictionarySettings().monthsShort
        });
    };
    return DateService;
}());
DateService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ServiceInjector])
], DateService);
export { DateService };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/shared/services/date.service.js.map