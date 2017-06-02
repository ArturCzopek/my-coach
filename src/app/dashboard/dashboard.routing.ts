import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {WeightsListComponent} from "../dashboard/weights/weights-list.component";
import {PricesListComponent} from "../dashboard/prices/prices-list.component";
import {ReportsListComponent} from "../dashboard/reports/reports-list.component";
import {CyclesListComponent} from "../dashboard/trainings/cycles-list.component";
import {AboutComponent} from "../dashboard/about.component";
import {NgModule} from "@angular/core";
import {LoggedInUserGuard} from "../shared/guards/logged-in-user.guard";
import {SettingsComponent} from "./settings.component";

const dashboardRoutes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, canActivateChild: [LoggedInUserGuard],
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'weights'},
      {path: 'weights', component: WeightsListComponent},
      {path: 'prices', component: PricesListComponent},
      {path: 'reports', component: ReportsListComponent},
      {path: 'trainings', component: CyclesListComponent},
      {path: 'about', component: AboutComponent},
      {path: 'settings', component: SettingsComponent},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRouting {

}
