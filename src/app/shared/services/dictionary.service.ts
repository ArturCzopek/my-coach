export abstract class DictionaryService {

  protected dictionary: any = null;
  protected dateDictionarySettings: any = null;

  constructor() {
    this.loadDictionary();
  }

  public getDictionaryValue(key: string): string {
    if (this.dictionary == null) {
      this.dictionary = this.getDictionaryFromDb();
    }

    return this.dictionary[key] || this.getFormattedKey(key);
  }

  public getDateDictionarySettings(): any {
    return this.dateDictionarySettings;
  }

  private createDateDictionarySettings(): any {
    return {
      labelMonthNext: this.getDictionaryValue('calendar.nextDay.label'),
      labelMonthPrev: this.getDictionaryValue('calendar.prevDay.label'),
      labelMonthSelect: this.getDictionaryValue('calendar.monthSelect.label'),
      labelYearSelect: this.getDictionaryValue('calendar.yearSelect.label'),
      monthsFull: [
        this.getDictionaryValue('calendar.month.jan.full'),
        this.getDictionaryValue('calendar.month.feb.full'),
        this.getDictionaryValue('calendar.month.mar.full'),
        this.getDictionaryValue('calendar.month.apr.full'),
        this.getDictionaryValue('calendar.month.may.full'),
        this.getDictionaryValue('calendar.month.jun.full'),
        this.getDictionaryValue('calendar.month.jul.full'),
        this.getDictionaryValue('calendar.month.aug.full'),
        this.getDictionaryValue('calendar.month.sep.full'),
        this.getDictionaryValue('calendar.month.oct.full'),
        this.getDictionaryValue('calendar.month.nov.full'),
        this.getDictionaryValue('calendar.month.dec.full')
      ],
      monthsShort: [
        this.getDictionaryValue('calendar.month.jan.short'),
        this.getDictionaryValue('calendar.month.feb.short'),
        this.getDictionaryValue('calendar.month.mar.short'),
        this.getDictionaryValue('calendar.month.apr.short'),
        this.getDictionaryValue('calendar.month.may.short'),
        this.getDictionaryValue('calendar.month.jun.short'),
        this.getDictionaryValue('calendar.month.jul.short'),
        this.getDictionaryValue('calendar.month.aug.short'),
        this.getDictionaryValue('calendar.month.sep.short'),
        this.getDictionaryValue('calendar.month.oct.short'),
        this.getDictionaryValue('calendar.month.nov.short'),
        this.getDictionaryValue('calendar.month.dec.short')
      ],
      weekdaysFull: [
        this.getDictionaryValue('calendar.day.sun.full'),
        this.getDictionaryValue('calendar.day.mon.full'),
        this.getDictionaryValue('calendar.day.tue.full'),
        this.getDictionaryValue('calendar.day.wen.full'),
        this.getDictionaryValue('calendar.day.thu.full'),
        this.getDictionaryValue('calendar.day.fri.full'),
        this.getDictionaryValue('calendar.day.sat.full')
      ],
      weekdaysShort: [
        this.getDictionaryValue('calendar.day.sun.short'),
        this.getDictionaryValue('calendar.day.mon.short'),
        this.getDictionaryValue('calendar.day.tue.short'),
        this.getDictionaryValue('calendar.day.wen.short'),
        this.getDictionaryValue('calendar.day.thu.short'),
        this.getDictionaryValue('calendar.day.fri.short'),
        this.getDictionaryValue('calendar.day.sat.short')
      ],
      weekdaysLetter: [
        this.getDictionaryValue('calendar.day.sun.letter'),
        this.getDictionaryValue('calendar.day.mon.letter'),
        this.getDictionaryValue('calendar.day.tue.letter'),
        this.getDictionaryValue('calendar.day.wen.letter'),
        this.getDictionaryValue('calendar.day.thu.letter'),
        this.getDictionaryValue('calendar.day.fri.letter'),
        this.getDictionaryValue('calendar.day.sat.letter')
      ],
      today: this.getDictionaryValue('calendar.today.label'),
      clear: this.getDictionaryValue('calendar.clear.label'),
      close: this.getDictionaryValue('calendar.close.label'),
      format: this.getDictionaryValue('calendar.format'),
      max: true
    };
  }

  private loadDictionary(): void {
    this.dictionary = this.getDictionaryFromDb();
    this.dateDictionarySettings = this.createDateDictionarySettings();
  }

  private getFormattedKey(key: string): string {
    const stack = key.split(".");
    const last: string = stack.pop();
    const first: string = stack.pop();

    return `${first}.${last}`;
  }

  abstract getDictionaryFromDb(): any;
}
