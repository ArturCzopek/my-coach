import {Component, OnInit} from "@angular/core";
import {environment} from "../../environments/environment";
import {UserService} from "../shared/services/user.service";

declare var $: any;

@Component({
  selector: 'coach-header',
  template: `    
    <ul id="user-dropdown" class="dropdown-content">
      <li><a>{{'navbar.settings.label' | dictionary}}</a></li>
      <li><a (click)="userService.logOut()">{{'navbar.logout.label' | dictionary}}</a></li>
    </ul>
  <nav>
    <div class="nav-wrapper blue darken-2">
      <a href="{{dashboardUrl}}" class="brand-logo">{{'navbar.applicationName.label' | dictionary}}</a>
      <a href="{{dashboardUrl}}" data-activates="mobile-nav" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li [routerLink]="[weightsUrl]" routerLinkActive="active"><a>{{'navbar.weights.label' | dictionary}}</a></li>
        <li [routerLink]="[trainingsUrl]" routerLinkActive="active"><a>{{'navbar.trainings.label' | dictionary}}</a></li>
        <li [routerLink]="[pricesUrl]" routerLinkActive="active"><a>{{'navbar.foodPrices.label' | dictionary}}</a></li>
        <li [routerLink]="[reportsUrl]" routerLinkActive="active"><a>{{'navbar.reports.label' | dictionary}}</a></li>
        <li [routerLink]="[aboutUrl]" routerLinkActive="active"><a>{{'navbar.about.label' | dictionary}}</a></li>
        <li><a class="dropdown-button" data-activates="user-dropdown">{{userService.getLoggedInUser()?.name}}<i class="material-icons right">arrow_drop_down</i></a></li>
      </ul>
      <ul class="side-nav" id="mobile-nav">
        <h4>{{'navbar.navigation.label' | dictionary}}</h4>
        <div class="divider"></div>
        <li [routerLink]="[weightsUrl]" routerLinkActive="active"><a>{{'navbar.weights.label' | dictionary}}</a></li>
        <li [routerLink]="[trainingsUrl]" routerLinkActive="active"><a>{{'navbar.trainings.label' | dictionary}}</a></li>
        <li [routerLink]="[pricesUrl]" routerLinkActive="active"><a>{{'navbar.foodPrices.label' | dictionary}}</a></li>
        <li [routerLink]="[reportsUrl]" routerLinkActive="active"><a>{{'navbar.reports.label' | dictionary}}</a></li>
        <li [routerLink]="[aboutUrl]" routerLinkActive="active"><a>{{'navbar.about.label' | dictionary}}</a></li>
      </ul>
    </div>
  </nav>
`,
  styles: ['.side-nav h4 {color: black; padding-left: 5px;}']
})
export class HeaderComponent implements OnInit {

  public dashboardUrl = environment.client.dashboard.url
  public weightsUrl = environment.client.dashboard.weightsUrl
  public trainingsUrl = environment.client.dashboard.trainingsUrl
  public pricesUrl = environment.client.dashboard.pricesUrl
  public reportsUrl = environment.client.dashboard.reportsUrl
  public aboutUrl = environment.client.dashboard.aboutUrl

  constructor(public userService: UserService) {

  }

  ngOnInit(): void {
    $(".button-collapse").sideNav();
    $(".dropdown-button").dropdown();
  }
}
