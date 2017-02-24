import {Component, OnInit} from "@angular/core";
import {Product} from "../shared/entities/get.entities";
import {PricesService} from "./services/prices.service";
import {PricesModalsService} from "./services/prices-modals.service";
import {ServiceInjector} from "../shared/services/service.injector";

@Component({
  selector: 'coach-prices',
  templateUrl: './prices-list.component.html',
  styleUrls: ['prices.scss', '../shared/materialize-upgrades.scss']
})
export class PricesListComponent implements OnInit {

  public isLoading: boolean;

  private productPreviews: Product[];
  private pricesService: PricesService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector) {
    this.pricesService = serviceInjector.getPricesService();
  }

  ngOnInit() {
    this.loadProductPreviews();
    this.pricesModalsService.refreshPage.subscribe(() => this.ngOnInit());
  }

  private loadProductPreviews() {
    this.isLoading = true;
    this.pricesService.getProductPreviews()
      .subscribe(
        previews => {
          this.productPreviews = previews.slice().reverse();
        },
        () => {
        },
        () => {
          this.isLoading = false;
        }
      );
  }

  onAddShoppingListClick() {
    this.pricesModalsService.callAddShoppingList();
  }

  onAddProductClick() {
    this.pricesModalsService.callAddProduct();
  }
}
