import {AfterViewInit, ChangeDetectorRef, Component} from "@angular/core";

@Component({
  selector: 'coach-about',
  template: `
    <div class="flex-container">
      <h1>{{'page.about.title' | dictionary}}</h1>

      <h4>{{'page.about.content.first' | dictionary}}</h4>

      <p>{{'page.about.content.second' | dictionary}}</p>

      <div class="images">
        <a href="https://github.com/ArturCzopek/my-coach-server">
          <img src="assets/img/github-logo.png"/>
        </a>
        <a href="https://web.facebook.com/Simplecodingpl-bo-programowanie-jest-proste-1864314520520955/">
          <img src="assets/img/facebook-logo.png"/>
        </a>

        <a href="https://www.linkedin.com/in/artur-czopek-27aa05109/">
          <img src="assets/img/linkedin-logo.png"/>
        </a>

        <a href="mailto:artur@simplecoding.pl">
          <img src="assets/img/mail-logo.png"/>
        </a>

        <a href="https://stackoverflow.com/users/5705324/artur-czopek">
          <img src="assets/img/stack-overflow-logo.png"/>
        </a>

        <a href="https://twitter.com/ACzopek32">
          <img src="assets/img/twitter-logo.png"/>
        </a>
      </div>
    </div>
  `,
  styleUrls: ['../app.scss']
})
export class AboutComponent implements AfterViewInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    setTimeout(1000, () => this.changeDetectorRef.detach());
  }
}
