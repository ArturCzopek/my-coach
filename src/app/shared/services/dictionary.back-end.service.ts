import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { DictionaryService } from './dictionary.service';
import { environment } from '../../../environments/environment';
import { UserService } from './user.service';

@Injectable()
export class DictionaryBackEndService extends DictionaryService {

    constructor(
        private http: Http,
        private userService: UserService
    ) {
        super();
    }

    public getDictionaryFromDb(): Observable<any> {
        return this.http.get(`${environment.server.url}/dictionary/`, this.userService.prepareAuthOptions()).map(res => res.json());
    }
}
