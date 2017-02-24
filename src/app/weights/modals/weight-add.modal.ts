/* tslint:disable:component-class-suffix */
import {OnInit, Component, EventEmitter} from "@angular/core";
import {MaterializeAction} from "angular2-materialize";
import {WeightsService} from "../services/weights.service";
import {WeightsModalsService} from "../services/weights-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {MODAL_PARAMS} from "../../shared/global.values";
import {NewWeight} from "../../shared/entities/add.entities";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {DateService} from "../../shared/services/date.service";

@Component({
  selector: 'coach-weight-add-modal',
  templateUrl: 'weight-add.modal.html',
  styleUrls: ['weights.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class WeightAddModal implements OnInit {

  private weightsService: WeightsService;
  private dictionaryService: DictionaryService;

  public addModalActions = new EventEmitter<string|MaterializeAction>();
  public modalParams: any;
  public datePickerParams: any;

  public weightValue: number;
  public measurementDate: string;

  public weightToAdd: NewWeight;


  constructor(private weightsModalsService: WeightsModalsService, private serviceInjector: ServiceInjector,
              private dateService: DateService) {
    this.weightsService = serviceInjector.getWeightsService();
    this.dictionaryService = serviceInjector.getDictionaryService();
    this.weightValue = 50;
    this.measurementDate = '';
  }

  ngOnInit(): void {
    this.modalParams = MODAL_PARAMS;
    this.datePickerParams = this.dictionaryService.getDateDictionarySettings();

    this.weightsModalsService.addWeight.subscribe(
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
      this.weightToAdd = new NewWeight(this.weightValue, this.dateService.parseStringToDate(this.measurementDate));
      this.weightsService.addWeight(this.weightToAdd);
      this.weightsModalsService.callRefreshPage();
      this.onCloseModal();
  }

  public onCloseModal() {
    this.addModalActions.emit({action: "modal", params: ['close']});
  }

  public isDataValid(): boolean {
    return this.weightValue > 0 && this.dateService.isDateValid(this.measurementDate);
  }
}
