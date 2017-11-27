import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { UserService } from '../services/user.service';

@Injectable()
export class LoggedInUserGuard implements CanActivateChild {

    constructor(
        private router: Router,
        private userService: UserService
    ) {}

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this.userService.isLoggedInUser()) {
            return true;
        }

        this.router.navigate([environment.client.loginUrl]);
        return false;
    }
}
