/* tslint:disable:component-class-suffix */
import {Component, EventEmitter, OnInit} from "@angular/core";
import {PricesService} from "../services/prices.service";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {MaterializeAction} from "angular2-materialize";
import {NewProduct} from "../../shared/entities/add.entities";
import {PricesModalsService} from "../services/prices-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {MODAL_PARAMS} from "../../shared/global.values";
import {environment} from "../../../environments/environment";

declare var $: any;

@Component({
  selector: 'coach-product-add-modal',
  templateUrl: 'product-add.modal.html',
  styleUrls: ['prices.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ProductAddModal implements OnInit {

  public addModalActions = new EventEmitter<string|MaterializeAction>();
  public modalParams: any;

  public productName: string;
  public screen: any;

  public productToAdd: NewProduct;

  private pricesService: PricesService;
  private dictionaryService: DictionaryService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector) {
    this.pricesService = serviceInjector.getPricesService();
    this.dictionaryService = serviceInjector.getDictionaryService();
    this.productName = '';
    this.screen = '';
  }

  ngOnInit(): void {
    this.modalParams = MODAL_PARAMS;

    this.pricesModalsService.addProduct.subscribe(
      () => {
        this.openAddModal();
      }
    );
  }

  public openAddModal() {
    this.productName = '';
    this.screen = '';
    this.addModalActions.emit({action: "modal", params: ['open']});

    if ($('#fab').hasClass('active')) {
      $('#fab a').click();
    }
  }

  public onAddClick() {
    this.productToAdd = new NewProduct(this.productName, this.screen);
    this.pricesService.addProduct(this.productToAdd);
    this.pricesModalsService.callRefreshPage();
    this.onCloseModal();
  }

  public onCloseModal() {
    this.addModalActions.emit({action: "modal", params: ['close']});
  }

  public isDataValid(): boolean {
    return this.productName.length > 0;
  }

  public canStoreFiles() {
    return environment.isBackendServerAvailable;
  }
}
