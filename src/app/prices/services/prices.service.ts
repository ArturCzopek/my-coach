import {DictionaryService} from "../../shared/services/dictionary.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {Inject} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Price, Product} from "../../shared/entities/get.entities";
import {NewPrice, NewProduct, ShoppingList} from "../../shared/entities/add.entities";
import {environment} from "../../../environments/environment";

export abstract class PricesService {
  private dictionaryService: DictionaryService;

  constructor(@Inject(ServiceInjector) serviceInjector: ServiceInjector) {
    this.dictionaryService = serviceInjector.getDictionaryService();
  }

  abstract getProductPreviews(): Observable<Product[]>;

  abstract getPrices(productPreview: Product): Observable<Price[]>;

  abstract addProductImage(file: any, productId: number): Observable<number>;

  abstract addProduct(productToAdd: NewProduct): void;

  abstract addPrice(priceToAdd: NewPrice): void;

  abstract addShoppingList(shoppingList: ShoppingList): void;

  abstract editPrices(pricesToEdit: Price[]): void;

  abstract editProduct(productToEdit: Product): void;

  abstract deletePrices(pricesToDelete: Price[]): void;

  abstract deleteProduct(productToDelete: Product): void;

  abstract getProductImageUrl(productId: number): string;

  public canFilesBeStored(): boolean {
    return environment.isBackendServerAvailable;
  }
}
