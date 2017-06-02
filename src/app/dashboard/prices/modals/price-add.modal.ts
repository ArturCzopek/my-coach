/* tslint:disable:component-class-suffix */
import {Component, OnInit} from "@angular/core";
import {PricesService} from "../services/prices.service";
import {NewPrice} from "../../../shared/entities/add.entities";
import {PricesModalsService} from "../services/prices-modals.service";
import {ServiceInjector} from "../../../shared/services/service.injector";
import {DateService} from "../../../shared/services/date.service";
import {Product} from "../../../shared/entities/get.entities";
import {BaseModal} from "../../../shared/components/base.modal";

@Component({
  selector: 'coach-price-add-modal',
  templateUrl: 'price-add.modal.html',
  styleUrls: ['./prices.modals.scss', '../../../shared/materialize-upgrades.scss']
})
export class PriceAddModal extends BaseModal implements OnInit {

  public place = '';
  public priceDate = '';
  public price = 0;
  public quantity = 1;
  public priceToAdd: NewPrice;
  public product: Product;

  private pricesService: PricesService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector,
              private dateService: DateService) {
    super(serviceInjector);
    this.pricesService = serviceInjector.getPricesService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.initialization$ = this.pricesModalsService.addPrice.subscribe(
      (product: Product) => {
        this.product = product;
        this.openModal();
      }
    );
  }

  public initDataBeforeOpenModal() {
    super.initDataBeforeOpenModal();

    this.place = '';
    this.priceDate = '';
    this.price = 0;
    this.quantity = 1;
  }

  public isDataValid(): boolean {
    return this.quantity > 0 && this.price > 0 && this.dateService.isDateValid(this.priceDate);
  }

  public onAddClick() {
    this.priceToAdd = new NewPrice(this.product.productId, this.price, this.quantity,
      this.place, this.dateService.parseStringToDate(this.priceDate));
    this.pricesService.addPrice(this.priceToAdd).first().subscribe(
      ok => this.pricesModalsService.callRefreshPage(),
      error => console.error(error, 'error'),
      () => this.closeModal()
    );
  }

  public getProductName(): string {
    if (this.product) {
      return this.product.productName;
    }

    return '';
  }
}
