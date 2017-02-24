/* tslint:disable:component-class-suffix */
import {Component, EventEmitter, OnInit} from "@angular/core";
import {PricesService} from "../services/prices.service";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {NewPrice} from "../../shared/entities/add.entities";
import {MaterializeAction} from "angular2-materialize";
import {PricesModalsService} from "../services/prices-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {MODAL_PARAMS} from "../../shared/global.values";
import {DateService} from "../../shared/services/date.service";
import {Product} from "../../shared/entities/get.entities";

@Component({
  selector: 'coach-price-add-modal',
  templateUrl: 'price-add.modal.html',
  styleUrls: ['prices.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class PriceAddModal implements OnInit {

  public addModalActions = new EventEmitter<string|MaterializeAction>();
  public modalParams: any;
  public datePickerParams: any;

  public place: string;
  public quantity: number;
  public price: number;
  public priceDate: string;

  public priceToAdd: NewPrice;
  public product: Product;

  private pricesService: PricesService;
  private dictionaryService: DictionaryService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector,
              private dateService: DateService) {
    this.pricesService = serviceInjector.getPricesService();
    this.dictionaryService = serviceInjector.getDictionaryService();
    this.place = '';
    this.priceDate = '';
    this.price = 0;
    this.quantity = 1;
  }

  ngOnInit(): void {
    this.modalParams = MODAL_PARAMS;
    this.datePickerParams = this.dictionaryService.getDateDictionarySettings();

    this.pricesModalsService.addPrice.subscribe(
      product => {
        this.product = product;
        this.openAddModal();
      }
    );
  }

  public openAddModal() {
    this.place = '';
    this.priceDate = '';
    this.price = 0;
    this.quantity = 1;
    this.addModalActions.emit({action: "modal", params: ['open']});

  }

  public onAddClick() {
    this.priceToAdd = new NewPrice(this.product.productId, this.price, this.quantity,
      this.place, this.dateService.parseStringToDate(this.priceDate));
    this.pricesService.addPrice(this.priceToAdd);
    this.pricesModalsService.callRefreshPage();
    this.onCloseModal();
  }

  public onCloseModal() {
    this.addModalActions.emit({action: "modal", params: ['close']});
  }

  public isDataValid(): boolean {
    return this.quantity > 0 && this.price > 0 && this.dateService.isDateValid(this.priceDate);
  }

  public getProductName(): string {
    if (this.product) {
      return this.product.productName;
    }

    return '';
  }
}
