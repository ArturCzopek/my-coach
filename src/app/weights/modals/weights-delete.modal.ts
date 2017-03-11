/* tslint:disable:component-class-suffix */
import {Component} from "@angular/core";
import {Weight} from "../../shared/entities/get.entities";
import {WeightsModalsService} from "../services/weights-modals.service";
import {WeightsService} from "../services/weights.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {BaseModal} from "../../shared/components/base.modal";

declare var Materialize: any;

@Component({
  selector: 'coach-weights-delete-modal',
  templateUrl: 'weights-delete.modal.html',
  styleUrls: ['weights.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class WeightsDeleteModal extends BaseModal {

  public formattedDays: string[] = [];
  public selectedWeights: Weight[] = [];
  public checkboxesForWeights: boolean[] = [];
  public weightsToDeleteIndexes: number[] = [];
  public modalTitle: string;

  private weightsService: WeightsService;

  constructor(private weightsModalsService: WeightsModalsService, private serviceInjector: ServiceInjector) {
    super(serviceInjector);
    this.weightsService = serviceInjector.getWeightsService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.weightsModalsService.deleteWeights.subscribe(
      (data: any) => {
        this.selectedWeights = data.weights;
        this.modalTitle = data.modalTitle;

        this.openModal();
      }
    );
  }

  public initDataBeforeOpenModal() {
    this.weightsToDeleteIndexes = [];
    this.checkboxesForWeights = [];
    this.selectedWeights.forEach(() => this.checkboxesForWeights.push(false));
    this.formattedDays = this.weightsService.formatDaysToDisplayingValuesFromWeights(this.selectedWeights);
  }

  public canModalBeOpened(): boolean {
    if (!this.selectedWeights) {
      Materialize.toast(this.dictionaryService.getDictionaryValue('page.weights.loadFirst.tooltip'), 3000);
      return false;
    }

    return true;
  }

  public isDataValid(): boolean {
    for (let checkbox of this.checkboxesForWeights) {
      if (checkbox) {
        return true;
      }
    }

    return false;
  }

  public onDeleteClick() {

    for (let i = 0; i < this.checkboxesForWeights.length; i++) {
      if (this.checkboxesForWeights[i]) {
        this.weightsToDeleteIndexes.push(i);
      }
    }

    const weightsToDelete: Weight[] = [];

    this.weightsToDeleteIndexes.forEach(index => {
      weightsToDelete.push(this.selectedWeights[index]);
    });

    this.weightsService.deleteWeights(weightsToDelete);
    this.weightsModalsService.callRefreshPage();
    this.closeModal();
  }
}
