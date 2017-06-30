import {Component} from "@angular/core";
import {AdminService} from "./services/admin.service";

@Component({
  selector: 'coach-admin-email',
  template: `
    <h1>Email</h1>
  `,
  styleUrls: ['./admin.scss']
})
export class AdminEmailComponent {


  constructor(private adminService: AdminService) {

  }


}
