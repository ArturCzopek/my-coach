import {Component} from "@angular/core";

@Component({
  selector: 'coach-login',
  template: `
    <div class="container">
      <div class="row">
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
    </div>
  `
})
export class LoginComponent {

}
