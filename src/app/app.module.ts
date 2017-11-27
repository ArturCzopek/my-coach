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
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./auth/login/login.component";
import {UserService} from "./shared/services/user.service";
import {DashboardModule} from "./dashboard/dashboard.module";
import {LogoutComponent} from "./auth/logout/logout.component";
import {LoggedInUserGuard} from "./shared/guards/logged-in-user.guard";
import {AdminUserGuard} from "./shared/guards/admin-user.guard";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

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
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  exports: [
    NotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
