import {Injectable, Injector} from "@angular/core";
import {PricesService} from "./prices.service";
import {PRODUCTS_LIST} from "../../shared/entities/mock-data/products.mock-data";
import {ServiceInjector} from "../../shared/services/service.injector";
import {Observable} from "rxjs/Observable";
import {Price, Product} from "../../shared/entities/get.entities";
import {NewPrice, NewProduct, ShoppingList} from "../../shared/entities/add.entities";
import {PRICES_LIST} from "../../shared/entities/mock-data/prices.mock-data";

@Injectable()
export class PricesMockService extends PricesService {

  private newId: number = PRODUCTS_LIST.length;
  private newPriceId: number = -1;

  constructor(private injector: Injector) {
    super(injector.get(ServiceInjector));

    for (const prices of PRICES_LIST) {
      this.newPriceId += prices.length;
    }
  }

  getProductPreviews(): Observable<Product[]> {
    return Observable.create(observer => {
      // timeout is simulation of 'getting from http'
      setTimeout(() => {
        observer.next(PRODUCTS_LIST);
      }, 500);

      setTimeout(() => {
        observer.complete();
      }, 600);
    });
  }

  getPrices(productPreview: Product): Observable<Price[]> {

    let pricesToReturn: Price[] = [];

    for (let i = 0; i < PRICES_LIST.length; i++) {
      if (PRICES_LIST[i].length > 0 && PRICES_LIST[i][0].productId === productPreview.productId) {
        pricesToReturn = PRICES_LIST[i];
        break;
      }
    }

    return Observable.create(observer => {
      // timeout is simulation of 'getting from http'
      setTimeout(() => {
        observer.next(pricesToReturn);
      }, 500);

      setTimeout(() => {
        observer.complete();
      }, 600);
    });
  }

  addProduct(productToAdd: NewProduct): void {
    this.newId++;
    const productId: number = this.newId;
    const product: Product = new Product(productId, productToAdd.productName, productToAdd.screen, 0);
    PRICES_LIST.push([]);
    PRODUCTS_LIST.push(product);
  }

  addPrice(priceToAdd: NewPrice): void {

    let prodIdInArray = 0;

    for (; prodIdInArray <= PRODUCTS_LIST.length; prodIdInArray++) {
      if (PRODUCTS_LIST[prodIdInArray].productId === priceToAdd.productId) {
        break;
      }
    }

    if (prodIdInArray === PRODUCTS_LIST.length) {
      return;
    }

    this.newPriceId++;
    const price: Price = new Price(this.newPriceId, priceToAdd.priceDate, priceToAdd.place, priceToAdd.quantity,
                                    priceToAdd.value, priceToAdd.productId);
    PRICES_LIST[prodIdInArray].push(price);
  }

  addShoppingList(shoppingList: ShoppingList): void {
    for (const price of shoppingList.prices) {
      price.priceDate = shoppingList.shoppingDate;
      price.place = shoppingList.place;
      this.addPrice(price);
    }
  }

  editPrices(pricesToEdit: Price[]): void {

    let prodIdInArray = 0;

    for (; prodIdInArray <= PRODUCTS_LIST.length; prodIdInArray++) {
      if (PRODUCTS_LIST[prodIdInArray].productId === pricesToEdit[0].productId) {
        break;
      }
    }

    const priceList: Price[] = PRICES_LIST[prodIdInArray];

    for (let i = 0; i < priceList.length; i++) {
      for (const price of pricesToEdit) {
        if (price.priceId === priceList[i].priceId) {
          priceList[i] = price;
          break;
        }
      }
    }
  }

  editProduct(productToEdit: Product): void {

    for (let i = 0; i < PRODUCTS_LIST.length; i++) {
      if (PRODUCTS_LIST[i].productId === productToEdit.productId) {
        PRODUCTS_LIST[i] = productToEdit;
        break;
      }
    }
  }

  deletePrices(pricesToDelete: Price[]): void {
    let prodIdInArray = 0;

    for (; prodIdInArray <= PRODUCTS_LIST.length; prodIdInArray++) {
      if (PRODUCTS_LIST[prodIdInArray].productId === pricesToDelete[0].productId) {
        break;
      }
    }

    const priceList: Price[] = PRICES_LIST[prodIdInArray];

    for (const price of pricesToDelete) {
      for (let i = 0; i < priceList.length; i++) {
        if (price.priceId === priceList[i].priceId) {
          priceList.splice(i, 1);
          break;
        }
      }
    }
  }

  deleteProduct(productToDelete: Product): void {

    for (let i = 0; i < PRODUCTS_LIST.length; i++) {
      if (PRODUCTS_LIST[i].productId === productToDelete.productId) {
        PRODUCTS_LIST.splice(i, 1);
        PRICES_LIST.splice(i, 1);
        break;
      }
    }
  }
}
