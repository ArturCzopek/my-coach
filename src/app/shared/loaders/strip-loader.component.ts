import {Component} from "@angular/core";

@Component({
  selector: 'coach-strip-loader',
  template: `
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
  `,
  styleUrls: ['../materialize-upgrades.scss']
})
export class StripLoaderComponent {

}
