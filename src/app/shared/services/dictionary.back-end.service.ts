import {DictionaryService} from "./dictionary.service";
import {Injectable} from "@angular/core";

@Injectable()
export class DictionaryBackEndService extends DictionaryService {

  getDictionaryFromDb(): any {
    console.log('DictionaryBackEndService#getDictionaryFromDb not implemented yet');

    return {};
  }

  createDateDictionarySettings(): any {
    console.log('DictionaryBackEndService#createDateDictionarySettings not implemented yet');
    return {};
  }
}
