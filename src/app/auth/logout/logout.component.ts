import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'coach-logout',
    templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

    constructor(
        public router: Router
    ) {}

    ngOnInit(): void {
        setTimeout(() => this.router.navigate([environment.client.loginUrl]), 3000);
    }
}
