import {AfterViewInit, ChangeDetectorRef, Component} from "@angular/core";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'coach-settings',
  template: `
    <div class="container">
      <div class="row">
        <div class="col s12 center user-image">
          <img class="circle responsive-img" *ngIf="userService.getLoggedInUser()"
               src="{{userService.getUserImgLink()}}"/>
          <h2>{{userService.getLoggedInUser().name}}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col s6 center">
          <p>{{'page.settings.language.label' | dictionary}}</p>
        </div>
        <div class="input-field col s6">
          <select class="browser-default">
            <option value="pl" selected>Polski</option>
            <option value="eng">Angielski</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col s6 center">
          <p>{{'page.settings.weightmeasure.label' | dictionary}}</p>
        </div>
        <div class="input-field col s6 center">
          <select class="browser-default">
            <option value="kg" selected>Kilogramy</option>
            <option value="ft">Funty</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col s6 center">
          <p>{{'page.settings.currency.label' | dictionary}}</p>
        </div>
        <div class="input-field col s6 center">
          <input value="currency" id="currenty" type="text">
        </div>
      </div>
      <div class="row">
        <div class="col s12 center">
          <button class="btn waves-effect waves-light blue" type="submit" name="action">Zapisz
            <i class="material-icons right">done</i>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .user-image {
      margin-top: 5vh;
    }

    .row > s6 {
      margin: 5vmax;
    }
  `]
})
export class SettingsComponent implements AfterViewInit {

  constructor(private changeDetectorRef: ChangeDetectorRef, public userService: UserService) {
  }

  ngAfterViewInit() {
    setTimeout(1000, () => this.changeDetectorRef.detach());
  }
}
