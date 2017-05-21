import {Injectable, Injector} from "@angular/core";
import {PricesService} from "./prices.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {Observable} from "rxjs/Observable";
import {Price, Product} from "../../shared/entities/get.entities";
import {NewPrice, NewProduct, ShoppingList} from "../../shared/entities/add.entities";
import {environment} from "../../../environments/environment";
import {Http, RequestOptions} from "@angular/http";

@Injectable()
export class PricesBackEndService extends PricesService {

  private imagesUrl = "/images";
  private uploadUrl = "/upload";
  private priceUrl = "/price";
  private productUrl = "/product";

  constructor(private injector: Injector, private http: Http) {
    super(injector.get(ServiceInjector));
  }

  getProductPreviews(): Observable<Product[]> {
    return this.http.get(`${environment.server.url}${this.priceUrl}${this.productUrl}/previews`).map(res => res.json());
  }

  getPrices(productId: number): Observable<Price[]> {
    return this.http.get(`${environment.server.url}${this.priceUrl}/${productId}`).map(res => res.json());
  }

  getProductImageUrl(productId: number): string {
    return `${environment.server.url}${this.imagesUrl}${this.productUrl}/${productId}`;
  }

  addProductImage(file: any, productId: number): Observable<number> {
    const input = new FormData();
    input.append("file", file);
    input.append("productId", productId);

    return this.http.post(`${environment.server.url}${this.imagesUrl}${this.productUrl}${this.uploadUrl}`, input).map(res => res.json());
  }

  addProduct(productToAdd: NewProduct): Observable<any> {
    return this.http.post(`${environment.server.url}${this.priceUrl}${this.productUrl}/add`, productToAdd);
  }

  addPrice(priceToAdd: NewPrice): Observable<any> {
    return this.http.post(`${environment.server.url}${this.priceUrl}/add`, priceToAdd);
  }

  addShoppingList(shoppingList: ShoppingList): Observable<any> {
    return this.http.post(`${environment.server.url}${this.priceUrl}/shopping/add`, shoppingList);
  }

  deletePrices(pricesToDelete: Price[]): Observable<any> {
    return this.http.delete(`${environment.server.url}${this.priceUrl}/delete`, new RequestOptions({body: pricesToDelete}));
  }

  deleteProduct(productToDelete: Product): Observable<any> {
    return this.http.delete(`${environment.server.url}${this.priceUrl}${this.productUrl}/delete`, new RequestOptions({body: productToDelete}));

  }

  editPrices(pricesToEdit: Price[]): Observable<any> {
    return this.http.put(`${environment.server.url}${this.priceUrl}/update`, pricesToEdit);
  }

  editProduct(productToEdit: Product): Observable<any> {
    return this.http.put(`${environment.server.url}${this.priceUrl}${this.productUrl}/update`, productToEdit);
  }
}
