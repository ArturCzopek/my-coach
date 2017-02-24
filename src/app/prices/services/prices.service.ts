import {DictionaryService} from "../../shared/services/dictionary.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {Inject} from "@angular/core";
import {Observable} from "rxjs";
import {Product, Price} from "../../shared/entities/get.entities";
import {NewProduct, NewPrice} from "../../shared/entities/add.entities";

export abstract class PricesService {
  private dictionaryService: DictionaryService;

  constructor(@Inject(ServiceInjector) serviceInjector: ServiceInjector) {
    this.dictionaryService = serviceInjector.getDictionaryService();
  }

  abstract getProductPreviews(): Observable<Product[]>;

  abstract getPrices(productPreview: Product): Observable<Price[]>;

  abstract addProduct(productToAdd: NewProduct): void;

  abstract addPrice(priceToAdd: NewPrice): void;

  abstract addShoppingList(shoppingList: NewPrice[], place: string, date: Date): void;

  abstract editPrices(pricesToEdit: Price[]): void;

  abstract editProduct(productToEdit: Product): void;

  abstract deletePrices(pricesToDelete: Price[]): void;

  abstract deleteProduct(productToDelete: Product): void;
}
