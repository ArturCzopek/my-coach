/* tslint:disable:component-class-suffix */
import { Component, OnInit } from '@angular/core';

import { Training } from '../../../shared/entities/get.entities';
import { ServiceInjector } from '../../../shared/services/service.injector';
import { BaseModal } from '../../../shared/components/base.modal';
import { TrainingsService } from '../services/tranings.service';
import { TrainingModalsService } from '../services/training-modals.service';
import { DateService } from '../../../shared/services/date.service';

declare var Materialize: any;

@Component({
    selector: 'coach-training-delete-modal',
    templateUrl: './training-delete.modal.html',
    styleUrls: ['./training.modals.scss', '../../../shared/materialize-upgrades.scss']
})
export class TrainingDeleteModal extends BaseModal implements OnInit {

    public selectedTraining: Training = null;
    public dateService: DateService;
    private trainingsService: TrainingsService;

    constructor(
        public serviceInjector: ServiceInjector,
        private trainingModalsService: TrainingModalsService
    ) {
        super(serviceInjector);
        this.trainingsService = serviceInjector.getTrainingsService();
        this.dateService = serviceInjector.getDateService();
    }

    public ngOnInit(): void {
        super.ngOnInit();

        this.initialization$ = this.trainingModalsService
            .deleteTraining
            .subscribe((training: Training) => {
                this.selectedTraining = training;
                this.openModal();
            });
    };

    public onDeleteClick(): void {
        this.trainingsService
            .deleteTraining(this.selectedTraining)
            .first()
            .subscribe(
                ok => this.trainingModalsService.callRefreshPage(),
                error => console.error(error, 'error'),
                () => this.closeModal()
            );
    }
}
