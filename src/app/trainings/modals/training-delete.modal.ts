/* tslint:disable:component-class-suffix */
import {Component, NgZone, OnInit} from "@angular/core";
import {Training} from "../../shared/entities/get.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {BaseModal} from "../../shared/components/base.modal";
import {TrainingsService} from "../services/tranings.service";
import {TrainingModalsService} from "../services/training-modals.service";
import {DateService} from "../../shared/services/date.service";

declare var Materialize: any;

@Component({
  selector: 'coach-training-delete-modal',
  templateUrl: 'training-delete.modal.html',
  styleUrls: ['./training.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class TrainingDeleteModal extends BaseModal implements OnInit {

  public selectedTraining: Training = null;
  public dateService: DateService;

  private trainingsService: TrainingsService;

  constructor(private trainingModalsService: TrainingModalsService, private serviceInjector: ServiceInjector, private ngZone: NgZone) {
    super(serviceInjector);
    this.trainingsService = serviceInjector.getTrainingsService();
    this.dateService = serviceInjector.getDateService();
  }

  public ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      super.ngOnInit();

      this.trainingModalsService.deleteTraining.subscribe(
        (training: Training) => {
          this.selectedTraining = training;
          this.openModal();
        }
      );
    });
  };

  public onDeleteClick(): void {
    this.ngZone.runOutsideAngular(() => {
      this.trainingsService.deleteTraining(this.selectedTraining);
      this.trainingModalsService.callRefreshPage();
      this.closeModal();
    });
  }
}
