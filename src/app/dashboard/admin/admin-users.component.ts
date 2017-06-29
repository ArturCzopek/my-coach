import {Component} from "@angular/core";
import {User} from "../../shared/entities/get.entities";

@Component({
  selector: 'coach-admin-users',
  template: `
    <div class="admin-users-list">
      <h1>Users</h1>
      <div class="admin-users-list-content">
        <coach-admin-user-card *ngFor="let user of mockUsers; trackBy: trackByUserId"
                               [user]="user"></coach-admin-user-card>
      </div>
    </div>
  `,
  styleUrls: ['./admin.scss']
})
export class AdminUsersComponent {

  public mockUsers: User[] = [
    new User(1, "123", "Artur Czopek", null, null),
    new User(2, "123554", "test", null, null),
    new User(3, "3420", "test", null, null),
    new User(4, "1235", "bla bla", null, null),
    new User(5, "1245345", "heheheheh", null, null),
    new User(6, "234043", "heoitoejrir", null, null),
  ];

  public trackByUserId(index, user: User) {
    return user.userId;
  }
}
