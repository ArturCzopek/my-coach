import {BaseCardComponent} from "../shared/components/base-card.component";
import {ChangeDetectorRef, Component, Input, OnInit} from "@angular/core";
import {Price, Product} from "../shared/entities/get.entities";
import {PricesService} from "./services/prices.service";
import {PricesModalsService} from "./services/prices-modals.service";
import {ServiceInjector} from "../shared/services/service.injector";
import {DateService} from "../shared/services/date.service";

@Component({
  selector: 'coach-prices-card',
  templateUrl: 'prices-card.component.html',
  styleUrls: ['./prices.scss']
})
export class PricesCardComponent extends BaseCardComponent implements OnInit {

  @Input() productPreview: Product;
  public prices: Price[] = [];
  public imageUrl = '';
  private pricesService: PricesService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector,
              public dateService: DateService, cdr: ChangeDetectorRef) {
    super(cdr);
    this.pricesService = serviceInjector.getPricesService();
  }

  ngOnInit() {
    super.ngOnInit();
    this.loadPrices();
    this.imageUrl = this.pricesService.getProductImageUrl(this.productPreview.productId);
  }

  private loadPrices() {
    this.isLoading = true;
    this.pricesService.getPrices(this.productPreview.productId)
      .subscribe(
        prices => this.prices = this.pricesService.parseFromServer(prices).slice().reverse(),
        error => console.error(error, 'error'),
        () => this.isLoading = false
      );
  }

  onAddPriceClick() {
    this.pricesModalsService.callAddPrice(this.productPreview);
  }

  onEditPricesClick() {
    this.pricesModalsService.callEditPrices(this.prices, this.productPreview.productName);
  }

  onEditProductClick() {
    this.pricesModalsService.callEditProduct(this.productPreview);
  }

  onDeletePricesClick() {
    this.pricesModalsService.callDeletePrices(this.prices, this.productPreview.productName);
  }

  onDeleteProductClick() {
    this.pricesModalsService.callDeleteProduct(this.productPreview);
  }
}

