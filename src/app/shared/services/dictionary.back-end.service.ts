import {DictionaryService} from "./dictionary.service";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DictionaryBackEndService extends DictionaryService {

  constructor(private http: Http) {
    super();
  }

  public getDictionaryFromDb(): Observable<any> {
    return this.http.get(`${environment.server.url}/dictionary/1`).map(res => res.json());
  }
}
