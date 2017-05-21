/* tslint:disable:component-class-suffix */
import {Component, OnInit} from "@angular/core";
import {Price} from "../../../shared/entities/get.entities";
import {PricesService} from "../services/prices.service";
import {PricesModalsService} from "../services/prices-modals.service";
import {ServiceInjector} from "../../../shared/services/service.injector";
import {DOES_NOT_CONTAIN} from "../../../shared/global.values";
import {BaseModal} from "../../../shared/components/base.modal";
import {DateService} from "../../../shared/services/date.service";

@Component({
  selector: 'coach-prices-edit-modal',
  templateUrl: 'prices-edit.modal.html',
  styleUrls: ['./prices.modals.scss', '../../../shared/materialize-upgrades.scss']
})
export class PricesEditModal extends BaseModal implements OnInit {

  public selectedPrices: Price[] = [];
  public pricesToEditIndexes: number[] = [];
  public modalTitle: string;
  public dates: string[] = [];

  private pricesService: PricesService;
  private dateService: DateService;

  constructor(private pricesModalsService: PricesModalsService, private serviceInjector: ServiceInjector) {
    super(serviceInjector);
    this.pricesService = serviceInjector.getPricesService();
    this.dateService = serviceInjector.getDateService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.initialization$ = this.pricesModalsService.editPrices.subscribe(
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
    this.selectedPrices.forEach(price => this.dates.push(this.dateService.parseDateToString(price.priceDate)));
  }

  public isDataValid(): boolean {
    return this.pricesToEditIndexes.length > 0;
  }

  public onEditClick() {

    const pricesToEdit: Price[] = [];

    if (this.pricesToEditIndexes.length > 0) {

      this.pricesToEditIndexes.forEach(index => {
        this.selectedPrices[index].priceDate = this.dateService.parseStringToDate(this.dates[index]);
        pricesToEdit.push(this.selectedPrices[index]);
      });
    }

    this.pricesService.editPrices(pricesToEdit).first().subscribe(
      ok => this.pricesModalsService.callRefreshPage(),
      error => console.error(error, 'error'),
      () => this.closeModal()
    );
  }

  public addPriceIndexToChanged(price: number) {
    if (this.pricesToEditIndexes.indexOf(price) === DOES_NOT_CONTAIN) {
      this.pricesToEditIndexes.push(price);
    }
  }

  public trackByPriceId(index, price: Price) {
    return price.priceId;
  }
}
