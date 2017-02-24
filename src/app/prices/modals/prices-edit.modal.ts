/* tslint:disable:component-class-suffix */
import {Component, OnInit, EventEmitter} from "@angular/core";
import {Price} from "../../shared/entities/get.entities";
import {MaterializeAction} from "angular2-materialize";
import {PricesService} from "../services/prices.service";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {PricesModalsService} from "../services/prices-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {MODAL_PARAMS, DOES_NOT_CONTAIN} from "../../shared/global.values";

@Component({
  selector: 'coach-prices-edit-modal',
  templateUrl: 'prices-edit.modal.html',
  styleUrls: ['prices.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class PricesEditModal implements OnInit {

  public selectedPrices: Price[] = [];
  public editModalActions = new EventEmitter<string|MaterializeAction>();
  public modalParams: any;
  public pricesToEditIndexes: number[] = [];
  public modalTitle: string;

  private pricesService: PricesService;
  private dictionaryService: DictionaryService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector) {
    this.pricesService = serviceInjector.getPricesService();
    this.dictionaryService = serviceInjector.getDictionaryService();
  }

  ngOnInit(): void {
    this.modalParams = MODAL_PARAMS;

    this.pricesModalsService.editPrices.subscribe(
      (data: any) => {
        this.selectedPrices = data.prices;
        this.pricesToEditIndexes = [];
        this.modalTitle = data.modalTitle;
        this.openEditModal();
      }
    );
  }

  public openEditModal() {
    this.editModalActions.emit({action: "modal", params: ['open']});
  }

  public onEditClick() {
    if (this.pricesToEditIndexes.length > 0) {
      const pricesToEdit: Price[] = [];

      this.pricesToEditIndexes.forEach(index => {
        pricesToEdit.push(this.selectedPrices[index]);
        this.pricesService.editPrices(pricesToEdit);
      });

      this.pricesModalsService.callRefreshPage();
    }

    this.onCloseModal();
  }

  public onCloseModal() {
    this.editModalActions.emit({action: "modal", params: ['close']});
  }

  public addPriceIndexToChanged(price: number) {
    if (this.pricesToEditIndexes.indexOf(price) === DOES_NOT_CONTAIN) {
      this.pricesToEditIndexes.push(price);
    }
  }
}
