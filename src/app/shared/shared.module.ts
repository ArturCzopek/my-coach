import {CircleLoaderComponent} from "./loaders/circle-loader.component";
import {StripLoaderComponent} from "./loaders/strip-loader.component";
import {NgModule} from "@angular/core";
import {ModalFooterComponent} from "./modals/modal-footer.component";
import {LineChartComponent} from "./charts/line-chart.component";
import {ChartsModule} from "ng2-charts";
import {MaterializeDirective, MaterializeModule} from "angular2-materialize";
import {DictionaryPipe} from "./pipes/dictionary.pipe";

@NgModule({
  declarations: [
    CircleLoaderComponent,
    StripLoaderComponent,
    ModalFooterComponent,
    LineChartComponent,
    DictionaryPipe
  ],
  imports: [
    MaterializeModule,
    ChartsModule
  ],
  exports: [
    CircleLoaderComponent,
    StripLoaderComponent,
    ModalFooterComponent,
    LineChartComponent,
    DictionaryPipe,
    MaterializeDirective
  ]
})
export class SharedModule {
}
