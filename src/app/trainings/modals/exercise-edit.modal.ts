/* tslint:disable:component-class-suffix */
import {Component, NgZone, OnInit} from "@angular/core";
import {Exercise} from "../../shared/entities/get.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {BaseModal} from "../../shared/components/base.modal";
import {TrainingsService} from "../services/tranings.service";
import {TrainingModalsService} from "../services/training-modals.service";

declare var Materialize: any;

@Component({
  selector: 'coach-exercise-edit-modal',
  templateUrl: 'exercise-edit.modal.html',
  styleUrls: ['./training.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ExerciseEditModal extends BaseModal implements OnInit {

  public selectedExercise: Exercise = null;
  public previousExerciseName = '';
  public newExerciseName = '';
  public newExerciseDescription? = '';

  private trainingsService: TrainingsService;

  constructor(private trainingModalsService: TrainingModalsService, private serviceInjector: ServiceInjector, private ngZone: NgZone) {
    super(serviceInjector);
    this.trainingsService = serviceInjector.getTrainingsService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.trainingModalsService.editExercise.subscribe(
      (exercise: Exercise) => {
        this.selectedExercise = exercise;
        this.openModal();
      }
    );
  };

  public initDataBeforeOpenModal() {
    this.ngZone.runOutsideAngular(() => {
      this.previousExerciseName = this.selectedExercise.exerciseName;
      this.newExerciseName = this.selectedExercise.exerciseName;
      this.newExerciseDescription = this.selectedExercise.exerciseDescription;

    });
  }

  public isDataValid(): boolean {
    return this.ngZone.runOutsideAngular(() => {
      if (!this.selectedExercise) {
        return false;
      }

      return this.selectedExercise.exerciseName !== this.newExerciseName
        || this.selectedExercise.exerciseDescription !== this.newExerciseDescription;
    });
  }

  public onEditClick() {
    this.ngZone.runOutsideAngular(() => {
      this.trainingsService.editExercise(new Exercise(this.selectedExercise.exerciseId, this.newExerciseName, [], this.newExerciseDescription));
      this.trainingModalsService.callRefreshPage();
      this.closeModal();
    });
  }
}
