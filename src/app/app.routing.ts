import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found.component";
import {LoginComponent} from "./login.component";
import {LogoutComponent} from "./logout.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'login/:oauth_token', component: LoginComponent},
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRouting {
}
