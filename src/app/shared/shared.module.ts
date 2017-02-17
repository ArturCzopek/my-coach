import {CircleLoaderComponent} from "./loaders/circle-loader.component";
import {StripLoaderComponent} from "./loaders/strip-loader.component";
import {NgModule} from "@angular/core";
import {ModalFooter} from "./modals/modal-footer.component";
import {ChartsModule} from "ng2-charts";
import {LineChartComponent} from "./charts/line-chart.component";
import {MaterializeDirective} from "angular2-materialize";
import {DictionaryPipe} from "./pipes/dictionary.pipe";

@NgModule({
  declarations: [
    MaterializeDirective,
    CircleLoaderComponent,
    StripLoaderComponent,
    ModalFooter,
    LineChartComponent,
    DictionaryPipe
  ],
  imports: [
    ChartsModule
  ],
  exports: [
    MaterializeDirective,
    CircleLoaderComponent,
    StripLoaderComponent,
    ModalFooter,
    LineChartComponent,
    DictionaryPipe
  ]
})
export class SharedModule {
}
