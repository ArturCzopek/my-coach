/* tslint:disable:component-class-suffix */
import {Component, EventEmitter, OnInit, AfterViewChecked} from "@angular/core";
import {PricesService} from "../services/prices.service";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {MaterializeAction} from "angular2-materialize";
import {PricesModalsService} from "../services/prices-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {MODAL_PARAMS} from "../../shared/global.values";
import {environment} from "../../../environments/environment";
import {Product} from "../../shared/entities/get.entities";

declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'coach-product-edit-modal',
  templateUrl: 'product-edit.modal.html',
  styleUrls: ['prices.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ProductEditModal implements OnInit, AfterViewChecked {

  public selectedProduct: Product = null;
  public editModalActions = new EventEmitter<string|MaterializeAction>();
  public modalParams: any;

  public productName: string = '';
  public screen: string = '';

  private pricesService: PricesService;
  private dictionaryService: DictionaryService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector) {
    this.pricesService = serviceInjector.getPricesService();
    this.dictionaryService = serviceInjector.getDictionaryService();
  }

  ngOnInit(): void {
    this.modalParams = MODAL_PARAMS;

    this.pricesModalsService.editProduct.subscribe(
      product => {
        this.selectedProduct = product;
        this.productName = this.selectedProduct.productName;
        this.screen = this.selectedProduct.screenUrl;
        this.openEditModal();
      }
    );
  }

  ngAfterViewChecked(): void {
    if (typeof Materialize.updateTextFields === "function") {
      Materialize.updateTextFields();
    }
  }

  public openEditModal() {
    this.editModalActions.emit({action: "modal", params: ['open']});

    if ($('#fab').hasClass('active')) {
      $('#fab a').click();
    }
  }

  public onEditClick() {
    this.selectedProduct.productName = this.productName;
    this.selectedProduct.screenUrl = this.screen;
    this.pricesService.editProduct(this.selectedProduct);
    this.pricesModalsService.callRefreshPage();
    this.onCloseModal();
  }

  public onCloseModal() {
    this.editModalActions.emit({action: "modal", params: ['close']});
  }

  public isDataValid(): boolean {
    return this.productName.length > 0;
  }

  public canStoreFiles() {
    return environment.isBackendServerAvailable;
  }
}
