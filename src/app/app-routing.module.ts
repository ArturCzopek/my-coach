import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WeightsListComponent} from "./weights/weights-list.component";
import {ReportsListComponent} from "./reports/reports-list.component";
import {PricesListComponent} from "./prices/prices-list.component";
import {AboutComponent} from "./about.component";
import {CyclesListComponent} from "./trainings/cycles-list.component";
import {NotFoundComponent} from "./not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/weights', pathMatch: 'full'},
  {path: 'weights', component: WeightsListComponent},
  {path: 'prices', component: PricesListComponent},
  {path: 'reports', component: ReportsListComponent},
  {path: 'trainings', component: CyclesListComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class MyCoachRoutingModule {
}
