import {Component, OnInit, Injector} from "@angular/core";
import {Weight} from "../../shared/entities/get.entities";
import {WeightsModalsService} from "../services/weights-modals.service";
import {MaterializeAction} from "angular2-materialize";
import {EventEmitter} from "@angular/common/src/facade/async";
import {WeightsService} from "../services/weights.service";
import {WeightsMockService} from "../services/weights.mock.service";
import {WeightsBackEndService} from "../services/weights.back-end.service";
import {environment} from "../../../environments/environment";
import {MODAL_PARAMS} from "../../shared/global.values";

declare var Materialize:any;

@Component({
  selector: 'coach-weights-delete-modal',
  templateUrl: 'weights-delete.modal.html',
  styleUrls:['./weights.modal.scss', '../../shared/materialize-upgrades.scss']
})
export class WeightsDeleteModal implements OnInit {

  private formattedDays: string[] = [];
  private selectedWeights: Weight[] = [];
  private checkboxesForWeights: boolean[] = [];
  private deleteModalActions = new EventEmitter<string|MaterializeAction>();
  private modalParams: any;
  private weightsToDeleteIndexes: number[] = [];
  private modalTitle: string;

  private weightsService: WeightsService;

  constructor(private weightsModalsService: WeightsModalsService, private injector: Injector) {
    if (environment.isBackendServerAvailable) {
      this.weightsService = this.injector.get(WeightsBackEndService);
    } else {
      this.weightsService = this.injector.get(WeightsMockService);
    }
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

  private openDeleteModal() {
    if (this.selectedWeights) {
      this.formattedDays = this.weightsService.formatDaysToDisplayingValuesFromWeights(this.selectedWeights);
      this.deleteModalActions.emit({action: "modal", params: ['open']});
    } else {
      Materialize.toast('Najpierw wczytaj wagi!', 3000);
    }
  }

  private onDeleteClick() {

    for (let i = 0; i < this.checkboxesForWeights.length; i++) {
      if (this.checkboxesForWeights[i]) {
        this.weightsToDeleteIndexes.push(i);
      }
    }

    if (this.weightsToDeleteIndexes.length > 0) {
      let weightsToDelete: Weight[] = [];

      this.weightsToDeleteIndexes.forEach(index => {
        weightsToDelete.push(this.selectedWeights[index]);
        this.weightsService.deleteWeights(weightsToDelete);
      });

      this.weightsModalsService.callRefreshPage();
    }

    this.onCloseModal();
  }

  private onCloseModal() {
    this.deleteModalActions.emit({action: "modal", params: ['close']});
  }
}
