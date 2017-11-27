import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../shared/services/user.service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'coach-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        public userService: UserService,
        public router: Router,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        const tokenFromRouteParams = this.userService.getTokenFromRouteParams(this.route);
        const tokenFromLocalStorage = this.userService.getTokenFromLocalStorage();

        if (tokenFromRouteParams && tokenFromRouteParams.length > 0) {
            this.logInByRouteParam(tokenFromRouteParams);
        } else if (tokenFromLocalStorage && tokenFromLocalStorage.length > 0) {
            this.userService.logIn();
        }
    }

    public loginUser(): void {
        this.location.go(environment.server.loginUrl);
    }

    public goToApp(): void {
        this.router.navigate([environment.client.dashboard.url]);
    }

    private logInByRouteParam(tokenFromRouteParams: string): void {
        if (tokenFromRouteParams.length > 0) {
            this.userService.setToken(tokenFromRouteParams);
            this.router.navigate([environment.client.loginUrl]);
        }
    }
}
