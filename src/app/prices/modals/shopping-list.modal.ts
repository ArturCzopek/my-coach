/* tslint:disable:component-class-suffix */
import {Component} from "@angular/core";
import {PricesService} from "../services/prices.service";
import {NewPrice, ShoppingList} from "../../shared/entities/add.entities";
import {PricesModalsService} from "../services/prices-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {DOES_NOT_CONTAIN} from "../../shared/global.values";
import {DateService} from "../../shared/services/date.service";
import {Product} from "../../shared/entities/get.entities";
import {BaseModal} from "../../shared/components/base.modal";

declare var $: any;

@Component({
  selector: 'coach-shopping-list-modal',
  templateUrl: 'shopping-list.modal.html',
  styleUrls: ['prices.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ShoppingListModal extends BaseModal {

  public shoppingDate: string = '';
  public place: string = '';
  public products: Product[];
  public shoppingListToAdd: ShoppingList;
  public autoCompleteData: any = {data: {}};
  public productNamesForPrices: any = [];

  private pricesService: PricesService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector,
              private dateService: DateService) {
    super(serviceInjector);
    this.pricesService = serviceInjector.getPricesService();
    this.products = [];
    this.shoppingListToAdd = new ShoppingList('', []);
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.pricesModalsService.addShoppingList.subscribe(
      products => {
        this.products = products;
        this.openModal();
      }
    );

    this.productNamesForPrices = [];

  }

  public initDataBeforeOpenModal() {
    this.shoppingListToAdd = new ShoppingList('', []);
    this.addNewEmptyPriceToList();
    this.shoppingDate = '';
    this.place = '';
    this.productNamesForPrices = [];
    this.autoCompleteData = {data: {}};

    for (let product of this.products) {
      this.autoCompleteData.data[product.productName] = product.screenUrl;
    }

    if ($('#fab').hasClass('active')) {
      $('#fab a').click();
    }
  }

  public isDataValid(): boolean {
    return this.products.length > 0 && this.hasEveryProductValidPriceAndQuantity()
      && this.hasEveryProductValidName() && this.dateService.isDateValid(this.shoppingDate)
      && this.place.length > 0;
  }

  public onAddShoppingListClick() {
    this.shoppingListToAdd.shoppingDate = this.dateService.parseStringToDate(this.shoppingDate);
    this.shoppingListToAdd.place = this.place;

    for (let i = 0; i < this.shoppingListToAdd.prices.length; i++) {
      this.shoppingListToAdd.prices[i].productId = this.getProductIdForName(this.productNamesForPrices[i]);
    }

    this.pricesService.addShoppingList(this.shoppingListToAdd);

    this.pricesModalsService.callRefreshPage();
    this.closeModal();
  }

  public onAddProductClick() {
    this.pricesModalsService.callAddProduct();
  }

  public addNewEmptyPriceToList() {
    this.shoppingListToAdd.prices.push(new NewPrice(-1, 0, 0));
    this.productNamesForPrices.push('');
  };

  public onDeletePrice(index: number) {
    this.shoppingListToAdd.prices.splice(index, 1);
    this.productNamesForPrices.splice(index, 1);
  }

  private getProductIdForName(productName: string): number {
    for (let product of this.products) {
      if (product.productName === productName) {
        return product.productId;
      }
    }

    return DOES_NOT_CONTAIN;
  }

  private hasEveryProductValidPriceAndQuantity(): boolean {

    if (!this.shoppingListToAdd.prices) {
      return false;
    }

    for (let price of this.shoppingListToAdd.prices) {
      if (price.value <= 0 || price.quantity <= 0) {
        return false;
      }
    }

    return true;
  }

  private hasEveryProductValidName(): boolean {

    for (let productName of this.productNamesForPrices) {
      if (this.getProductIdForName(productName) === DOES_NOT_CONTAIN) {
        return false;
      }
    }

    return true;
  }
}
