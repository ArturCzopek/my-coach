import {NgModule} from "@angular/core/src/metadata/ng_module";
import {WeightsListComponent} from "./weights-list.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {WeightsCardComponent} from "./weights-card.component";
import {SharedModule} from "../shared/shared.module";
import {WeightsMockService} from "./services/weights.mock.service";
import {WeightsBackEndService} from "./services/weights.back-end.service";

@NgModule({
  declarations: [
    WeightsListComponent,
    WeightsCardComponent,
  ],
  imports: [
    HttpModule,
    CommonModule,
    SharedModule
  ],
  providers: [
    WeightsMockService,
    WeightsBackEndService
  ]
})

export class WeightsModule {}
