import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { Price, Product } from '../../../shared/entities/get.entities';

@Injectable()
export class PricesModalsService {

    addProduct: Subject<any> = new Subject<any>();
    addPrice: Subject<any> = new Subject<any>();
    addShoppingList: Subject<any> = new Subject<any>();
    editProduct: Subject<any> = new Subject<any>();
    editPrices: Subject<any> = new Subject<any>();
    deleteProduct: Subject<any> = new Subject<any>();
    deletePrices: Subject<any> = new Subject<any>();
    refreshPage: Subject<any> = new Subject<any>();

    public callAddProduct(): void {
        this.addProduct.next(null);
    }

    public callAddPrice(product: Product): void {
        this.addPrice.next(product);
    }

    public callAddShoppingList(products: Product[]): void {
        this.addShoppingList.next(products);
    }

    public callEditProduct(product: Product): void {
        this.editProduct.next(product);
    }

    public callEditPrices(prices: Price[], modalTitle: string): void {
        this.editPrices.next({prices: prices, modalTitle: modalTitle});
    }

    public callDeleteProduct(product: Product): void {
        this.deleteProduct.next(product);
    }

    public callDeletePrices(prices: Price[], modalTitle: string): void {
        this.deletePrices.next({prices: prices, modalTitle: modalTitle});
    }

    public callRefreshPage(): void {
        this.refreshPage.next(null);
    }
}
