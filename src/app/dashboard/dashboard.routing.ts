import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {WeightsListComponent} from "./weights/weights-list.component";
import {PricesListComponent} from "./prices/prices-list.component";
import {ReportsListComponent} from "./reports/reports-list.component";
import {CyclesListComponent} from "./trainings/cycles-list.component";
import {AboutComponent} from "./about.component";
import {NgModule} from "@angular/core";
import {LoggedInUserGuard} from "../shared/guards/logged-in-user.guard";

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
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRouting {

}
