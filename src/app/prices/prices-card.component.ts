import {BaseCardComponent} from "../shared/components/base-card.component";
import {Component, Input} from "@angular/core";
import {Product, Price} from "../shared/entities/get.entities";
import {PricesService} from "./services/prices.service";
import {PricesModalsService} from "./services/prices-modals.service";
import {ServiceInjector} from "../shared/services/service.injector";
import {DateService} from "../shared/services/date.service";

@Component({
  selector: 'coach-prices-card',
  templateUrl: 'prices-card.component.html',
  styleUrls: ['./prices.scss', '../shared/materialize-upgrades.scss']
})
export class PricesCardComponent extends BaseCardComponent {

  @Input() productPreview: Product;
  public prices: Price[] = [];
  private pricesService: PricesService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector, public dateService: DateService) {
    super();
    this.pricesService = serviceInjector.getPricesService();
  }

  ngOnInit() {
    super.ngOnInit();
    this.loadPrices();
  }

  private loadPrices() {
    this.isLoading = true;
    this.pricesService.getPrices(this.productPreview)
      .subscribe(
        prices => {
          this.prices = prices.slice().reverse();
        },
        () => {
        },
        () => {
          this.isLoading = false;
        }
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

