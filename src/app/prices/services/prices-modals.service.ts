import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {Product, Price} from "../../shared/entities/get.entities";

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

  public callAddProduct() {
    this.addProduct.next(null);
  }
  public callAddPrice(product: Product) {
    this.addPrice.next(product);
  }

  public callAddShoppingList(products: Product[]) {
    this.addShoppingList.next(products);
  }

  public callEditProduct(product: Product) {
    this.editProduct.next(product);
  }

  public callEditPrices(prices: Price[], modalTitle: string) {
    this.editPrices.next({prices: prices, modalTitle: modalTitle});
  }

  public callDeleteProduct(product: Product) {
    this.deleteProduct.next(product);
  }

  public callDeletePrices(prices: Price[], modalTitle: string) {
    this.deletePrices.next({prices: prices, modalTitle: modalTitle});
  }

  public callRefreshPage() {
    this.refreshPage.next(null);
  }
}
