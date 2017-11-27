/* tslint:disable:component-class-suffix */
import { Component, OnInit } from '@angular/core';

import { Cycle } from '../../../../shared/entities/get.entities';
import { ServiceInjector } from '../../../../shared/services/service.injector';
import { BaseModal } from '../../../../shared/components/base.modal';
import { TrainingsService } from '../../services/tranings.service';
import { TrainingModalsService } from '../../services/training-modals.service';

declare var Materialize: any;

@Component({
    selector: 'coach-cycle-delete-modal',
    templateUrl: './cycle-delete.modal.html',
    styleUrls: ['./../training.modals.scss', '../../../../shared/materialize-upgrades.scss']
})
export class CycleDeleteModal extends BaseModal implements OnInit {

    public selectedCycle: Cycle = null;
    public modalTitle: string;
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
            .deleteCycle
            .subscribe((data: any) => {
                this.selectedCycle = data.cycle;
                this.modalTitle = data.modalTitle;
                this.openModal();
            });
    };

    public canModalBeOpened(): boolean {
        if (this.selectedCycle) {
            return true;
        }

        Materialize.toast(
            this.dictionaryService.getDictionaryValue('page.trainings.loadFirst.tooltip'),
            3000
        );
        return false;
    }

    public onDeleteClick(): void {
        this.trainingsService.deleteCycle(this.selectedCycle)
            .first()
            .subscribe(
                ok => this.trainingModalsService.callRefreshPage(),
                error => console.error(error, 'error'),
                () => this.closeModal()
            );
    }
}
