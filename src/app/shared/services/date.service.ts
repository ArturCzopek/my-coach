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
    const formattedDateObj: Date = moment(dateString, this.getDateFormat()).toDate();
    return formattedDateObj;
  }

  public isDateValid(date: string): boolean {
    return moment(date, this.getDateFormat()).isValid();
  }

  public isSecondDateLater(firstDate: string, secondDate: string): boolean {

    if (this.isDateValid(firstDate) && this.isDateValid(secondDate)) {
      const diff: number = moment(this.parseStringToDate(secondDate)).diff(moment(this.parseStringToDate(firstDate)));
      return diff > 0;
    } else if (this.isDateValid(firstDate)) {
      // sometimes end date is nullable, this is for 'current' date
      return true;
    }

    return false;
  }

  private getDateFormat(): string {
    return this.dictionaryService.getDictionaryValue('calendar.format.momentjs');
  }

  private configureMoment() {
    moment.updateLocale('en', {
      months: this.dictionaryService.getDateDictionarySettings().monthsFull,
      monthsShort: this.dictionaryService.getDateDictionarySettings().monthsShort
    });
  }
}
