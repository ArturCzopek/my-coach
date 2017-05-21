import {Component, OnInit} from "@angular/core";
import {UserService} from "../shared/services/user.service";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

declare var window: any;

@Component({
  selector: 'coach-login',
  template: `
    <div class="container">
      <div class="row">

        <div *ngIf="!userService.getLoggedInUser(); else goToPanel">
          <div class="s12 center" style="margin: 80px 0;">
            <h1>{{'navbar.applicationName.label' | dictionary}}</h1>
          </div>
        </div>
        <div class="row">
          <div class="s12 center" style="margin: 80px 0;">
            <a class="waves-effect waves-light btn-large social facebook" style="padding: 0 2rem;">
              {{'page.login.button.label' | dictionary}}
            </a>
          </div>
        </div>

        <ng-template #gotoPanel>
          <div class="row">
            <div class="s12 center" style="margin: 80px 0;">
              <img class="circle responsive-img" *ngIf="this.userService.getLoggedInUser()"
                   src="{{userService.getUserImgLink()}}">
              <h2>{{'page.login.hello.label' | dictionary}} {{userService.getLoggedInUser().name}}</h2>
              <a (click)="goToApp()" class="waves-effect waves-light btn-large social facebook" style="padding: 0 2rem;">
                {{'page.login.button.label' | dictionary}}
              </a>
            </div>
          </div>
        </ng-template>

      </div>
    </div>
  `
})
export class LoginComponent implements OnInit {
  constructor(public userService: UserService, public router: Router) {

  }

  ngOnInit(): void {
    if (localStorage.getItem(environment.authToken) || this.userService.getTokenFromCookie()) {
      this.userService.logIn();
    }
  }

  public loginUser() {
    window.location = `${environment.server.loginUrl}`;
  }

  public goToApp() {
    this.router.navigate([environment.client.app.url]);
  }
}
