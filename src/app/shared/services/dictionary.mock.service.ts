import {DictionaryService} from "./dictionary.service";
import {Injectable} from "@angular/core";

@Injectable()
export class DictionaryMockService extends DictionaryService {

  getDictionaryFromDb(): any {
    return {
      'page.weights.modal.add.title': 'Add weight'
    };
  }

  createDateDictionarySettings(): any {
    console.log('DictionaryMockService#createDateDictionarySettings not implemented yet');
    return {};
  }
}
