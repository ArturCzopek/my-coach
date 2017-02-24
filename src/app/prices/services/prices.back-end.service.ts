import {Injectable, Injector} from "@angular/core";
import {PricesService} from "./prices.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {Observable} from "rxjs";
import {Product, Price} from "../../shared/entities/get.entities";
import {NewProduct, NewPrice} from "../../shared/entities/add.entities";

@Injectable()
export class PricesBackEndService extends PricesService {

  constructor(private injector: Injector) {
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

  addProduct(productToAdd: NewProduct): void {
    console.log('PricesBackEndService#addProduct not implemented yet');
  }

  addPrice(priceToAdd: NewPrice): void {
    console.log('PricesBackEndService#addPrice not implemented yet');
  }

  addShoppingList(shoppingList: NewPrice[]): void {
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
}
