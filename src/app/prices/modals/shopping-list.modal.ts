/* tslint:disable:component-class-suffix */
import {Component, OnInit} from "@angular/core";
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
  styleUrls: ['./prices.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ShoppingListModal extends BaseModal implements OnInit {

  public shoppingDate= '';
  public place= '';
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
    super.initDataBeforeOpenModal();

    this.shoppingListToAdd = new ShoppingList('', []);
    this.addNewEmptyPriceToList();
    this.shoppingDate = '';
    this.place = '';
    this.productNamesForPrices = [];
    this.autoCompleteData = {data: {}};

    for (const product of this.products) {
      this.autoCompleteData.data[product.productName] = product.imageUrl;
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
    for (const product of this.products) {
      if (product.productName === productName) {
        return product.productId;
      }
    }

    return DOES_NOT_CONTAIN;
  }

  private hasEveryProductValidPriceAndQuantity(): boolean {
    return this.shoppingListToAdd.prices.every(price => price.value > 0 && price.quantity > 0);
  }

  private hasEveryProductValidName(): boolean {
    return this.productNamesForPrices.every(productName => this.getProductIdForName(productName) !== DOES_NOT_CONTAIN);
  }
}
