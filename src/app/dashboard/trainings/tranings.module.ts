import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { TrainingsMockService } from './services/trainings.mock.service';
import { TrainingsBackEndService } from './services/trainings.back-end.service';
import { SharedModule } from '../../shared/shared.module';
import { CyclesListComponent } from './cycles-list.component';
import { CycleCardComponent } from './cycle-card.component';
import { SetSectionComponent } from './set-section.component';
import { TrainingModals } from './modals/training.modals';
import { CycleDeleteModal } from './modals/cycle/cycle-delete.modal';
import { TrainingModalsService } from './services/training-modals.service';
import { CycleEditModal } from './modals/cycle/cycle-edit.modal';
import { CycleAddModal } from './modals/cycle/cycle-add.modal';
import { ExerciseAddModal } from './modals/exercise/exercise-add.modal';
import { TrainingAddModal } from './modals/training-add.modal';
import { ExerciseDeleteModal } from './modals/exercise/exercise-delete.modal';
import { TrainingDeleteModal } from './modals/training-delete.modal';
import { ExerciseEditModal } from './modals/exercise/exercise-edit.modal';
import { TrainingEditModal } from './modals/training-edit.modal';

@NgModule({
    declarations: [
        CyclesListComponent,
        CycleCardComponent,
        SetSectionComponent,
        TrainingModals,
        CycleAddModal,
        CycleDeleteModal,
        CycleEditModal,
        ExerciseAddModal,
        TrainingAddModal,
        ExerciseDeleteModal,
        TrainingDeleteModal,
        ExerciseEditModal,
        TrainingEditModal,
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
    ],
    exports: [
        CyclesListComponent
    ]
})
export class TrainingsModule {}
