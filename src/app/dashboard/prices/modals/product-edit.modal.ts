/* tslint:disable:component-class-suffix */
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {PricesService} from "../services/prices.service";
import {PricesModalsService} from "../services/prices-modals.service";
import {ServiceInjector} from "../../../shared/services/service.injector";
import {Product} from "../../../shared/entities/get.entities";
import {BaseModal} from "../../../shared/components/base.modal";

declare var $: any;

@Component({
  selector: 'coach-product-edit-modal',
  templateUrl: 'product-edit.modal.html',
  styleUrls: ['./prices.modals.scss', '../../../shared/materialize-upgrades.scss']
})
export class ProductEditModal extends BaseModal implements OnInit {

  public selectedProduct: Product = null;
  public productName = '';
  public imageUrl = '';
  public canStoreFiles: boolean;

  @ViewChild("imageFile")
  public imageFile: ElementRef;

  @ViewChild("imageWrapper")
  public imageWrapper: ElementRef;

  private pricesService: PricesService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector) {
    super(serviceInjector);
    this.pricesService = serviceInjector.getPricesService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.initialization$ = this.pricesModalsService.editProduct.subscribe(
      (product: Product) => {
        this.selectedProduct = product;
        this.openModal();
      }
    );
  }

  public initDataBeforeOpenModal() {
    super.initDataBeforeOpenModal();
    this.productName = this.selectedProduct.productName;
    this.imageUrl = this.pricesService.getProductImageUrl(this.selectedProduct.productId);
    this.canStoreFiles = this.pricesService.canFilesBeStored();
  }

  public isDataValid(): boolean {
    return this.productName.length > 0 && this.errorMessage.length === 0;
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
          this.errorMessage = '';
        },
        error => this.errorMessage = this.dictionaryService.getErrorMessage(error)
      );
    }
  }

  public onEditClick() {
    this.pricesService.editProduct(new Product(this.selectedProduct.productId, this.productName, this.imageUrl)).first().subscribe(
      ok => {
        this.pricesModalsService.callRefreshPage();
        this.errorMessage = '';
        this.closeModal();
      },
      error => this.errorMessage = this.dictionaryService.getErrorMessage(error)
    );
  }

  public closeModal() {
    super.closeModal();

    if (this.imageFile) {
      this.imageFile.nativeElement.files[0] = null;
      this.imageWrapper.nativeElement.value = '';
    }
  }
}
