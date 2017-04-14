import {Injectable} from "@angular/core";
import {ServiceInjector} from "./shared/services/service.injector";
import {DictionaryService} from "./shared/services/dictionary.service";

@Injectable()
export class ConfigService {

  private dictionaryService: DictionaryService;

  constructor(private serviceInjector: ServiceInjector) {
    this.dictionaryService = this.serviceInjector.getDictionaryService();
  }

  public loadConfiguration() {
    return new Promise((resolve) => {
      this.dictionaryService.getDictionaryFromDb().subscribe(
        dictionaryEntries => {
          this.dictionaryService.loadDictionary(dictionaryEntries);
          resolve(true);
        },
        error => {
          console.error(error);
          resolve(error);
        }
      )
    });
  }
}
