import {Component} from "@angular/core";

@Component({
  selector: 'coach-not-found',
  template: `
    <div class="container">
      <div class="row">
        <div class="s12 center" style="margin: 60px 0;">
          <h1>{{'page.notFound.title' | dictionary}}</h1>
        </div>
      </div>
      <div class="row"style="margin-bottom: 100px;">
        <div class="col s12 center">
          <img src="assets/img/my-coach.png"/>
        </div>
      </div>
      <div class="row">
        <div class="s12 center">
          <h4>{{'page.notFound.content' | dictionary}} </h4>
          <h4><a routerLink="/"> {{'page.notFound.link' | dictionary}}</a></h4>
        </div>
      </div>
    </div>`,
  styles: [`a:hover { text-decoration: underline; }`]
})
export class NotFoundComponent {
}
