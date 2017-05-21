import {AfterViewInit, ChangeDetectorRef, Component} from "@angular/core";

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
          <h4>{{'page.about.content.first' | dictionary}}</h4>
        </div>
        <div class="s12 center">
          <br/><br/>
          <p>{{'page.about.content.second' | dictionary}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col offset-l3 l1 m2 center">
          <a href="https://github.com/ArturCzopek/my-coach-server">
            <img src="assets/img/github-logo.png"/>
          </a>
        </div>
        <div class="col l1 m2 center">
          <a href="https://web.facebook.com/Simplecodingpl-bo-programowanie-jest-proste-1864314520520955/">
            <img src="assets/img/facebook-logo.png"/>
          </a>
        </div>
        <div class="col l1 m2 center">
          <a href="https://www.linkedin.com/in/artur-czopek-27aa05109/">
            <img src="assets/img/linkedin-logo.png"/>
          </a>
        </div>
        <div class="col l1 m2 center">
          <a href="mailto:artur@simplecoding.pl">
            <img src="assets/img/mail-logo.png"/>
          </a>
        </div>
        <div class="col l1 m2 center">
          <a href="https://stackoverflow.com/users/5705324/artur-czopek">
            <img src="assets/img/stack-overflow-logo.png"/>
          </a>
        </div>
        <div class="col l1 m2 center">
          <a href="https://twitter.com/ACzopek32">
            <img src="assets/img/twitter-logo.png"/>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`img {
    cursor: pointer;
  }`]
})
export class AboutComponent implements AfterViewInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    setTimeout(1000, () => this.changeDetectorRef.detach());
  }
}
