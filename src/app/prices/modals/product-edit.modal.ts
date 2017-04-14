/* tslint:disable:component-class-suffix */
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {PricesService} from "../services/prices.service";
import {PricesModalsService} from "../services/prices-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {Product} from "../../shared/entities/get.entities";
import {BaseModal} from "../../shared/components/base.modal";

declare var $: any;

@Component({
  selector: 'coach-product-edit-modal',
  templateUrl: 'product-edit.modal.html',
  styleUrls: ['./prices.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ProductEditModal extends BaseModal implements OnInit {

  public selectedProduct: Product = null;
  public productName = '';
  public imageUrl = '';

  @ViewChild("imageFile")
  public imageFile: ElementRef;

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
    super.initDataBeforeOpenModal();
    this.productName = this.selectedProduct.productName;
    this.imageUrl = this.pricesService.getProductImageUrl(this.selectedProduct.productId);
  }

  public isDataValid(): boolean {
    return this.productName.length > 0;
  }
  public uploadImage() {
    if (this.imageFile.nativeElement.files.length > 0) {
      const file: File = this.imageFile.nativeElement.files[0];

      const input = new FormData();
      input.append("file", file);
      input.append("productId", this.selectedProduct.productId);

      this.pricesService.addProductImage(file, this.selectedProduct.productId).subscribe(
        productId => {
          this.imageUrl = this.pricesService.getProductImageUrl(productId);
        }
      );
    }
  }

  public onEditClick() {
    this.selectedProduct.productName = this.productName;
    this.selectedProduct.image = this.imageUrl;
    this.pricesService.editProduct(this.selectedProduct);
    this.pricesModalsService.callRefreshPage();
    this.closeModal();
  }

  public canStoreFiles() {
    this.pricesService.canFilesBeStored();
  }

  public closeModal() {
    super.closeModal();
    this.imageFile.nativeElement.files = [];
  }
}
