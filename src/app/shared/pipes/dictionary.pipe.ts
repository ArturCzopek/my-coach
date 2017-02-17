import {PipeTransform, Pipe} from "@angular/core";
import {DictionaryService} from "../services/dictionary.service";
import {ServiceInjector} from "../services/service.injector";

@Pipe({name: 'dictionary'})
export class DictionaryPipe implements PipeTransform {

  private dictionaryService: DictionaryService;

  constructor(serviceInjector: ServiceInjector) {
    this.dictionaryService = serviceInjector.getDictionaryService();
  }

  transform(key: string): string {
    return this.dictionaryService.getDictionaryValue(key);
  }
}
