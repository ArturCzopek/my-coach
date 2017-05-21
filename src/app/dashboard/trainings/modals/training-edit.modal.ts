/* tslint:disable:component-class-suffix */
import {Component, OnInit} from "@angular/core";
import {ServiceInjector} from "../../../shared/services/service.injector";
import {BaseModal} from "../../../shared/components/base.modal";
import {TrainingsService} from "../services/tranings.service";
import {TrainingModalsService} from "../services/training-modals.service";
import {Exercise, Series, Training} from "../../../shared/entities/get.entities";
import {DateService} from "../../../shared/services/date.service";

declare var Materialize: any;
declare var $: any;

@Component({
  selector: 'coach-training-edit-modal',
  templateUrl: 'training-edit.modal.html',
  styleUrls: ['./training.modals.scss', '../../../shared/materialize-upgrades.scss']
})
export class TrainingEditModal extends BaseModal implements OnInit {

  public selectedTraining: Training = null;
  public exercisesForTraining: Exercise[] = [];
  public trainingDate: string;

  private trainingsService: TrainingsService;
  private dateService: DateService;

  constructor(private trainingModalsService: TrainingModalsService, private serviceInjector: ServiceInjector) {
    super(serviceInjector);
    this.trainingsService = this.serviceInjector.getTrainingsService();
    this.dateService = this.serviceInjector.getDateService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.initialization$ = this.trainingModalsService.editTraining.subscribe(
      (training: Training) => {
        this.selectedTraining = training;
        this.openModal();
      }
    );
  }

  public initDataBeforeOpenModal(): void {
    super.initDataBeforeOpenModal();
    this.exercisesForTraining = [];
    this.trainingDate = this.dateService.parseDateToString(this.selectedTraining.trainingDate);
    this.trainingsService.getExercisesWithSessionForTraining(this.selectedTraining.trainingId).first().subscribe(
      exercises => this.exercisesForTraining = exercises,
      error => console.error(error, 'error')
    );
  }

  public onAddNewEmptySeriesToExercise(index: number): void {
    this.exercisesForTraining[index].exerciseSessions[0].series.push(new Series(0, 0, 0, ''));
  }

  public onDeleteSeries(exerciseIndex: number, seriesIndex: number): void {
    this.exercisesForTraining[exerciseIndex].exerciseSessions[0].series.splice(seriesIndex, 1);
  }

  public isDataValid(): boolean {
    if (!this.exercisesForTraining) {
      return false;
    }

    return this.exercisesForTraining.every((exercise, i) =>
        (exercise.exerciseSessions[0].series.length > 0 &&
        exercise.exerciseSessions[0].series.every(series => series.repeats > 0))
        || exercise.exerciseSessions[0].empty
      ) && this.dateService.isDateValid(this.trainingDate);
  }

  public onEditClick(): void {
    this.trainingsService.editTraining(new Training(this.selectedTraining.trainingId, this.dateService.parseStringToDate(this.trainingDate),
      this.selectedTraining.setId), this.exercisesForTraining)
      .first()
      .subscribe(
        ok => {
          this.trainingModalsService.callRefreshPage();
          this.errorMessage = '';
          this.closeModal();
        },
        error => this.errorMessage = this.dictionaryService.getErrorMessage(error)
      );
  }

  public changeExerciseActive(exercise: Exercise): void {
    exercise.exerciseSessions[0].empty = !exercise.exerciseSessions[0].empty
  }

  public trackByExerciseId(index, exercise: Exercise) {
    return exercise.exerciseId;
  }

  public trackBySeriesId(index, series: Series) {
    return series.seriesId;
  }
}
