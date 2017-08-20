import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {Product} from "../../shared/entities/get.entities";
import {PricesService} from "./services/prices.service";
import {PricesModalsService} from "./services/prices-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'coach-prices',
  templateUrl: './prices-list.component.html',
  styleUrls: ['./prices.scss', '../../shared/materialize-upgrades.scss']
})
export class PricesListComponent implements OnInit, AfterViewInit, OnDestroy {

  public isLoading: boolean;

  private productPreviews: Product[];
  private pricesService: PricesService;
  private refresh$: Subscription = null;


  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector,
              private changeDetectorRef: ChangeDetectorRef) {
    this.pricesService = serviceInjector.getPricesService();
  }

  ngOnInit() {
    this.loadProductPreviews();
    if (this.refresh$ == null) {
      this.refresh$ = this.pricesModalsService.refreshPage.subscribe(() => this.ngOnInit());
    }
  }

  ngAfterViewInit(): void {
    setTimeout(1000, () => this.changeDetectorRef.detach());
  }

  ngOnDestroy() {
    this.refresh$.unsubscribe();
    this.refresh$ = null;
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
