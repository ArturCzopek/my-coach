/* tslint:disable:component-class-suffix */
import { Component, OnInit } from '@angular/core';

import { Weight } from '../../../shared/entities/get.entities';
import { WeightsModalsService } from '../services/weights-modals.service';
import { WeightsService } from '../services/weights.service';
import { ServiceInjector } from '../../../shared/services/service.injector';
import { BaseModal } from '../../../shared/components/base.modal';
import { DateService } from '../../../shared/services/date.service';

declare var Materialize: any;

@Component({
    selector: 'coach-weights-delete-modal',
    templateUrl: 'weights-delete.modal.html',
    styleUrls: ['./weights.modals.scss', '../../../shared/materialize-upgrades.scss']
})
export class WeightsDeleteModal extends BaseModal implements OnInit {

    public formattedDays: string[] = [];
    public selectedWeights: Weight[] = [];
    public checkboxesForWeights: boolean[] = [];
    public weightsToDeleteIndexes: number[] = [];
    public modalTitle: string;
    private weightsService: WeightsService;
    private dateService: DateService;

    constructor(
        public serviceInjector: ServiceInjector,
        private weightsModalsService: WeightsModalsService
    ) {
        super(serviceInjector);
        this.weightsService = serviceInjector.getWeightsService();
        this.dateService = serviceInjector.getDateService();
    }

    public ngOnInit(): void {
        super.ngOnInit();

        this.initialization$ = this.weightsModalsService
            .deleteWeights
            .subscribe((data: any) => {
                this.selectedWeights = data.weights;
                this.modalTitle = data.modalTitle;
                this.openModal();
            });
    }

    public initDataBeforeOpenModal(): void {
        this.weightsToDeleteIndexes = [];
        this.checkboxesForWeights = [];
        this.selectedWeights.forEach(() => this.checkboxesForWeights.push(false));
        this.formattedDays = this.weightsService.formatDaysToDisplayingValuesFromWeights(this.selectedWeights);
    }

    public canModalBeOpened(): boolean {
        if (this.selectedWeights) {
            return true;
        }

        Materialize.toast(
            this.dictionaryService.getDictionaryValue('page.weights.loadFirst.tooltip'),
            3000
        );
        return false;
    }

    public isDataValid(): boolean {
        for (const checkbox of this.checkboxesForWeights) {
            if (checkbox) {
                return true;
            }
        }

        return false;
    }

    public onDeleteClick(): void {
        const weightsToDelete: Weight[] = [];

        this.checkboxesForWeights
            .filter(value => value)
            .forEach((value, index) => this.weightsToDeleteIndexes.push(index));

        this.weightsToDeleteIndexes.forEach(index => weightsToDelete.push(this.selectedWeights[index]));

        this.weightsService
            .deleteWeights(weightsToDelete)
            .first()
            .subscribe(
                ok => this.weightsModalsService.callRefreshPage(),
                error => console.error('error', error),
                () => this.closeModal()
            );
    }

    public trackByWeightId(index, weight: Weight): number {
        return weight.weightId;
    }
}
