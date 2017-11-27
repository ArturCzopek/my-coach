/* tslint:disable:component-class-suffix */
import { Component, OnInit } from '@angular/core';

import { Price } from '../../../../shared/entities/get.entities';
import { PricesService } from '../../services/prices.service';
import { PricesModalsService } from '../../services/prices-modals.service';
import { ServiceInjector } from '../../../../shared/services/service.injector';
import { DateService } from '../../../../shared/services/date.service';
import { BaseModal } from '../../../../shared/components/base.modal';

@Component({
    selector: 'coach-prices-delete-modal',
    templateUrl: './prices-delete.modal.html',
    styleUrls: ['../prices.modals.scss', '../../../../shared/materialize-upgrades.scss']
})
export class PricesDeleteModal extends BaseModal implements OnInit {

    public selectedPrices: Price[] = [];
    public checkboxesForPrices: boolean[] = [];
    public pricesToDeleteIndexes: number[] = [];
    public modalTitle: string;
    private pricesService: PricesService;

    constructor(
        public serviceInjector: ServiceInjector,
        private pricesModalsService: PricesModalsService,
        private dateService: DateService
    ) {
        super(serviceInjector);
        this.pricesService = serviceInjector.getPricesService();
    }

    public ngOnInit(): void {
        super.ngOnInit();

        this.initialization$ = this.pricesModalsService
            .deletePrices
            .subscribe((data: any) => {
                this.selectedPrices = data.prices;
                this.modalTitle = data.modalTitle;

                this.openModal();
            });
    }

    public initDataBeforeOpenModal(): void {
        super.initDataBeforeOpenModal();

        this.pricesToDeleteIndexes = [];
        this.checkboxesForPrices = [];

        if (this.selectedPrices) {
            this.selectedPrices.forEach(() => this.checkboxesForPrices.push(false));
        }
    }

    public isDataValid(): boolean {
        for (const checkbox of this.checkboxesForPrices) {
            if (checkbox) {
                return true;
            }
        }

        return false;
    }

    public onDeleteClick() {

        for (let i = 0; i < this.checkboxesForPrices.length; i++) {
            if (this.checkboxesForPrices[i]) {
                this.pricesToDeleteIndexes.push(i);
            }
        }

        if (this.pricesToDeleteIndexes.length > 0) {
            const pricesToDelete: Price[] = [];

            this.pricesToDeleteIndexes.forEach(index => {
                pricesToDelete.push(this.selectedPrices[index]);
            });

            this.pricesService.deletePrices(pricesToDelete)
                .first()
                .subscribe(
                    ok => this.pricesModalsService.callRefreshPage(),
                    error => console.error(error, 'error'),
                    () => this.closeModal()
                );
        }
    }

    public getDateAsString(date: Date): string {
        return this.dateService.parseDateToString(date);
    }

    public trackByPriceId(index, price: Price): number {
        return price.priceId;
    }
}
