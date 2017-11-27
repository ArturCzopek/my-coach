/* tslint:disable:component-class-suffix */
import { Component, OnInit } from '@angular/core';

import { ServiceInjector } from '../../../../shared/services/service.injector';
import { PricesModalsService } from '../../services/prices-modals.service';
import { PricesService } from '../../services/prices.service';
import { Product } from '../../../../shared/entities/get.entities';
import { BaseModal } from '../../../../shared/components/base.modal';

declare var $: any;

@Component({
    selector: 'coach-product-delete-modal',
    templateUrl: './product-delete.modal.html',
    styleUrls: ['../prices.modals.scss', '../../../../shared/materialize-upgrades.scss']
})
export class ProductDeleteModal extends BaseModal implements OnInit {

    public selectedProduct: Product = null;
    public modalTitle: string;

    private pricesService: PricesService;

    constructor(
        public serviceInjector: ServiceInjector,
        private pricesModalsService: PricesModalsService
    ) {
        super(serviceInjector);
        this.pricesService = serviceInjector.getPricesService();
    }

    public ngOnInit(): void {
        super.ngOnInit();

        this.initialization$ = this.pricesModalsService
            .deleteProduct
            .subscribe((product: Product) => {
                this.selectedProduct = product;
                this.openModal();
            });
    };

    public initDataBeforeOpenModal(): void {
        super.initDataBeforeOpenModal();
        this.modalTitle = this.selectedProduct.productName;
    }

    public isDataValid(): boolean {
        return true;
    }

    public onDeleteClick(): void {
        this.pricesService
            .deleteProduct(this.selectedProduct)
            .first()
            .subscribe(
                ok => this.pricesModalsService.callRefreshPage(),
                error => console.error(error, 'error'),
                () => this.closeModal()
            );
    }
}
