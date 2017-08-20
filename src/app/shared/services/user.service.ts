import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/first";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";
import {User} from "../entities/get.entities";
import {ActivatedRoute} from "@angular/router";

declare var window: any;

@Injectable()
export class UserService {
  private user: User = null;

  constructor(private http: Http) {
  }

  public logIn() {

    if (this.user) {
      return;
    }

    // if we want to log in user, we use received token,
    // otherwise, we check if user was logged in earlier by getting token from storage
    const token = localStorage.getItem(environment.authToken);

    // we want to log new/earlier user
    if (token && token.length > 0) {
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

  public getUserImgLink(fbId?: string, size?: string): string {
    return `${environment.facebookUrl}/${fbId == null ? this.getLoggedInUser().fbId : fbId}/picture?type=${size == null ? 'large' : size}`;
  }

  public prepareAuthOptions(): RequestOptions {
    const headers = new Headers();
    headers.append(environment.authToken, localStorage.getItem(environment.authToken));
    const options = new RequestOptions();
    options.headers = headers;
    return options;
  }

  public isLoggedInUserAdmin(): boolean {
    return this.user.role.roleName === "Admin";
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

  private handleInvalidToken() {
    localStorage.removeItem(environment.authToken);
    console.error('Invalid token');
    return Observable.throw('Invalid token');
  }

  private handleMissingToken() {
    console.error('Not found token, log in by button');
    return Observable.throw('Not found token, log in by button');
  }

  public getTokenFromRouteParams(route: ActivatedRoute): string {
    return route.snapshot.params[environment.authToken];
  }
}
