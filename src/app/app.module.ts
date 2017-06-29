import {BrowserModule} from "@angular/platform-browser";
import {APP_INITIALIZER, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AppRouting} from "./app.routing";
import {ServiceInjector} from "./shared/services/service.injector";
import {DictionaryMockService} from "./shared/services/dictionary.mock.service";
import {DictionaryBackEndService} from "./shared/services/dictionary.back-end.service";
import {SharedModule} from "./shared/shared.module";
import {DateService} from "./shared/services/date.service";
import {ConfigService} from "./config.service";
import {NotFoundComponent} from "./not-found.component";
import {LoginComponent} from "./login.component";
import {UserService} from "./shared/services/user.service";
import {DashboardModule} from "./dashboard/dashboard.module";
import {LogoutComponent} from "./logout.component";
import {LoggedInUserGuard} from "./shared/guards/logged-in-user.guard";
import {AdminUserGuard} from "./shared/guards/admin-user.guard";
import {AdminService} from "./shared/services/admin.service";

export function loadInitialConfiguration(config: ConfigService) {
  return () => config.loadConfiguration();
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardModule,
    SharedModule,
    AppRouting
  ],
  providers: [
    AdminService,
    UserService,
    ServiceInjector,
    DateService,
    DictionaryMockService,
    DictionaryBackEndService,
    LoggedInUserGuard,
    AdminUserGuard,
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadInitialConfiguration,
      deps: [ConfigService],
      multi: true
    }
  ],
  exports: [
    NotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
