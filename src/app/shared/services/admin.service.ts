import {Injectable} from "@angular/core";
import {UserService} from "./user.service";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";
import {User} from "../entities/get.entities";

@Injectable()
export class AdminService {

  private adminUrl = "/admin";

  constructor(private userService: UserService, private http: Http) {

  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get(`${environment.server.url}${this.adminUrl}/users`, this.userService.prepareAuthOptions()).map(res => res.json());
  }

  public toggleActiveUserStatus(userId: number): Observable<any> {
    return this.http.post(`${environment.server.url}${this.adminUrl}/toggleActive?userId=${userId}`, {}, this.userService.prepareAuthOptions());
  }
}
