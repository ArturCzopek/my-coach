/* tslint:disable:component-class-suffix */
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {PricesService} from "../services/prices.service";
import {NewProduct} from "../../shared/entities/add.entities";
import {PricesModalsService} from "../services/prices-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {environment} from "../../../environments/environment";
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

  @ViewChild("photoFile") photoFile: ElementRef;
  public uploadUrl = "/product/uploadPhoto";
  public imagesUrl = "/images/";

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
    this.productToAdd = new NewProduct('', '');

    if ($('#fab').hasClass('active')) {
      $('#fab a').click();
    }
  }

  public isDataValid(): boolean {
    if (this.productToAdd) {
      return this.productToAdd.productName.length > 0;
    }
    return false;
  }

  public uploadPhoto() {
    if (this.photoFile.nativeElement.files.length > 0) {
      const file: File = this.photoFile.nativeElement.files[0];

      const input = new FormData();
      input.append("file", file);

      this.http.post(environment.url + this.uploadUrl, input).subscribe(
        res => {
          this.productToAdd.screen = environment.url + this.imagesUrl + res['_body'];
        },
        err => {
          console.log("not ok");
          console.log(err);
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
    return true;
  }
}
