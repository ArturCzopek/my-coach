import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {TrainingsMockService} from "./services/trainings.mock.service";
import {TrainingsBackEndService} from "./services/trainings.back-end.service";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {CyclesListComponent} from "./cycles-list.component";
import {CycleCardComponent} from "./cycle-card.component";
import {SetSectionComponent} from "./set-section.component";
import {TrainingModals} from "./modals/training.modals";
import {CycleDeleteModal} from "./modals/cycle-delete.modal";
import {TrainingModalsService} from "./services/training-modals.service";
import {CycleEditModal} from "./modals/cycle-edit.modal";
import {CycleAddModal} from "./modals/cycle-add.modal";
import {ExerciseAddModal} from "./modals/exercise-add.modal";

@NgModule({
  declarations: [
    CyclesListComponent,
    CycleCardComponent,
    SetSectionComponent,
    TrainingModals,
    CycleAddModal,
    CycleDeleteModal,
    CycleEditModal,
    ExerciseAddModal
  ],
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    TrainingsMockService,
    TrainingsBackEndService,
    TrainingModalsService
  ]
})
export class TrainingsModule {
}
