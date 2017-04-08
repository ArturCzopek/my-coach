import {Injectable, Injector} from "@angular/core";
import {PricesService} from "./prices.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {Observable} from "rxjs/Observable";
import {Price, Product} from "../../shared/entities/get.entities";
import {NewPrice, NewProduct, ShoppingList} from "../../shared/entities/add.entities";
import {environment} from "../../../environments/environment";
import {Http} from "@angular/http";

@Injectable()
export class PricesBackEndService extends PricesService {

  private uploadUrl = "/product/image/upload";
  private imageUrl = "/product/image/";

  constructor(private injector: Injector, private http: Http) {
    super(injector.get(ServiceInjector));
  }

  getProductPreviews(): Observable<Product[]> {
    console.log('PricesBackEndService#getProductPreviews not implemented yet');
    return null;
  }

  getPrices(productPreview: Product): Observable<Price[]> {
    console.log('PricesBackEndService#getPrices not implemented yet');
    return null;
  }

  addProductImage(file: any, productId: number): Observable<number> {
    const input = new FormData();
    input.append("file", file);
    input.append("productId", productId);

    return this.http.post(`${environment.url}${this.uploadUrl}`, input).map(res => res.json());
  }

  addProduct(productToAdd: NewProduct): void {
    console.log('PricesBackEndService#addProduct not implemented yet');
  }

  addPrice(priceToAdd: NewPrice): void {
    console.log('PricesBackEndService#addPrice not implemented yet');
  }

  addShoppingList(shoppingList: ShoppingList): void {
    console.log('PricesBackEndService#addShopping list not implemented yet');
  }

  editPrices(pricesToEdit: Price[]): void {
    console.log('PricesBackEndService#editPrices not implemented yet');
  }

  editProduct(product: Product): void {
    console.log('PricesBackEndService#editProduct not implemented yet');
  }

  deletePrices(pricesToDelete: Price[]): void {
    console.log('PricesBackEndService#deletePrices not implemented yet');
  }

  deleteProduct(productToDelete: Product): void {
    console.log('PricesBackEndService#deleteProduct not implemented yet');
  }

  getProductImageUrl(productId: number): string {
    return `${environment.url}${this.imageUrl}${productId}`;
  }
}
