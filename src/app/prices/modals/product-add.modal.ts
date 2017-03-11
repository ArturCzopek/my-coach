/* tslint:disable:component-class-suffix */
import {Component} from "@angular/core";
import {PricesService} from "../services/prices.service";
import {NewProduct} from "../../shared/entities/add.entities";
import {PricesModalsService} from "../services/prices-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {environment} from "../../../environments/environment";
import {BaseModal} from "../../shared/components/base.modal";

declare var $: any;

@Component({
  selector: 'coach-product-add-modal',
  templateUrl: 'product-add.modal.html',
  styleUrls: ['prices.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ProductAddModal extends BaseModal {

  public productName: string = '';
  public screen: any = '';
  public productToAdd: NewProduct;

  private pricesService: PricesService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector) {
    super(serviceInjector);
    this.pricesService = serviceInjector.getPricesService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.pricesModalsService.addProduct.subscribe(
      () => {
        this.openModal();
      }
    );
  }

  public initDataBeforeOpenModal() {
    this.productName = '';
    this.screen = '';

    if ($('#fab').hasClass('active')) {
      $('#fab a').click();
    }
  }

  public isDataValid(): boolean {
    return this.productName.length > 0;
  }

  public onAddClick() {
    this.productToAdd = new NewProduct(this.productName, this.screen);
    this.pricesService.addProduct(this.productToAdd);
    this.pricesModalsService.callRefreshPage();
    this.onCloseModal();
  }

  public canStoreFiles() {
    return environment.isBackendServerAvailable;
  }
}
