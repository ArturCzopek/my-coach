/* tslint:disable:component-class-suffix */
import { Component, OnInit } from '@angular/core';

import { Weight } from '../../../shared/entities/get.entities';
import { WeightsModalsService } from '../services/weights-modals.service';
import { WeightsService } from '../services/weights.service';
import { DOES_NOT_CONTAIN } from '../../../shared/global.values';
import { ServiceInjector } from '../../../shared/services/service.injector';
import { BaseModal } from '../../../shared/components/base.modal';
import { DateService } from '../../../shared/services/date.service';

declare var Materialize: any;

@Component({
    selector: 'coach-weights-edit-modal',
    templateUrl: 'weights-edit.modal.html',
    styleUrls: ['./weights.modals.scss', '../../../shared/materialize-upgrades.scss']
})
export class WeightsEditModal extends BaseModal implements OnInit {

    public formattedDays: string[] = [];
    public selectedWeights: Weight[] = [];
    public weightsToEditIndexes: number[] = [];
    public modalTitle: string;
    private dateService: DateService;
    private weightsService: WeightsService;

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
            .editWeights
            .subscribe((data: any) => {
                this.selectedWeights = data.weights;
                this.modalTitle = data.modalTitle;
                this.openModal();
            });
    }

    public initDataBeforeOpenModal(): void {
        this.weightsToEditIndexes = [];
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
        return this.weightsToEditIndexes.length > 0;
    }

    public onEditClick() {
        const weightsToEdit: Weight[] = [];

        this.weightsToEditIndexes.forEach(index => weightsToEdit.push(this.selectedWeights[index]));

        this.weightsService
            .editWeights(weightsToEdit)
            .first()
            .subscribe(
                ok => {
                    this.weightsModalsService.callRefreshPage();
                    this.errorMessage = '';
                    this.closeModal();
                },
                error => this.errorMessage = this.dictionaryService.getErrorMessage(error)
            );
    }

    public addDayIndexToChanged(dateIndex: number): void {
        if (this.weightsToEditIndexes.indexOf(dateIndex) === DOES_NOT_CONTAIN) {
            this.weightsToEditIndexes.push(dateIndex);
        }
    }

    public trackByWeightId(index, weight: Weight): number {
        return weight.weightId;
    }
}
