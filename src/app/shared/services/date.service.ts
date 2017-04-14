import {Injectable, Injector} from "@angular/core";
import {ServiceInjector} from "./service.injector";
import {DictionaryService} from "./dictionary.service";
declare var moment: any;

@Injectable()
export class DateService {

  private dictionaryService: DictionaryService;

  constructor(private injector: Injector) {
    this.dictionaryService = injector.get(ServiceInjector).getDictionaryService();
    this.configureMoment();
  }

  public parseDateToString(dateObj: Date): string {
    const formattedDateString: string = moment(dateObj).format(this.getDateFormat());
    return formattedDateString;
  }

  public parseStringToDate(dateString: string): Date {
    const formattedDateObj: Date = this.updateTimeForPassedDate(moment(dateString, this.getDateFormat()).toDate());
    return formattedDateObj;
  }

  // temporary workaround for problem with zone times (different days sometimes...)
  public updateTimeForPassedDate(dateObj: Date): Date {
    dateObj.setHours(12);
    return dateObj;
  }

  public isDateValid(date: string): boolean {
    return moment(date, this.getDateFormat()).isValid();
  }

  public isSecondDateLater(firstDate: string, secondDate: string): boolean {

    if (this.isDateValid(firstDate) && this.isDateValid(secondDate)) {
      const diff: number = moment(this.parseStringToDate(secondDate)).diff(moment(this.parseStringToDate(firstDate)));
      return diff > 0;
    } else if (this.isDateValid(firstDate) && secondDate == null) {
      // sometimes end date is nullable, this is for 'current' date
      return true;
    }

    return false;
  }

  public getCurrentDateAsString(): string {
    return this.parseDateToString(new Date());
  }

  private getDateFormat(): string {
    return this.dictionaryService.getDictionaryValue('calendar.format.momentjs');
  }

  private getDateFromServerFormat(): string {
    return this.dictionaryService.getDictionaryValue('calendar.format.fromServer');
  }

  private configureMoment() {
    moment.updateLocale('en', {
      months: this.dictionaryService.getDateDictionarySettings().monthsFull,
      monthsShort: this.dictionaryService.getDateDictionarySettings().monthsShort
    });
  }

  parseStringFromServerToDate(dateObj: string): Date {
    const formattedDateObj: Date = this.updateTimeForPassedDate(moment(dateObj, this.getDateFromServerFormat()).toDate());
    return formattedDateObj;
  }
}
