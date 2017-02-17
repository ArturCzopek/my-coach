import {DictionaryService} from "./dictionary.service";
import {Injectable} from "@angular/core";

@Injectable()
export class DictionaryBackEndService extends DictionaryService {

  getDictionaryFromDb(): any {
    console.log('DictionaryBackEndService#getDictionaryFromDb not implemented yet');

    return {};
  }
}
