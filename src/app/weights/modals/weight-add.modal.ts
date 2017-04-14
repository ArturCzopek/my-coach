/* tslint:disable:component-class-suffix */
import {Component, OnInit} from "@angular/core";
import {WeightsService} from "../services/weights.service";
import {WeightsModalsService} from "../services/weights-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {NewWeight} from "../../shared/entities/add.entities";
import {DateService} from "../../shared/services/date.service";
import {BaseModal} from "../../shared/components/base.modal";

@Component({
  selector: 'coach-weight-add-modal',
  templateUrl: 'weight-add.modal.html',
  styleUrls: ['./weights.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class WeightAddModal extends BaseModal implements OnInit {

  public weightValue = 50;
  public measurementDate = '';
  public weightToAdd: NewWeight;

  private weightsService: WeightsService;

  constructor(private weightsModalsService: WeightsModalsService, private serviceInjector: ServiceInjector,
              private dateService: DateService) {
    super(serviceInjector);
    this.weightsService = serviceInjector.getWeightsService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.initialization$ = this.weightsModalsService.addWeight.subscribe(
      () => {
        this.openModal();
      }
    );
  }

  public initDataBeforeOpenModal() {
    this.weightValue = 50;
    this.measurementDate = '';
  }

  public isDataValid(): boolean {
    return this.weightValue > 0 && this.dateService.isDateValid(this.measurementDate);
  }

  public onAddClick() {
    this.weightToAdd = new NewWeight(this.weightValue, this.dateService.parseStringToDate(this.measurementDate));
    this.weightsService.addWeight(this.weightToAdd).first()
      .subscribe(
        ok => this.weightsModalsService.callRefreshPage(),
        error => console.error('error', error),
        () => this.closeModal()
      );
  }
}
