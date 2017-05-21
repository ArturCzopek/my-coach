import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {Product} from "../../shared/entities/get.entities";
import {PricesService} from "./services/prices.service";
import {PricesModalsService} from "./services/prices-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";

@Component({
  selector: 'coach-prices',
  templateUrl: './prices-list.component.html',
  styleUrls: ['./prices.scss', '../../shared/materialize-upgrades.scss']
})
export class PricesListComponent implements OnInit, AfterViewInit {

  public isLoading: boolean;

  private productPreviews: Product[];
  private pricesService: PricesService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector,
              private changeDetectorRef: ChangeDetectorRef) {
    this.pricesService = serviceInjector.getPricesService();
  }

  ngOnInit() {
    this.loadProductPreviews();
    this.pricesModalsService.refreshPage.subscribe(() => this.ngOnInit());
  }

  ngAfterViewInit(): void {
    setTimeout(1000, () => this.changeDetectorRef.detach());
  }

  private loadProductPreviews() {
    this.isLoading = true;
    this.pricesService.getProductPreviews()
      .subscribe(
        previews => this.productPreviews = previews.slice().reverse(),
        error => console.error('error', error),
        () => {
          this.isLoading = false;
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  onAddShoppingListClick() {
    this.pricesModalsService.callAddShoppingList(this.productPreviews);
  }

  onAddProductClick() {
    this.pricesModalsService.callAddProduct();
  }
}
