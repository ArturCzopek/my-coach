import {NgModule} from "@angular/core/src/metadata/ng_module";
import {WeightsListComponent} from "./weights-list.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {WeightsCardComponent} from "./weights-card.component";
import {SharedModule} from "../shared/shared.module";
import {WeightsMockService} from "./services/weights.mock.service";
import {WeightsBackEndService} from "./services/weights.back-end.service";
import {WeightsModalsService} from "./services/weights-modals.service";
import {WeightsEditModal} from "./modals/weights-edit.modal";
import {WeightsModals} from "./modals/weights.modal";
import {FormsModule} from "@angular/forms";
import {WeightsDeleteModal} from "./modals/weights-delete.modal";

@NgModule({
  declarations: [
    WeightsListComponent,
    WeightsCardComponent,
    WeightsModals,
    WeightsEditModal,
    WeightsDeleteModal
  ],
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    WeightsMockService,
    WeightsBackEndService,
    WeightsModalsService
  ]
})

export class WeightsModule {}
