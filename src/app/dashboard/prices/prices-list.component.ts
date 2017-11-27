import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Product } from '../../shared/entities/get.entities';
import { PricesService } from './services/prices.service';
import { PricesModalsService } from './services/prices-modals.service';
import { ServiceInjector } from '../../shared/services/service.injector';

@Component({
    selector: 'coach-prices',
    templateUrl: './prices-list.component.html',
    styleUrls: ['./prices.scss', '../../shared/materialize-upgrades.scss']
})
export class PricesListComponent implements OnInit, AfterViewInit, OnDestroy {

    public isLoading: boolean;
    private productPreviews: Product[];
    private pricesService: PricesService;
    private refresh$: Subscription = null;

    constructor(
        private pricesModalsService: PricesModalsService,
        private serviceInjector: ServiceInjector,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        this.pricesService = serviceInjector.getPricesService();
    }

    ngOnInit(): void {
        this.loadProductPreviews();
        if (this.refresh$ == null) {
            this.refresh$ = this.pricesModalsService.refreshPage.subscribe(() => this.ngOnInit());
        }
    }

    ngAfterViewInit(): void {
        setTimeout(1000, () => this.changeDetectorRef.detach());
    }

    ngOnDestroy(): void {
        this.refresh$.unsubscribe();
        this.refresh$ = null;
    }

    public onAddShoppingListClick(): void {
        this.pricesModalsService.callAddShoppingList(this.productPreviews);
    }

    public onAddProductClick(): void {
        this.pricesModalsService.callAddProduct();
    }

    private loadProductPreviews(): void {
        this.isLoading = true;
        this.pricesService
            .getProductPreviews()
            .subscribe(
                previews => this.productPreviews = previews.slice().reverse(),
                error => console.error('error', error),
                () => {
                    this.isLoading = false;
                    this.changeDetectorRef.detectChanges();
                }
            );
    }
}
