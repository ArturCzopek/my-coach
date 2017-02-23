import {Component} from "@angular/core";

@Component({
  selector: 'coach-header',
  template: `
<div class="navbar-fixed">
  <nav>
    <div class="nav-wrapper blue darken-2">
      <a href="#" class="brand-logo">{{'navbar.applicationName.label' | dictionary}}</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li [routerLink]="['/weights']" routerLinkActive="active"><a>{{'navbar.weights.label' | dictionary}}</a></li>
        <li [routerLink]="['/trainings']" routerLinkActive="active"><a>{{'navbar.trainings.label' | dictionary}}</a></li>
        <li [routerLink]="['/prices']" routerLinkActive="active"><a>{{'navbar.foodPrices.label' | dictionary}}</a></li>
        <li [routerLink]="['/reports']" routerLinkActive="active"><a>{{'navbar.reports.label' | dictionary}}</a></li>
        <li [routerLink]="['/about']" routerLinkActive="active"><a>{{'navbar.about.label' | dictionary}}</a></li>
      </ul>
    </div>
  </nav>
</div>
`,
  styleUrls: []
})
export class HeaderComponent {
}