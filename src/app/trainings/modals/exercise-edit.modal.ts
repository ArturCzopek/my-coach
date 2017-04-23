/* tslint:disable:component-class-suffix */
import {Component, OnInit} from "@angular/core";
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

  constructor(private trainingModalsService: TrainingModalsService, private serviceInjector: ServiceInjector) {
    super(serviceInjector);
    this.trainingsService = serviceInjector.getTrainingsService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.initialization$ = this.trainingModalsService.editExercise.subscribe(
      (exercise: Exercise) => {
        this.selectedExercise = exercise;
        this.openModal();
      }
    );
  };

  public initDataBeforeOpenModal(): void {
    this.previousExerciseName = this.selectedExercise.exerciseName;
    this.newExerciseName = this.selectedExercise.exerciseName;
    this.newExerciseDescription = this.selectedExercise.exerciseDescription;
  }

  public isDataValid(): boolean {
    if (!this.selectedExercise) {
      return false;
    }

    return this.selectedExercise.exerciseName !== this.newExerciseName
      || this.selectedExercise.exerciseDescription !== this.newExerciseDescription;
  }

  public onEditClick(): void {
    this.trainingsService
      .editExercise(
        new Exercise(this.selectedExercise.exerciseId, this.newExerciseName, [], this.newExerciseDescription)
      ).first()
      .subscribe(
        ok => this.trainingModalsService.callRefreshPage(),
        error => console.error(error, 'error'),
        () => this.closeModal()
      );
  }
}
