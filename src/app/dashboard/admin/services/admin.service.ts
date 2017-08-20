import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {UserService} from "../../../shared/services/user.service";
import {User} from "../../../shared/entities/get.entities";
import {environment} from "../../../../environments/environment";

@Injectable()
export class AdminService {

  private adminUrl = "/admin";

  constructor(private userService: UserService, private http: Http) {
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get(
      `${environment.server.url}${this.adminUrl}/users`,
      this.userService.prepareAuthOptions()
    )
      .map(res => res.json());
  }

  public getAppData(): Observable<any> {
    return this.http.get(
      `${environment.server.url}${this.adminUrl}/appData`,
      this.userService.prepareAuthOptions()
    )
      .map(res => res.json());
  }

  public toggleActiveUserStatus(userId: number): Observable<any> {
    return this.http.post(
      `${environment.server.url}${this.adminUrl}/toggleActive?userId=${userId}`,
      {},
      this.userService.prepareAuthOptions()
    );
  }

  public toggleUserRole(userId: number): Observable<any> {
    return this.http.post(
      `${environment.server.url}${this.adminUrl}/toggleRole?userId=${userId}`,
      {},
      this.userService.prepareAuthOptions()
    );
  }

  public sendEmail(title: string, content: string): Observable<any> {
    return this.http.post(
      `${environment.server.url}${this.adminUrl}/email`,
      {title, content},
      this.userService.prepareAuthOptions()
    );
  }
}
