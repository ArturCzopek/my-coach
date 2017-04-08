/* tslint:disable:component-class-suffix */
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {PricesService} from "../services/prices.service";
import {NewProduct} from "../../shared/entities/add.entities";
import {PricesModalsService} from "../services/prices-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {BaseModal} from "../../shared/components/base.modal";
import {Http} from "@angular/http";

declare var $: any;

@Component({
  selector: 'coach-product-add-modal',
  templateUrl: 'product-add.modal.html',
  styleUrls: ['./prices.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ProductAddModal extends BaseModal implements OnInit {

  public productToAdd: NewProduct;
  public productId = -1;
  public imageUrl = '';

  @ViewChild("imageFile")
  public imageFile: ElementRef;

  private pricesService: PricesService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector, private http: Http) {
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
    super.initDataBeforeOpenModal();
    this.productToAdd = new NewProduct('', '');
    this.productId = -1;
    this.imageUrl = '';
  }

  public isDataValid(): boolean {
    if (this.productToAdd) {
      return this.productToAdd.productName.length > 0;
    }

    return false;
  }

  public uploadImage() {
    if (this.imageFile.nativeElement.files.length > 0) {
      const file: File = this.imageFile.nativeElement.files[0];

      const input = new FormData();
      input.append("file", file);
      input.append("productId", this.productId);

      this.pricesService.addProductImage(file, this.productId).subscribe(
        productId => {
          this.productId = productId;
          this.imageUrl = this.pricesService.getProductImageUrl(productId);
        }
      );
    }
  }

  public onAddClick() {
    this.pricesService.addProduct(this.productToAdd);
    this.pricesModalsService.callRefreshPage();
    this.onCloseModal();
  }

  public canStoreFiles() {
    this.pricesService.canFilesBeStored();
  }

  public closeModal() {
    super.closeModal();
    this.imageFile.nativeElement.files = [];
  }
}
