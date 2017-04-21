/* tslint:disable:component-class-suffix */
import {Component, OnInit} from "@angular/core";
import {ServiceInjector} from "../../shared/services/service.injector";
import {PricesModalsService} from "../services/prices-modals.service";
import {PricesService} from "../services/prices.service";
import {Product} from "../../shared/entities/get.entities";
import {BaseModal} from "../../shared/components/base.modal";

declare var $: any;

@Component({
  selector: 'coach-product-delete-modal',
  templateUrl: 'product-delete.modal.html',
  styleUrls: ['./prices.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ProductDeleteModal extends BaseModal implements OnInit {

  public selectedProduct: Product = null;
  public modalTitle: string;

  private pricesService: PricesService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector) {
    super(serviceInjector);
    this.pricesService = serviceInjector.getPricesService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.initialization$ = this.pricesModalsService.deleteProduct.subscribe(
      (product: Product) => {
        this.selectedProduct = product;
        this.openModal();
      }
    );
  };

  public initDataBeforeOpenModal() {
    super.initDataBeforeOpenModal();
    this.modalTitle = this.selectedProduct.productName;
  }

  public isDataValid(): boolean {
    return true;
  }

  public onDeleteClick() {
    this.pricesService.deleteProduct(this.selectedProduct).first().subscribe(
      ok => this.pricesModalsService.callRefreshPage(),
      error => console.error(error, 'error'),
      () => this.closeModal()
    );
  }
}
