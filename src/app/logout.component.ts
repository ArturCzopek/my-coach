import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {environment} from "./../environments/environment";


@Component({
  selector: 'coach-logout',
  template: `
    <div class="container">
      <div class="row">
        <div class="s12 center">
          <h1>{{'navbar.applicationName.label' | dictionary}}</h1>
        </div>
      </div>
      <div  class="row">
        <div class="s12 center" style="margin: 80px 0;">
          <h4>{{'page.logout.info' | dictionary}}</h4>
        </div>
      </div>
    </div>
  `
})
export class LogoutComponent implements OnInit {

  private loginUrl = environment.client.loginUrl

  constructor(public router: Router) {

  }

  ngOnInit() {
    setTimeout(() => this.router.navigate([this.loginUrl]), 3000);
  }
}
