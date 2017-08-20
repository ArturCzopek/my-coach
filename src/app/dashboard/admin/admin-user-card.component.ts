import {Component, Input, OnInit} from "@angular/core";
import {User} from "../../shared/entities/get.entities";
import {UserService} from "../../shared/services/user.service";
import {AdminService} from "./services/admin.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {DictionaryService} from "../../shared/services/dictionary.service";

declare var Materialize: any;

@Component({
  selector: 'coach-admin-user-card',
  template: `
    <div class="admin-user-card" *ngIf="user && user?.userId !== userService.getLoggedInUserId()">
      <img class="responsive-img circle" src="{{imgSrc}}"/>
      <p class="username">{{user.name}}</p>
      <form>
        <p>
          <input type="checkbox" class="filled-in"
                 id="admin_{{user.userId}}" name="admin_{{user.userId}}" [ngModel]="isAdmin"
                 (ngModelChange)="toggleUserRole()"/>
          <label for="admin_{{user.userId}}">{{'page.admin.users.admin.label' | dictionary}}</label>
        </p>
        <p>
          <input type="checkbox" class="filled-in"
                 id="active_{{user.userId}}" name="active_{{user.userId}}" [ngModel]="isActive"
                 (ngModelChange)="toggleActiveStatus()"/>
          <label for="active_{{user.userId}}">{{'page.admin.users.active.label' | dictionary}}</label>
        </p>
      </form>
    </div>
  `,
  styleUrls: ['./admin.scss']
})
export class AdminUserCardComponent implements OnInit {
  @Input() user: User;
  public imgSrc = "";
  public isAdmin = false;
  public isActive = true;
  private dictionaryService: DictionaryService;

  constructor(public userService: UserService, public adminService: AdminService, private serviceInjector: ServiceInjector) {
    this.dictionaryService = this.serviceInjector.getDictionaryService();
  }


  ngOnInit(): void {
    this.imgSrc = this.userService.getUserImgLink(this.user.fbId, "small");
    this.isAdmin = this.user.role.roleName === "Admin";
    this.isActive = this.user.active;
  }

  public toggleActiveStatus() {
    this.adminService.toggleActiveUserStatus(this.user.userId)
      .first()
      .subscribe(
        ok => {
          this.isActive = !this.isActive;
          Materialize.toast(this.dictionaryService.getDictionaryValue("page.admin.change.success.tooltip"), 3000);
        },
        error => console.error(error)
      )
  }

  public toggleUserRole() {
    this.adminService.toggleUserRole(this.user.userId)
      .first()
      .subscribe(
        ok => {
          this.isAdmin = !this.isAdmin;
          Materialize.toast(this.dictionaryService.getDictionaryValue("page.admin.change.success.tooltip"), 3000);
        },
        error => console.error(error)
      )
  }
}
