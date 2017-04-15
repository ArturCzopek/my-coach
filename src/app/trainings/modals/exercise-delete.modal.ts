/* tslint:disable:component-class-suffix */
import {Component, NgZone, OnInit} from "@angular/core";
import {Exercise} from "../../shared/entities/get.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {BaseModal} from "../../shared/components/base.modal";
import {TrainingsService} from "../services/tranings.service";
import {TrainingModalsService} from "../services/training-modals.service";

declare var Materialize: any;

@Component({
  selector: 'coach-exercise-delete-modal',
  templateUrl: 'exercise-delete.modal.html',
  styleUrls: ['./training.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ExerciseDeleteModal extends BaseModal implements OnInit {

  public selectedExercise: Exercise = null;

  private trainingsService: TrainingsService;

  constructor(private trainingModalsService: TrainingModalsService, private serviceInjector: ServiceInjector, private ngZone: NgZone) {
    super(serviceInjector);
    this.trainingsService = serviceInjector.getTrainingsService();
  }

  public ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      super.ngOnInit();

      this.initialization$ = this.trainingModalsService.deleteExercise.subscribe(
        (exercise: Exercise) => {
          this.selectedExercise = exercise;
          this.openModal();
        }
      );
    });
  };

  public onDeleteClick(): void {
    this.ngZone.runOutsideAngular(() => {
      this.trainingsService.deleteExercise(this.selectedExercise).first()
        .subscribe(
          ok => this.trainingModalsService.callRefreshPage(),
          error => console.error(error, 'error'),
          () => this.closeModal()
        );
    });
  }
}
