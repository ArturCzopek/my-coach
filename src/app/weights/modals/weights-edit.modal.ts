import {Component, OnInit} from "@angular/core";
import {Weight} from "../../shared/entities/get.entities";
import {WeightsModalsService} from "../services/weights-modals.service";
import {MaterializeAction} from "angular2-materialize";
import {EventEmitter} from "@angular/common/src/facade/async";
import {WeightsService} from "../services/weights.service";
import {MODAL_PARAMS, DOES_NOT_CONTAIN} from "../../shared/global.values";
import {ServiceInjector} from "../../shared/services/service.injector";

declare var Materialize:any;

@Component({
  selector: 'coach-weights-edit-modal',
  templateUrl: 'weights-edit.modal.html',
  styleUrls:['./weights.modal.scss', '../../shared/materialize-upgrades.scss']
})
export class WeightsEditModal implements OnInit {

  private weightsService: WeightsService;
  private formattedDays: string[] = [];
  private selectedWeights: Weight[] = [];
  private editModalActions = new EventEmitter<string|MaterializeAction>();
  private modalParams: any;
  private weightsToEditIndexes: number[] = [];
  private modalTitle: string;

  constructor(private weightsModalsService: WeightsModalsService, private serviceInjector: ServiceInjector) {
      this.weightsService = serviceInjector.getWeightsService();
  }

  ngOnInit(): void {
    this.modalParams = MODAL_PARAMS;

    this.weightsModalsService.editWeights.subscribe(
      (data: any) => {
        this.selectedWeights = data.weights;
        this.weightsToEditIndexes = [];
        this.modalTitle = data.modalTitle;
        this.openEditModal();
      }
    );
  }

  private openEditModal() {
    if (this.selectedWeights) {
      this.formattedDays = this.weightsService.formatDaysToDisplayingValuesFromWeights(this.selectedWeights);
      this.editModalActions.emit({action: "modal", params: ['open']});
    } else {
      Materialize.toast('Najpierw wczytaj wagi!', 3000);
    }
  }

  private onEditClick() {
    if (this.weightsToEditIndexes.length > 0) {
      let weightsToEdit: Weight[] = [];

      this.weightsToEditIndexes.forEach(index => {
        weightsToEdit.push(this.selectedWeights[index]);
        this.weightsService.editWeights(weightsToEdit);
      });

      this.weightsModalsService.callRefreshPage();
    }

    this.onCloseModal();
  }

  private onCloseModal() {
    this.editModalActions.emit({action: "modal", params: ['close']});
  }

  private addDayIndexToChanged(dateIndex: number) {
    if (this.weightsToEditIndexes.indexOf(dateIndex) === DOES_NOT_CONTAIN) {
      this.weightsToEditIndexes.push(dateIndex);
    }
  }
}
