/* tslint:disable:component-class-suffix */
import {Component, OnInit} from "@angular/core";
import {Weight} from "../../shared/entities/get.entities";
import {WeightsModalsService} from "../services/weights-modals.service";
import {MaterializeAction} from "angular2-materialize";
import {EventEmitter} from "@angular/common/src/facade/async";
import {WeightsService} from "../services/weights.service";
import {MODAL_PARAMS} from "../../shared/global.values";
import {ServiceInjector} from "../../shared/services/service.injector";

declare var Materialize: any;

@Component({
  selector: 'coach-weights-delete-modal',
  templateUrl: 'weights-delete.modal.html',
  styleUrls: ['./weights.modal.scss', '../../shared/materialize-upgrades.scss']
})
export class WeightsDeleteModal implements OnInit {

  public formattedDays: string[] = [];
  public selectedWeights: Weight[] = [];
  public checkboxesForWeights: boolean[] = [];
  public deleteModalActions = new EventEmitter<string|MaterializeAction>();
  public modalParams: any;
  public weightsToDeleteIndexes: number[] = [];
  public modalTitle: string;

  private weightsService: WeightsService;

  constructor(private weightsModalsService: WeightsModalsService, private serviceInjector: ServiceInjector) {
    this.weightsService = serviceInjector.getWeightsService();
  }

  ngOnInit(): void {
    this.modalParams = MODAL_PARAMS;

    this.weightsModalsService.deleteWeights.subscribe(
      (data: any) => {
        this.selectedWeights = data.weights;
        this.weightsToDeleteIndexes = [];
        this.checkboxesForWeights = [];
        data.weights.forEach(() => this.checkboxesForWeights.push(false));
        this.modalTitle = data.modalTitle;
        this.openDeleteModal();
      }
    );
  }

  public openDeleteModal() {
    if (this.selectedWeights) {
      this.formattedDays = this.weightsService.formatDaysToDisplayingValuesFromWeights(this.selectedWeights);
      this.deleteModalActions.emit({action: "modal", params: ['open']});
    } else {
      Materialize.toast('Najpierw wczytaj wagi!', 3000);
    }
  }

  public onDeleteClick() {

    for (let i = 0; i < this.checkboxesForWeights.length; i++) {
      if (this.checkboxesForWeights[i]) {
        this.weightsToDeleteIndexes.push(i);
      }
    }

    if (this.weightsToDeleteIndexes.length > 0) {
      const weightsToDelete: Weight[] = [];

      this.weightsToDeleteIndexes.forEach(index => {
        weightsToDelete.push(this.selectedWeights[index]);
        this.weightsService.deleteWeights(weightsToDelete);
      });

      this.weightsModalsService.callRefreshPage();
    }

    this.onCloseModal();
  }

  public onCloseModal() {
    this.deleteModalActions.emit({action: "modal", params: ['close']});
  }
}
