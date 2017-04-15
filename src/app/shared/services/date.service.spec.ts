import {DateService} from "./date.service";
import {Injector} from "@angular/core";
import {DictionaryMockService} from "./dictionary.mock.service";

describe('DateService', () => {

  const fakeServiceInjector = {getDictionaryService: () => new DictionaryMockService()};
  const fakeInjector = {get: (ServiceInjector) => fakeServiceInjector};

  const dateService = new DateService(fakeInjector as Injector);

  it('#parseDateToString should return correct parsed date object to string (19th April 2017)', () => {
    const dateToParse = new Date(2017, 3, 19);
    const expectedParsedDate = '19 Kwi 2017';
    expect(dateService.parseDateToString(dateToParse)).toBe(expectedParsedDate);
  });

  it('#parseDateToString should return correct parsed date object to string (1st January 2017)', () => {
    const dateToParse = new Date(2017, 0, 1);
    const expectedParsedDate = '01 Sty 2017';
    expect(dateService.parseDateToString(dateToParse)).toBe(expectedParsedDate);
  });

  it('#parseStringToDate should return correct parsed date object to string (19th April 2017)', () => {
    const stringToParse = '19 Kwi 2017';
    const expectedDate = new Date(2017, 3, 19);
    const parsedString = dateService.parseStringToDate(stringToParse);

    expect(parsedString.getDay()).toBe(expectedDate.getDay());
    expect(parsedString.getMonth()).toBe(expectedDate.getMonth());
    expect(parsedString.getFullYear()).toBe(expectedDate.getFullYear());
  });

  it('#parseStringToDate should return correct parsed date object to string (1st January 2017)', () => {
    const stringToParse = '01 Sty 2017';
    const expectedDate = new Date(2017, 0, 1);
    const parsedString = dateService.parseStringToDate(stringToParse);

    expect(parsedString.getDay()).toBe(expectedDate.getDay());
    expect(parsedString.getMonth()).toBe(expectedDate.getMonth());
    expect(parsedString.getFullYear()).toBe(expectedDate.getFullYear());
  });

  it('#isDateValid should return is valid date for 01 Sty 2017 string', () => {
    const stringToParse = '01 Sty 2017';
    expect(dateService.isDateValid(stringToParse)).toBe(true);
  });

  it('#isDateValid should return is valid date for 19 Kwi 2017 string', () => {
    const stringToParse = '19 Kwi 2017';
    expect(dateService.isDateValid(stringToParse)).toBe(true);
  });

  it('#isDateValid should return is valid date for 10 Paz 2017 string', () => {
    const stringToParse = '10 Paz 2017';
    expect(dateService.isDateValid(stringToParse)).toBe(true);
  });

  it('#isDateValid should return is invalid date for 10 Paź 2017 string', () => {
    const stringToParse = '10 Paź 2017';
    expect(dateService.isDateValid(stringToParse)).toBe(false);
  });

  it('#isSecondDateLater should return that 19 Kwi 2017 is later than 01 Sty 2017', () => {
    const firstDate = '01 Sty 2017';
    const secondDate = '19 Kwi 2017';
    expect(dateService.isSecondDateLater(firstDate, secondDate)).toBe(true);
  });

  it('#isSecondDateLater should return that 19 Kwi 2016 is not later than 19 Kwi 2017', () => {
    const firstDate = '19 Kwi 2017';
    const secondDate = '19 Kwi 2016';
    expect(dateService.isSecondDateLater(firstDate, secondDate)).toBe(false);
  });

  it('#isSecondDateLater should return that current date passed as null is later than 19 Kwi 2017', () => {
    const firstDate = '19 Kwi 2017';
    const secondDate = null;
    expect(dateService.isSecondDateLater(firstDate, secondDate)).toBe(true);
  });

  it('#isSecondDateLater should return that second date in wrong format is not later than 19 Kwi 2017', () => {
    const firstDate = '19 Kwi 2017';
    const secondDate = '199 Kwi 199';
    expect(dateService.isSecondDateLater(firstDate, secondDate)).toBe(false);
  });

});
