import {AfterViewInit, ChangeDetectorRef, Component} from "@angular/core";

@Component({
  selector: 'coach-not-found',
  template: `
    <div class="flex-container">
      <h1>{{'page.notFound.title' | dictionary}}</h1>
      <img class="responsive" src="assets/img/my-coach.png"/>
      <div class="flex-center-container">
        <h4>{{'page.notFound.content' | dictionary}} </h4>
        <h4><a routerLink="/"> {{'page.notFound.link' | dictionary}}</a></h4>
      </div>
    </div>`,
  styleUrls: ['app.scss']
})
export class NotFoundComponent implements AfterViewInit {

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    setTimeout(1000, () => this.cdr.detach());
  }
}
