import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeightsComponent} from "./weights/weights.component";
import {TrainingsComponent} from "./trainings/trainings.component";
import {ReportsListComponent} from "./reports/reports-list.component";
import {PricesComponent} from "./prices/prices.component";

const routes: Routes = [
  {path: '', redirectTo: '/weights', pathMatch: 'full'},
  {path: 'weights', component: WeightsComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'reports', component: ReportsListComponent},
  {path: 'trainings', component: TrainingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class MyCoachRoutingModule { }
