/* tslint:disable:component-class-suffix */
import {Component, EventEmitter, OnInit} from "@angular/core";
import {PricesService} from "../services/prices.service";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {NewPrice, ShoppingList} from "../../shared/entities/add.entities";
import {MaterializeAction} from "angular2-materialize";
import {PricesModalsService} from "../services/prices-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {MODAL_PARAMS, DOES_NOT_CONTAIN} from "../../shared/global.values";
import {DateService} from "../../shared/services/date.service";
import {Product} from "../../shared/entities/get.entities";

// TODO REFACTOR THIS SHIT
// TODO add modal super class for closing workaround - $('.lean-overlay').remove(), also for modalactions param

@Component({
  selector: 'coach-shopping-list-modal',
  templateUrl: 'shopping-list.modal.html',
  styleUrls: ['prices.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ShoppingListModal implements OnInit {

  public addShoppingListModalActions = new EventEmitter<string|MaterializeAction>();
  public modalParams: any;
  public datePickerParams: any;

  public shoppingDate: string = '';
  public place: string = '';

  public products: Product[];

  public shoppingListToAdd: ShoppingList;

  public autoCompleteData: any = {data: {}};

  public productNamesForPrices: any = [];

  private pricesService: PricesService;
  private dictionaryService: DictionaryService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector,
              private dateService: DateService) {
    this.pricesService = serviceInjector.getPricesService();
    this.dictionaryService = serviceInjector.getDictionaryService();
    this.products = [];
    this.shoppingListToAdd = new ShoppingList('', []);
  }

  ngOnInit(): void {
    this.modalParams = MODAL_PARAMS;
    this.datePickerParams = this.dictionaryService.getDateDictionarySettings();

    this.pricesModalsService.addShoppingList.subscribe(
      products => {
        this.shoppingListToAdd = new ShoppingList('', []);
        this.products = products;
        this.autoCompleteData = {data: {}};

        for (let product of this.products) {
          this.autoCompleteData.data[product.productName] = product.screenUrl;
        }

        this.addNewEmptyPriceToList();
        this.openShoppingListModal();
      }
    );

    this.productNamesForPrices = [];

  }

  public openShoppingListModal() {
    this.shoppingDate = '';
    this.place = '';
    this.productNamesForPrices = [];
    this.addShoppingListModalActions.emit({action: "modal", params: ['open']});
  }

  public onAddShoppingListClick() {
    this.shoppingListToAdd.shoppingDate = this.dateService.parseStringToDate(this.shoppingDate);
    this.shoppingListToAdd.place = this.place;

    for (let i = 0; i < this.shoppingListToAdd.prices.length; i++) {
      this.shoppingListToAdd.prices[i].productId = this.getProductIdForName(this.productNamesForPrices[i]);
    }

    this.pricesService.addShoppingList(this.shoppingListToAdd);

    this.pricesModalsService.callRefreshPage();
    this.onCloseModal();
  }

  public onCloseModal() {
    this.addShoppingListModalActions.emit({action: "modal", params: ['close']});
  }

  public isDataValid(): boolean {
    return this.products.length > 0 && this.hasEveryProductValidPriceAndQuantity() && this.dateService.isDateValid(this.shoppingDate) && this.place.length > 0;
  }

  public addNewEmptyPriceToList() {
    this.shoppingListToAdd.prices.push(new NewPrice(-1, 0, 0));
    this.productNamesForPrices.push('');
  };

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

  public onDeletePrice(index: number) {
    this.shoppingListToAdd.prices.splice(index, 1);
    this.productNamesForPrices.splice(index, 1);
  }

  public onAddProductClick() {
    this.pricesModalsService.callAddProduct();
  }

  public getProductIdForName(productName: string): number {
    for (let product of this.products) {
      if (product.productName === productName) {
        return product.productId;
      }
    }

    return DOES_NOT_CONTAIN;
  }
}
