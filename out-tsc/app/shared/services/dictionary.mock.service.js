var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DictionaryService } from "./dictionary.service";
import { Injectable } from "@angular/core";
var DictionaryMockService = (function (_super) {
    __extends(DictionaryMockService, _super);
    function DictionaryMockService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Application for dev purposes is in english, but for date picker we have different rule. Mainly only for test
    // if we can really modify calendar values
    DictionaryMockService.prototype.getDictionaryFromDb = function () {
        return {
            'page.weights.modal.add.title': 'Add weight',
            'calendar.nextDay.label': 'Następny',
            'calendar.prevDay.label': 'Poprzedni',
            'calendar.monthSelect.label': 'Wybierz miesiąc',
            'calendar.yearSelect.label': 'Wybierz rok',
            'calendar.today.label': 'Dzisiaj',
            'calendar.clear.label': 'Czyść',
            'calendar.close.label': 'Wyjdź',
            'calendar.month.jan.full': 'Styczeń',
            'calendar.month.feb.full': 'Luty',
            'calendar.month.mar.full': 'Marzec',
            'calendar.month.apr.full': 'Kwiecień',
            'calendar.month.may.full': 'Maj',
            'calendar.month.jun.full': 'Czerwiec',
            'calendar.month.jul.full': 'Lipiec',
            'calendar.month.aug.full': 'Sierpień',
            'calendar.month.sep.full': 'Wrzesień',
            'calendar.month.oct.full': 'Październik',
            'calendar.month.nov.full': 'Listopad',
            'calendar.month.dec.full': 'Grudzień',
            'calendar.month.jan.short': 'Sty',
            'calendar.month.feb.short': 'Lut',
            'calendar.month.mar.short': 'Mar',
            'calendar.month.apr.short': 'Kwi',
            'calendar.month.may.short': 'Maj',
            'calendar.month.jun.short': 'Cze',
            'calendar.month.jul.short': 'Lip',
            'calendar.month.aug.short': 'Sie',
            'calendar.month.sep.short': 'Wrz',
            'calendar.month.oct.short': 'Paź',
            'calendar.month.nov.short': 'Lis',
            'calendar.month.dec.short': 'Gru',
            'calendar.day.mon.full': 'Poniedziałek',
            'calendar.day.tue.full': 'Wtorek',
            'calendar.day.wen.full': 'Środa',
            'calendar.day.thu.full': 'Czwartek',
            'calendar.day.fri.full': 'Piątek',
            'calendar.day.sat.full': 'Sobota',
            'calendar.day.sun.full': 'Niedziela',
            'calendar.day.mon.short': 'Pn',
            'calendar.day.tue.short': 'Wt',
            'calendar.day.wen.short': 'Śr',
            'calendar.day.thu.short': 'Czw',
            'calendar.day.fri.short': 'Pt',
            'calendar.day.sat.short': 'Sb',
            'calendar.day.sun.short': 'Ndz',
            'calendar.day.mon.letter': 'P',
            'calendar.day.tue.letter': 'W',
            'calendar.day.wen.letter': 'Ś',
            'calendar.day.thu.letter': 'C',
            'calendar.day.fri.letter': 'P',
            'calendar.day.sat.letter': 'S',
            'calendar.day.sun.letter': 'N',
            'calendar.day': 'Dzień',
            'calendar.format': 'dd mmm yyyy',
            'calendar.format.momentjs': 'DD MMM YYYY'
        };
    };
    return DictionaryMockService;
}(DictionaryService));
DictionaryMockService = __decorate([
    Injectable()
], DictionaryMockService);
export { DictionaryMockService };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/shared/services/dictionary.mock.service.js.map