/* tslint:disable:component-class-suffix */
import {OnInit, Component, EventEmitter} from "@angular/core";
import {Price} from "../../shared/entities/get.entities";
import {PricesService} from "../services/prices.service";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {PricesModalsService} from "../services/prices-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {DateService} from "../../shared/services/date.service";
import {MODAL_PARAMS} from "../../shared/global.values";
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'coach-prices-delete-modal',
  templateUrl: 'prices-delete.modal.html',
  styleUrls: ['prices.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class PricesDeleteModal implements OnInit {

  public selectedPrices: Price[] = [];
  public checkboxesForPrices: boolean[] = [];
  public deleteModalActions = new EventEmitter<string|MaterializeAction>();
  public modalParams: any;
  public pricesToDeleteIndexes: number[] = [];
  public modalTitle: string;

  private pricesService: PricesService;
  private dictionaryService: DictionaryService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector,
              private dateService: DateService) {
    this.pricesService = serviceInjector.getPricesService();
    this.dictionaryService = serviceInjector.getDictionaryService();
  }

  ngOnInit(): void {
    this.modalParams = MODAL_PARAMS;

    this.pricesModalsService.deletePrices.subscribe(
      (data: any) => {
        this.selectedPrices = data.prices;
        this.pricesToDeleteIndexes = [];
        this.checkboxesForPrices = [];
        if (this.selectedPrices) {
          this.selectedPrices.forEach(() => this.checkboxesForPrices.push(false));
        }
        this.modalTitle = data.modalTitle;
        this.openDeleteModal();
      }
    );
  }

  public openDeleteModal() {
    this.deleteModalActions.emit({action: "modal", params: ['open']});
  }

  public onDeleteClick() {

    for (let i = 0; i < this.checkboxesForPrices.length; i++) {
      if (this.checkboxesForPrices[i]) {
        this.pricesToDeleteIndexes.push(i);
      }
    }

    if (this.pricesToDeleteIndexes.length > 0) {
      const pricesToDelete: Price[] = [];

      this.pricesToDeleteIndexes.forEach(index => {
        pricesToDelete.push(this.selectedPrices[index]);
      });

      this.pricesService.deletePrices(pricesToDelete);
      this.pricesModalsService.callRefreshPage();
    }

    this.onCloseModal();
  }

  public onCloseModal() {
    this.deleteModalActions.emit({action: "modal", params: ['close']});
  }

  public getDateAsString(date: Date): string {
    return this.dateService.parseDateToString(date);
  }
}
