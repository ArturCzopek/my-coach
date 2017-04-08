/* tslint:disable:component-class-suffix */
import {Component, OnInit} from "@angular/core";
import {Price} from "../../shared/entities/get.entities";
import {PricesService} from "../services/prices.service";
import {PricesModalsService} from "../services/prices-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {DOES_NOT_CONTAIN} from "../../shared/global.values";
import {BaseModal} from "../../shared/components/base.modal";

@Component({
  selector: 'coach-prices-edit-modal',
  templateUrl: 'prices-edit.modal.html',
  styleUrls: ['./prices.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class PricesEditModal extends BaseModal implements OnInit {

  public selectedPrices: Price[] = [];
  public pricesToEditIndexes: number[] = [];
  public modalTitle: string;

  private pricesService: PricesService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector) {
    super(serviceInjector);
    this.pricesService = serviceInjector.getPricesService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.pricesModalsService.editPrices.subscribe(
      (data: any) => {
        this.selectedPrices = data.prices;
        this.modalTitle = data.modalTitle;
        this.openModal();
      }
    );
  }

  public initDataBeforeOpenModal() {
    super.initDataBeforeOpenModal();
    this.pricesToEditIndexes = [];
  }

  public isDataValid(): boolean {
    return this.pricesToEditIndexes.length > 0;
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

    this.closeModal();
  }

  public addPriceIndexToChanged(price: number) {
    if (this.pricesToEditIndexes.indexOf(price) === DOES_NOT_CONTAIN) {
      this.pricesToEditIndexes.push(price);
    }
  }
}
