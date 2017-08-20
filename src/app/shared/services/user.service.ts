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

    const token = this.getTokenFromLocalStorage();

    // user is not logged in but we can do it with token which is in his browser
    if (!this.isLoggedInUser() && token) {
      this.getUserFromServer();           // try to log in user with token from storage
    }
  }

  public logOut() {
    this.clearUser();
    window.location = `${environment.server.logoutUrl}`;
  }

  public getTokenFromRouteParams(route: ActivatedRoute): string {
    return route.snapshot.params[environment.authToken];
  }

  public getTokenFromLocalStorage(): string {
    return localStorage.getItem(environment.authToken);
  }

  public setToken(token: string) {
    return localStorage.setItem(environment.authToken, token);
  }

  public isLoggedInUser(): boolean {
    return !!this.user;
  }

  public getLoggedInUserName(): string {
    return (this.isLoggedInUser()) ? this.user.name : "-";
  }

  public getLoggedInUserId(): number {
    return (this.isLoggedInUser()) ? this.user.userId : -1;
  }

  private clearUser() {
    this.clearToken();
    this.user = null;
  }

  public getUserImgLink(fbId?: string, size?: string): string {
    return `${environment.facebookUrl}/${fbId == null ? this.user.fbId : fbId}/picture?type=${size == null ? 'large' : size}`;
  }

  public prepareAuthOptions(): RequestOptions {
    const headers = new Headers();
    headers.append(environment.authToken, this.getTokenFromLocalStorage());
    const options = new RequestOptions();
    options.headers = headers;
    return options;
  }

  public isLoggedInUserAdmin(): boolean {
    return this.isLoggedInUser() && this.user.role.roleName.toUpperCase() === "ADMIN";
  }

  private getUserFromServer(): any {
    this.http.get(`${environment.server.userUrl}/`, this.prepareAuthOptions())
      .map(res => res.json())
      .catch(this.handleInvalidToken)      // token is invalid
      .first()
      .subscribe(user => this.user = user);
  }

  private handleInvalidToken() {
    this.clearToken();
    return Observable.throw('Invalid token');
  }

  private clearToken() {
    localStorage.removeItem(environment.authToken);
  }
}
