import {Component, OnInit} from "@angular/core";
import {User} from "../../shared/entities/get.entities";
import {AdminService} from "./services/admin.service";

@Component({
  selector: 'coach-admin-users',
  template: `
    <div class="admin-users-list">
      <h1>{{'page.admin.users.title' | dictionary}}</h1>
      <div class="admin-users-list-content">
        <coach-admin-user-card *ngFor="let user of users; trackBy: trackByUserId"
                               [user]="user"></coach-admin-user-card>
      </div>
    </div>
  `,
  styleUrls: ['./admin.scss']
})
export class AdminUsersComponent implements OnInit {

  public users = [];

  constructor(private adminService: AdminService) {

  }

  ngOnInit(): void {
    this.adminService.getAllUsers()
      .subscribe(
        users => this.users = users,
        error => console.error(error)
      )
  }

  public trackByUserId(index, user: User) {
    return user.userId;
  }
}
