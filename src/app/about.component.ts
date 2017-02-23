import {Component} from "@angular/core";

@Component({
  selector: 'coach-about',
  template: `
      <div class="container">
        <div class="row">
          <div class="s12 center" style="margin: 80px 0;">
            <h1>{{'page.about.title' | dictionary}}</h1>
          </div>
        </div>
        <div class="row" style="margin-bottom: 100px;">
          <div class="s12 center">
            <h4>{{'page.about.content' | dictionary}}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col s4 center">
            <img src="assets/img/github.png"/>
          </div>
          <div class="col s4 center">
            <img src="assets/img/github.png"/>
          </div>
          <div class="col s4 center">
            <img src="assets/img/github.png"/>
          </div>
        </div>
      </div>
`
})
export class AboutComponent {

}
