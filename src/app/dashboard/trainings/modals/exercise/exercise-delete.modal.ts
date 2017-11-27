/* tslint:disable:component-class-suffix */
import { Component, OnInit } from '@angular/core';

import { BaseModal } from '../../../../shared/components/base.modal';
import { Exercise } from '../../../../shared/entities/get.entities';
import { TrainingsService } from '../../services/tranings.service';
import { ServiceInjector } from '../../../../shared/services/service.injector';
import { TrainingModalsService } from '../../services/training-modals.service';



declare var Materialize: any;

@Component({
    selector: 'coach-exercise-delete-modal',
    templateUrl: './exercise-delete.modal.html',
    styleUrls: ['./../training.modals.scss', '../../../../shared/materialize-upgrades.scss']
})
export class ExerciseDeleteModal extends BaseModal implements OnInit {

    public selectedExercise: Exercise = null;
    private trainingsService: TrainingsService;

    constructor(
        public serviceInjector: ServiceInjector,
        private trainingModalsService: TrainingModalsService
    ) {
        super(serviceInjector);
        this.trainingsService = serviceInjector.getTrainingsService();
    }

    public ngOnInit(): void {
        super.ngOnInit();

        this.initialization$ = this.trainingModalsService
            .deleteExercise
            .subscribe((exercise: Exercise) => {
                this.selectedExercise = exercise;
                this.openModal();
            });
    };

    public onDeleteClick(): void {
        this.trainingsService
            .deleteExercise(this.selectedExercise)
            .first()
            .subscribe(
                ok => this.trainingModalsService.callRefreshPage(),
                error => console.error(error, 'error'),
                () => this.closeModal()
            );
    }
}
