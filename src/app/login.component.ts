import {Component, OnInit} from "@angular/core";
import {UserService} from "./shared/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "./../environments/environment";

declare var window: any;

@Component({
  selector: 'coach-login',
  template: `
    <div class="container">
      <div class="row">
        <div class="s12 center">
          <h1>{{'navbar.applicationName.label' | dictionary}}</h1>
        </div>
      </div>
      <div *ngIf="!userService.getLoggedInUser(); else goToPanel" class="row">
        <div class="s12 center log-in-data">
          <a (click)="loginUser()" class="waves-effect waves-light btn-large social facebook log-in-button">
            {{'page.login.button.label' | dictionary}}
          </a>
        </div>
      </div>

      <ng-template #goToPanel>
        <div class="row">
          <div class="s12 center log-in-data">
            <img class="circle responsive-img" *ngIf="userService.getLoggedInUser()"
                 src="{{userService.getUserImgLink()}}"/>
            <h4>{{'page.login.hello.label' | dictionary}} {{userService.getLoggedInUser().name}}</h4>

            <a (click)="goToApp()" class="waves-effect waves-light btn-large social facebook log-in-button">
              {{'page.login.goToApp.button.label' | dictionary}}
            </a>
          </div>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .log-in-data {
      margin: 15vh 0;
    }

    .log-in-button {
      padding: 0 1vw;
    }
  `
  ]
})
export class LoginComponent implements OnInit {
  constructor(public userService: UserService, public router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    if (this.userService.getTokenFromRouteParams(this.route) && this.userService.getTokenFromRouteParams(this.route).length > 0) {
      this.logInByRouteParam(this.userService.getTokenFromRouteParams(this.route));
    } else if (localStorage.getItem(environment.authToken) && localStorage.getItem(environment.authToken).length > 0) {
      this.userService.logIn();
    }
  }

  public loginUser() {
    window.location = `${environment.server.loginUrl}`;
  }

  public goToApp() {
    this.router.navigate([environment.client.dashboard.url]);
  }

  private logInByRouteParam(tokenFromRouteParams: string) {
    if (tokenFromRouteParams.length > 0) {
      localStorage.setItem(environment.authToken, tokenFromRouteParams);
      this.router.navigate([environment.client.loginUrl]);
    }
  }
}
