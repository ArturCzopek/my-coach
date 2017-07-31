import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";
import {UserService} from "../services/user.service";

@Injectable()
export class AdminUserGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.userService.getLoggedInUser() !== null && this.userService.isLoggedInUserAdmin()) {
      return true;
    }

    this.router.navigate([environment.client.dashboard.url]);
    return false;
  }
}
