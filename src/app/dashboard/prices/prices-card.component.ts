import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { BaseCardComponent } from '../../shared/components/base-card.component';
import { Price, Product } from '../../shared/entities/get.entities';
import { PricesService } from './services/prices.service';
import { PricesModalsService } from './services/prices-modals.service';
import { ServiceInjector } from '../../shared/services/service.injector';
import { DateService } from '../../shared/services/date.service';

@Component({
    selector: 'coach-prices-card',
    templateUrl: 'prices-card.component.html',
    styleUrls: ['./prices.scss']
})
export class PricesCardComponent extends BaseCardComponent implements OnInit {

    @Input()
    public productPreview: Product;
    public prices: Price[] = [];
    private pricesService: PricesService;

    constructor(
        private pricesModalsService: PricesModalsService,
        private serviceInjector: ServiceInjector,
        public dateService: DateService, cdr: ChangeDetectorRef
    ) {
        super(cdr);
        this.pricesService = serviceInjector.getPricesService();
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.loadPrices();
    }

    public onAddPriceClick(): void {
        this.pricesModalsService.callAddPrice(this.productPreview);
    }

    public onEditPricesClick(): void {
        this.pricesModalsService.callEditPrices(this.prices, this.productPreview.productName);
    }

    public onEditProductClick(): void {
        this.pricesModalsService.callEditProduct(this.productPreview);
    }

    public onDeletePricesClick(): void {
        this.pricesModalsService.callDeletePrices(this.prices, this.productPreview.productName);
    }

    public onDeleteProductClick(): void {
        this.pricesModalsService.callDeleteProduct(this.productPreview);
    }

    private loadPrices() {
        this.isLoading = true;
        this.pricesService
            .getPrices(this.productPreview.productId)
            .subscribe(
                prices => this.prices = this.pricesService.parseFromServer(prices).slice().reverse(),
                error => console.error(error, 'error'),
                () => this.isLoading = false
            );
    }
}

