import {Injectable, Injector} from "@angular/core";
import {PricesService} from "./prices.service";
import {PRODUCTS_LIST} from "../../shared/entities/mock-data/products.mock-data";
import {ServiceInjector} from "../../shared/services/service.injector";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Price, Product} from "../../shared/entities/get.entities";
import {NewPrice, NewProduct, ShoppingList} from "../../shared/entities/add.entities";
import {PRICES_LIST} from "../../shared/entities/mock-data/prices.mock-data";
import "rxjs/add/operator/first";


@Injectable()
export class PricesMockService extends PricesService {

  private newId: number = PRODUCTS_LIST.length + 1;
  private newPriceId: number = PRICES_LIST.map(prices => prices.length).reduce(this.reduce) + 1;

  constructor(private injector: Injector) {
    super(injector.get(ServiceInjector));
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

  getPrices(productId: number): Observable<Price[]> {

    const pricesToReturn: Price[] = PRICES_LIST.find(priceList =>
        priceList.length > 0 && priceList[0].productId === productId
      ) || [];

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

  getProductImageUrl(productId: number): string {
    return PRODUCTS_LIST.find(product => product.productId === productId).image;
  }

  addProductImage(file: any, productId: number): Observable<number> {
    console.log("PricesMockService#addProductImage not implemented");
    return null;
  }

  addProduct(productToAdd: NewProduct): Observable<any> {
    const productId: number = this.newId;
    this.newId++;
    const product: Product = new Product(productId, productToAdd.productName, productToAdd.image, 0);
    PRICES_LIST.push([]);
    PRODUCTS_LIST.push(product);
    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }

  addPrice(priceToAdd: NewPrice): Observable<any> {

    const prodIdInArray = PRODUCTS_LIST.findIndex(product => product.productId === priceToAdd.productId);

    const price: Price = new Price(this.newPriceId, priceToAdd.priceDate, priceToAdd.place, priceToAdd.quantity,
      priceToAdd.value, priceToAdd.productId);

    this.newPriceId++;
    PRICES_LIST[prodIdInArray].push(price);
    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }

  addShoppingList(shoppingList: ShoppingList): Observable<any> {
    for (const price of shoppingList.prices) {
      price.priceDate = shoppingList.shoppingDate;
      price.place = shoppingList.place;
      this.addPrice(price);
    }

    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }

  deletePrices(pricesToDelete: Price[]): Observable<any> {
    const prodIdInArray = PRODUCTS_LIST.findIndex(product => product.productId === pricesToDelete[0].productId);
    const priceList: Price[] = PRICES_LIST[prodIdInArray];

    for (const price of pricesToDelete) {
      for (let i = 0; i < priceList.length; i++) {
        if (price.priceId === priceList[i].priceId) {
          priceList.splice(i, 1);
          break;
        }
      }
    }

    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }

  deleteProduct(productToDelete: Product): Observable<any> {
    const productIndex = PRODUCTS_LIST.findIndex(product => product.productId === productToDelete.productId);

    PRODUCTS_LIST.splice(productIndex, 1);
    PRICES_LIST.splice(productIndex, 1);

    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }

  editPrices(pricesToEdit: Price[]): Observable<any> {

    if (!pricesToEdit || pricesToEdit.length === 0) {
      return Observable.create(observer => {
        observer.next(false);
        observer.complete();
      });
    }

    const prodIdInArray = PRODUCTS_LIST.findIndex(product => product.productId === pricesToEdit[0].productId);

    const priceList: Price[] = PRICES_LIST[prodIdInArray];

    for (let i = 0; i < priceList.length; i++) {
      for (const price of pricesToEdit) {
        if (price.priceId === priceList[i].priceId) {
          priceList[i] = price;
          break;
        }
      }
    }

    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }

  editProduct(productToEdit: Product): Observable<any> {
    const prodIdInArray = PRODUCTS_LIST.findIndex(product => product.productId === productToEdit.productId);
    PRODUCTS_LIST[prodIdInArray] = productToEdit;

    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }

  private reduce(prevVal, currVal): number {
    return prevVal + currVal;
  }
}
