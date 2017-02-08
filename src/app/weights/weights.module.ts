import {NgModule} from "@angular/core/src/metadata/ng_module";
import {WeightsListComponent} from "./weights-list.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {WeightsCardComponent} from "./weights-card.component";
import {WeightsService} from "./weights.service";
import {SharedModule} from "../shared/shared.module";

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
    WeightsService
  ]
})

export class WeightsModule {}
