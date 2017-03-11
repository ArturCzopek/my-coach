/* tslint:disable:component-class-suffix */
import {Component} from "@angular/core";
import {PricesService} from "../services/prices.service";
import {PricesModalsService} from "../services/prices-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {environment} from "../../../environments/environment";
import {Product} from "../../shared/entities/get.entities";
import {BaseModal} from "../../shared/components/base.modal";

declare var $: any;

@Component({
  selector: 'coach-product-edit-modal',
  templateUrl: 'product-edit.modal.html',
  styleUrls: ['prices.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ProductEditModal extends BaseModal {

  public selectedProduct: Product = null;
  public productName: string = '';
  public screen: string = '';

  private pricesService: PricesService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector) {
    super(serviceInjector);
    this.pricesService = serviceInjector.getPricesService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.pricesModalsService.editProduct.subscribe(
      product => {
        this.selectedProduct = product;
        this.openModal();
      }
    );
  }

  public initDataBeforeOpenModal() {
    this.productName = this.selectedProduct.productName;
    this.screen = this.selectedProduct.screenUrl;
  }

  public isDataValid(): boolean {
    return this.productName.length > 0;
  }

  public onEditClick() {
    this.selectedProduct.productName = this.productName;
    this.selectedProduct.screenUrl = this.screen;
    this.pricesService.editProduct(this.selectedProduct);
    this.pricesModalsService.callRefreshPage();
    this.closeModal();
  }

  public canStoreFiles() {
    return environment.isBackendServerAvailable;
  }
}
