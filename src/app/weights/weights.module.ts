import {NgModule} from "@angular/core/src/metadata/ng_module";
import {WeightsComponent} from "./weights.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [WeightsComponent],
  imports: [
    HttpModule,
    CommonModule
  ]
})

export class WeightsModule {}
