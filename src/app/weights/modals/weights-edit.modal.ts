/* tslint:disable:component-class-suffix */
import {Component, OnInit} from "@angular/core";
import {Weight} from "../../shared/entities/get.entities";
import {WeightsModalsService} from "../services/weights-modals.service";
import {WeightsService} from "../services/weights.service";
import {DOES_NOT_CONTAIN} from "../../shared/global.values";
import {ServiceInjector} from "../../shared/services/service.injector";
import {BaseModal} from "../../shared/components/base.modal";

declare var Materialize: any;

@Component({
  selector: 'coach-weights-edit-modal',
  templateUrl: 'weights-edit.modal.html',
  styleUrls: ['./weights.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class WeightsEditModal extends BaseModal implements OnInit {

  public formattedDays: string[] = [];
  public selectedWeights: Weight[] = [];
  public weightsToEditIndexes: number[] = [];
  public modalTitle: string;

  private weightsService: WeightsService;

  constructor(private weightsModalsService: WeightsModalsService, private serviceInjector: ServiceInjector) {
    super(serviceInjector);
    this.weightsService = serviceInjector.getWeightsService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.weightsModalsService.editWeights.subscribe(
      (data: any) => {
        this.selectedWeights = data.weights;
        this.modalTitle = data.modalTitle;
        this.openModal();
      }
    );
  }

  public initDataBeforeOpenModal() {
    this.weightsToEditIndexes = [];
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
    return this.weightsToEditIndexes.length > 0;
  }

  public onEditClick() {
    const weightsToEdit: Weight[] = [];

    this.weightsToEditIndexes.forEach(index => {
      weightsToEdit.push(this.selectedWeights[index]);
      this.weightsService.editWeights(weightsToEdit);
    });

    this.weightsModalsService.callRefreshPage();
    this.closeModal();
  }

  public addDayIndexToChanged(dateIndex: number) {
    if (this.weightsToEditIndexes.indexOf(dateIndex) === DOES_NOT_CONTAIN) {
      this.weightsToEditIndexes.push(dateIndex);
    }
  }
}
