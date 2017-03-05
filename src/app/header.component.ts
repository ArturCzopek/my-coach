import {Component, OnInit} from "@angular/core";

declare var $: any;

@Component({
  selector: 'coach-header',
  template: `
  <nav>
    <div class="nav-wrapper blue darken-2">
      <a href="#" class="brand-logo">{{'navbar.applicationName.label' | dictionary}}</a>
      <a href="#" data-activates="mobile-nav" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li [routerLink]="['/weights']" routerLinkActive="active"><a>{{'navbar.weights.label' | dictionary}}</a></li>
        <li [routerLink]="['/trainings']" routerLinkActive="active"><a>{{'navbar.trainings.label' | dictionary}}</a></li>
        <li [routerLink]="['/prices']" routerLinkActive="active"><a>{{'navbar.foodPrices.label' | dictionary}}</a></li>
        <li [routerLink]="['/reports']" routerLinkActive="active"><a>{{'navbar.reports.label' | dictionary}}</a></li>
        <li [routerLink]="['/about']" routerLinkActive="active"><a>{{'navbar.about.label' | dictionary}}</a></li>
      </ul>
      <ul class="side-nav" id="mobile-nav">
        <h4>{{'navbar.navigation.label' | dictionary}}</h4>
        <div class="divider"></div>
        <li [routerLink]="['/weights']" routerLinkActive="active"><a>{{'navbar.weights.label' | dictionary}}</a></li>
        <li [routerLink]="['/trainings']" routerLinkActive="active"><a>{{'navbar.trainings.label' | dictionary}}</a></li>
        <li [routerLink]="['/prices']" routerLinkActive="active"><a>{{'navbar.foodPrices.label' | dictionary}}</a></li>
        <li [routerLink]="['/reports']" routerLinkActive="active"><a>{{'navbar.reports.label' | dictionary}}</a></li>
        <li [routerLink]="['/about']" routerLinkActive="active"><a>{{'navbar.about.label' | dictionary}}</a></li>
      </ul>
    </div>
  </nav>
`,
  styles: ['.side-nav h4 {color: black; padding-left: 5px;}']

})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    $(".button-collapse").sideNav();
  }
}
