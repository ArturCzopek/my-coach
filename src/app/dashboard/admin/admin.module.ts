import {AdminComponent} from "./admin.component";
import {AdminUsersComponent} from "./admin-users.component";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {AdminUserCardComponent} from "./admin-user-card.component";

@NgModule({
  declarations: [
    AdminComponent,
    AdminUsersComponent,
    AdminUserCardComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
  exports: [
    AdminComponent
  ]
})
export class AdminModule {
}
