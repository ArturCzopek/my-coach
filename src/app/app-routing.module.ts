import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {WeightsListComponent} from "./weights/weights-list.component";
import {TrainingsComponent} from "./trainings/trainings.component";
import {ReportsListComponent} from "./reports/reports-list.component";
import {PricesListComponent} from "./prices/prices-list.component";
import {AboutComponent} from "./about.component";

const routes: Routes = [
  {path: '', redirectTo: '/weights', pathMatch: 'full'},
  {path: 'weights', component: WeightsListComponent},
  {path: 'prices', component: PricesListComponent},
  {path: 'reports', component: ReportsListComponent},
  {path: 'trainings', component: TrainingsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class MyCoachRoutingModule {
}
