import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UserService } from '../../shared/services/user.service';

declare var $: any;

@Component({
    selector: 'coach-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public dashboardUrl = environment.client.dashboard.url;
    public weightsUrl = environment.client.dashboard.weightsUrl;
    public trainingsUrl = environment.client.dashboard.trainingsUrl;
    public pricesUrl = environment.client.dashboard.pricesUrl;
    public reportsUrl = environment.client.dashboard.reportsUrl;
    public aboutUrl = environment.client.dashboard.aboutUrl;
    public settingsUrl = environment.client.dashboard.settingsUrl;
    public adminUrl = environment.client.dashboard.adminUrl;

    constructor(
        public userService: UserService
    ) {}

    ngOnInit(): void {
        $('.button-collapse').sideNav();
        $('.dropdown-button').dropdown();
    }
}
