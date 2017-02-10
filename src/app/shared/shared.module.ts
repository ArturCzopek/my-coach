import {CircleLoaderComponent} from "./loaders/circle-loader.component";
import {StripLoaderComponent} from "./loaders/strip-loader.component";
import {NgModule} from "@angular/core";
import {ModalFooter} from "./modals/modal-footer.component";
import {ChartsModule} from "ng2-charts";
import {LineChartComponent} from "./charts/line-chart.component";
import {MaterializeDirective} from "angular2-materialize";

@NgModule({
  declarations: [
    MaterializeDirective,
    CircleLoaderComponent,
    StripLoaderComponent,
    ModalFooter,
    LineChartComponent
  ],
  imports: [
    ChartsModule
  ],
  exports: [
    MaterializeDirective,
    CircleLoaderComponent,
    StripLoaderComponent,
    ModalFooter,
    LineChartComponent
  ]
})
export class SharedModule {
}
