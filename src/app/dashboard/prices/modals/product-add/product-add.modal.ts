/* tslint:disable:component-class-suffix */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { PricesService } from '../../services/prices.service';
import { NewProduct } from '../../../../shared/entities/add.entities';
import { PricesModalsService } from '../../services/prices-modals.service';
import { ServiceInjector } from '../../../../shared/services/service.injector';
import { BaseModal } from '../../../../shared/components/base.modal';

declare var $: any;

@Component({
    selector: 'coach-product-add-modal',
    templateUrl: './product-add.modal.html',
    styleUrls: ['../prices.modals.scss', '../../../../shared/materialize-upgrades.scss']
})
export class ProductAddModal extends BaseModal implements OnInit {

    public productToAdd: NewProduct;
    public imageUrl = '';
    public canStoreFiles: boolean;

    @ViewChild('imageFile')
    public imageFile: ElementRef;

    @ViewChild('imageWrapper')
    public imageWrapper: ElementRef;

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
        this.canStoreFiles = this.pricesService.canFilesBeStored();

        this.initialization$ = this.pricesModalsService
            .addProduct
            .subscribe(() => this.openModal());
    }

    public initDataBeforeOpenModal(): void {
        super.initDataBeforeOpenModal();
        this.productToAdd = new NewProduct(-1, '', '');
        this.imageUrl = '';
    }

    public isDataValid(): boolean {
        if (this.productToAdd) {
            return this.productToAdd.productName.length > 0 && this.errorMessage.length === 0;
        }

        return false;
    }

    public uploadImage(): void {
        if (this.imageFile.nativeElement.files.length > 0) {
            const file: File = this.imageFile.nativeElement.files[0];

            const input = new FormData();
            input.append('file', file);
            input.append('productId', '' + this.productToAdd.productId);

            this.pricesService
                .addProductImage(file, this.productToAdd.productId)
                .subscribe(
                    productId => {
                        this.productToAdd.productId = productId;
                        this.errorMessage = '';
                        this.imageUrl = this.pricesService.getProductImageUrl(this.productToAdd.productId);
                    },
                    error => this.errorMessage = this.dictionaryService.getErrorMessage(error)
                );
        }
    }

    public onAddClick(): void {
        this.pricesService
            .addProduct(this.productToAdd)
            .first()
            .subscribe(
                ok => {
                    this.pricesModalsService.callRefreshPage();
                    this.errorMessage = '';
                    this.closeModal();
                },
                error => this.errorMessage = this.dictionaryService.getErrorMessage(error)
            );
    }

    public closeModal(): void {
        super.closeModal();

        if (this.imageFile) {
            this.imageFile.nativeElement.files[0] = null;
            this.imageWrapper.nativeElement.value = '';
        }
    }
}
