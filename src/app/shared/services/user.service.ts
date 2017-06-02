import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/first";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";
import {User} from "../entities/get.entities";

declare var window: any;

@Injectable()
export class UserService {
  private user: User = null;

  constructor(private http: Http) {
    this.logIn();
  }

  public logIn() {

    if (this.user) {
      return;
    }

    // if we want to log in user, we use received token,
    // otherwise, we check if user was logged in earlier by getting token from storage
    const token = this.getTokenFromCookie() || localStorage.getItem(environment.authToken);

    // we want to log new/earlier user
    if (token) {
      // maybe it is new token, so (re)set
      localStorage.setItem(environment.authToken, token);

      // try to log in user with token from storage
      this.getUserFromServer();
    } else {
      // No token (maybe storage was cleaned by user), check if it's on server
      this.getToken()
        .map(res => res.json())
        // no token, so user have to log in
        .catch(this.handleMissingToken)
        .first()
        .subscribe(
          token => {
            localStorage.setItem(environment.authToken, token);
            this.getUserFromServer();
          }
        );
    }
  }

  public getLoggedInUser(): User {
    return this.user;
  }

  public logOut() {
    this.clearUser();
    window.location = `${environment.server.logoutUrl}`;
  }

  public clearUser() {
    localStorage.removeItem(environment.authToken);
    this.user = null;
  }

  public getTokenFromCookie(): string {
    let token: string;
    const cookiesFromRegex = document.cookie.match(new RegExp(environment.authToken + '=([^;]+)'));

    if (cookiesFromRegex && cookiesFromRegex.length >= 2) {
      token = cookiesFromRegex[1];
      // this.removeCookie(environment.authToken);
    }

    return token;
  }

  public getUserImgLink(fbId?: string, size?: string): string {
    return `${environment.facebookUrl}/${fbId == null ? this.getLoggedInUser().fbId : fbId}/picture?type=${size == null ? 'large' : size}`;
  }

  public isLoggedInUserAdmin(): boolean {
    //TO DO GET ROLE FROM USER
    return true;
  }

  public prepareAuthOptions(): RequestOptions {
    const headers = new Headers();
    headers.append(environment.authToken, localStorage.getItem(environment.authToken));
    const options = new RequestOptions();
    options.headers = headers;
    return options;
  }

  private getUserFromServer(): any {
    this.http.get(`${environment.server.userUrl}/`, this.prepareAuthOptions())
      .map(res => res.json())
      // token is invalid
      .catch(this.handleInvalidToken)
      .first()
      .subscribe(
        user => {
          this.user = user;
        }
      );
  }

  private getToken(): Observable<any> {
    return this.http.get(`${environment.server.tokenUrl}`);
  }

  private removeCookie(cookieName: String): void {
    document.cookie = cookieName + '=; Max-Age=0';
  }

  private handleInvalidToken() {
    localStorage.removeItem(environment.authToken);
    return Observable.throw('invalid token');
  }

  private handleMissingToken() {
    return Observable.throw('Not found token, log in by button');
  }
}
