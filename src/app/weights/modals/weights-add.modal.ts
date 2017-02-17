/* tslint:disable:component-class-suffix */
import {OnInit, Component} from "@angular/core";
import {MaterializeAction} from "angular2-materialize";
import {WeightsService} from "../services/weights.service";
import {EventEmitter} from "@angular/common/src/facade/async";
import {WeightsModalsService} from "../services/weights-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {MODAL_PARAMS} from "../../shared/global.values";
import {NewWeight} from "../../shared/entities/add.entities";
import {DictionaryService} from "../../shared/services/dictionary.service";

declare var $: any;

@Component({
  selector: 'coach-weights-add-modal',
  templateUrl: 'weights-add.modal.html',
  styleUrls: ['./weights.modal.scss', '../../shared/materialize-upgrades.scss']
})
export class WeightsAddModal implements OnInit {

  private weightsService: WeightsService;
  private dictionaryService: DictionaryService;

  public addModalActions = new EventEmitter<string|MaterializeAction>();
  public modalParams: any;
  public datePickerParams: any;

  public weightValue: number;
  public measurementDate: string;

  public weightToAdd: NewWeight;


  constructor(private weightsModalsService: WeightsModalsService, private serviceInjector: ServiceInjector) {
    this.weightsService = serviceInjector.getWeightsService();
    this.dictionaryService = serviceInjector.getDictionaryService();
    this.weightValue = 50;
    this.measurementDate = '';
  }

  ngOnInit(): void {
    this.modalParams = MODAL_PARAMS;
    this.datePickerParams = this.dictionaryService.getDateDictionarySettings();

    this.weightsModalsService.addWeights.subscribe(
      () => {
        this.openAddModal();
      }
    );
  }

  public openAddModal() {
    this.weightValue = 50;
    this.measurementDate = '';
    this.addModalActions.emit({action: "modal", params: ['open']});
  }

  public onAddClick() {
      this.weightToAdd = new NewWeight(this.weightValue, new Date(this.measurementDate));
      this.weightsService.addWeight(this.weightToAdd);
      this.weightsModalsService.callRefreshPage();
      this.onCloseModal();
  }

  public onCloseModal() {
    this.addModalActions.emit({action: "modal", params: ['close']});
  }

  public isDataValid(): boolean {
    return this.weightValue > 0 && this.measurementDate !== '';
  }
}
