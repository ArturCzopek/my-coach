import {Component} from "@angular/core";

@Component({
  selector: 'coach-admin',
  template: `
    <p>I'm an admin!</p>
    <coach-admin-users></coach-admin-users>
  `
})
export class AdminComponent {

}
