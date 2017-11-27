import { Injectable, Injector } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { PricesService } from './prices.service';
import { ServiceInjector } from '../../../shared/services/service.injector';
import { Price, Product } from '../../../shared/entities/get.entities';
import { NewPrice, NewProduct, ShoppingList } from '../../../shared/entities/add.entities';
import { environment } from '../../../../environments/environment';
import { UserService } from '../../../shared/services/user.service';

@Injectable()
export class PricesBackEndService extends PricesService {

    private imagesUrl = '/images';
    private uploadUrl = '/upload';
    private priceUrl = '/price';
    private productUrl = '/product';

    constructor(
        private injector: Injector,
        private http: Http,
        private userService: UserService
    ) {
        super(injector.get(ServiceInjector));
    }

    public getProductPreviews(): Observable<Product[]> {
        return this.http
            .get(
                `${environment.server.url}${this.priceUrl}${this.productUrl}/previews`,
                this.userService.prepareAuthOptions()
            ).map(res => res.json());
    }

    public getPrices(productId: number): Observable<Price[]> {
        return this.http
            .get(
                `${environment.server.url}${this.priceUrl}/${productId}`,
                this.userService.prepareAuthOptions()
            ).map(res => res.json());
    }

    public getProductImageUrl(productId: number): string {
        return `${environment.server.url}${this.imagesUrl}${this.productUrl}/${productId}`;
    }

    public addProductImage(file: any, productId: number): Observable<number> {
        const input = new FormData();
        input.append('file', file);
        input.append('productId', '' + productId);

        return this.http
            .post(
                `${environment.server.url}${this.imagesUrl}${this.productUrl}${this.uploadUrl}`,
                input,
                this.userService.prepareAuthOptions()
            ).map(res => res.json());
    }

    public addProduct(productToAdd: NewProduct): Observable<any> {
        return this.http
            .post(
                `${environment.server.url}${this.priceUrl}${this.productUrl}/add`,
                productToAdd,
                this.userService.prepareAuthOptions()
            );
    }

    public addPrice(priceToAdd: NewPrice): Observable<any> {
        return this.http
            .post(
                `${environment.server.url}${this.priceUrl}/add`,
                priceToAdd,
                this.userService.prepareAuthOptions()
            );
    }

    public addShoppingList(shoppingList: ShoppingList): Observable<any> {
        return this.http.post(
                `${environment.server.url}${this.priceUrl}/shopping/add`,
                shoppingList,
                this.userService.prepareAuthOptions()
            );
    }

    public deletePrices(pricesToDelete: Price[]): Observable<any> {
        const options = this.userService.prepareAuthOptions();
        options.body = pricesToDelete;
        return this.http.delete(`${environment.server.url}${this.priceUrl}/delete`, options);
    }

    public deleteProduct(productToDelete: Product): Observable<any> {
        const options = this.userService.prepareAuthOptions();
        options.body = productToDelete;
        return this.http.delete(`${environment.server.url}${this.priceUrl}${this.productUrl}/delete`, options);
    }

    public editPrices(pricesToEdit: Price[]): Observable<any> {
        return this.http
            .put(
                `${environment.server.url}${this.priceUrl}/update`,
                pricesToEdit,
                this.userService.prepareAuthOptions()
            );
    }

    public editProduct(productToEdit: Product): Observable<any> {
        return this.http
            .put(
                `${environment.server.url}${this.priceUrl}${this.productUrl}/update`,
                productToEdit,
                this.userService.prepareAuthOptions()
            );
    }
}
