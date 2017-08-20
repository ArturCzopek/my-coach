import {DictionaryPipe} from "./dictionary.pipe";
import {DictionaryService} from "../services/dictionary.service";
import {Observable} from "rxjs/Observable";
import {ServiceInjector} from "../services/service.injector";
import {Injector} from "@angular/core";

class MockDictionaryService extends DictionaryService {

  protected dictionary = {
    'page.label.title': 'Test title',
    'page.label.subtitle': 'Another subtitle',
  };

  getDictionaryFromDb(): Observable<any> {
    return null;
  }
}

class MockServiceInjector extends ServiceInjector {

  constructor(injector: Injector) {
    super(injector);
  };

  public getDictionaryService(): DictionaryService {
    return new MockDictionaryService()
  }
}


describe('Dictionary Pipe', () => {

  const pipe = new DictionaryPipe(new MockServiceInjector(null));

  it("Should transform 'page.label.title' to 'Test title' from dictionary", () => {
    expect(pipe.transform('page.label.title')).toBe('Test title');
  });

  it("Should transform 'page.label.subtitle' to 'Another subtitle' from dictionary", () => {
    expect(pipe.transform('page.label.subtitle')).toBe('Another subtitle');
  });

  it("Should transform 'page.label.not-found' to 'label.not-found' based on missing data in dictionary", () => {
    expect(pipe.transform('page.label.not-found')).toBe('label.not-found');
  });

  it("Should transform 'hello' to 'hello' based on missing data in dictionary", () => {
    expect(pipe.transform('hello')).toBe('hello');
  });
});
