/* tslint:disable:component-class-suffix */
import {OnInit, Component, EventEmitter} from "@angular/core";
import {MaterializeAction} from "angular2-materialize";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {MODAL_PARAMS} from "../../shared/global.values";
import {PricesModalsService} from "../services/prices-modals.service";
import {PricesService} from "../services/prices.service";
import {Product} from "../../shared/entities/get.entities";

@Component({
  selector: 'coach-product-delete-modal',
  templateUrl: 'product-delete.modal.html',
  styleUrls: ['prices.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ProductDeleteModal implements OnInit {

  public selectedProduct: Product = null;
  public deleteModalActions = new EventEmitter<string|MaterializeAction>();
  public modalParams: any;
  public modalTitle: string;

  private pricesService: PricesService;
  private dictionaryService: DictionaryService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector) {
    this.pricesService = serviceInjector.getPricesService();
    this.dictionaryService = serviceInjector.getDictionaryService();
  }

  ngOnInit(): void {
    this.modalParams = MODAL_PARAMS;

    this.pricesModalsService.deleteProduct.subscribe(
      (product: Product) => {
        this.selectedProduct = product;
        this.modalTitle = this.selectedProduct.productName;
        this.openDeleteModal();
      }
    );
  };

  public openDeleteModal() {
      this.deleteModalActions.emit({action: "modal", params: ['open']});
  }

  public onDeleteClick() {
    this.pricesService.deleteProduct(this.selectedProduct);
    this.pricesModalsService.callRefreshPage();
    this.onCloseModal();
  }

  public onCloseModal() {
    this.deleteModalActions.emit({action: "modal", params: ['close']});
  }
}
