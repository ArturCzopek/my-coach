/* tslint:disable:component-class-suffix */
import {Component, OnInit} from "@angular/core";
import {Cycle} from "../../shared/entities/get.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {BaseModal} from "../../shared/components/base.modal";
import {TrainingsService} from "../services/tranings.service";
import {TrainingModalsService} from "../services/training-modals.service";

declare var Materialize: any;

@Component({
  selector: 'coach-cycle-delete-modal',
  templateUrl: 'cycle-delete.modal.html',
  styleUrls: ['./training.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class CycleDeleteModal extends BaseModal implements OnInit {

  public selectedCycle: Cycle = null;
  public modalTitle: string;

  private trainingsService: TrainingsService;

  constructor(private trainingModalsService: TrainingModalsService, private serviceInjector: ServiceInjector) {
    super(serviceInjector);
    this.trainingsService = serviceInjector.getTrainingsService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.trainingModalsService.deleteCycle.subscribe(
      (data: any) => {
        this.selectedCycle = data.cycle;
        this.modalTitle = data.modalTitle;
        this.openModal();
      }
    );
  };

  public initDataBeforeOpenModal() {
  }

  public canModalBeOpened(): boolean {
    if (!this.selectedCycle) {
      Materialize.toast(this.dictionaryService.getDictionaryValue('page.trainings.loadFirst.tooltip'), 3000);
      return false;
    }

    return true;
  }

  public isDataValid(): boolean {
    return true;
  }

  public onDeleteClick() {
    this.trainingsService.deleteCycle(this.selectedCycle);
    this.trainingModalsService.callRefreshPage();
    this.closeModal();
  }
}
