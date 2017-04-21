import {DictionaryService} from "../../shared/services/dictionary.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {Inject} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Price, Product} from "../../shared/entities/get.entities";
import {NewPrice, NewProduct, ShoppingList} from "../../shared/entities/add.entities";
import {environment} from "../../../environments/environment";
import {DateService} from "../../shared/services/date.service";

export abstract class PricesService {

  private dictionaryService: DictionaryService;
  private dateService: DateService;

  constructor(@Inject(ServiceInjector) serviceInjector: ServiceInjector) {
    this.dictionaryService = serviceInjector.getDictionaryService();
    this.dateService = serviceInjector.getDateService();
  }

  abstract getProductPreviews(): Observable<Product[]>;

  abstract getPrices(productId: number): Observable<Price[]>;

  abstract getProductImageUrl(productId: number): string;

  abstract addProductImage(file: any, productId: number): Observable<number>;

  abstract addProduct(productToAdd: NewProduct): Observable<any>;

  abstract addPrice(priceToAdd: NewPrice): Observable<any>;

  abstract addShoppingList(shoppingList: ShoppingList): Observable<any>;

  abstract deletePrices(pricesToDelete: Price[]): Observable<any>;

  abstract deleteProduct(productToDelete: Product): Observable<any>;

  abstract editPrices(pricesToEdit: Price[]): Observable<any>;

  abstract editProduct(productToEdit: Product): Observable<any>;

  public canFilesBeStored(): boolean {
    return environment.isBackendServerAvailable;
  }

  public parseFromServer(prices: Price[]): Price[] {
    prices.forEach(price => {
      if (typeof price.priceDate === "string") {
        price.priceDate = this.dateService.parseStringFromServerToDate(price.priceDate);
      }
    });

    return prices;
  }
}
