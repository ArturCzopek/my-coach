/* tslint:disable:component-class-suffix */
import {Component, NgZone, OnInit} from "@angular/core";
import {ServiceInjector} from "../../shared/services/service.injector";
import {BaseModal} from "../../shared/components/base.modal";
import {TrainingsService} from "../services/tranings.service";
import {TrainingModalsService} from "../services/training-modals.service";
import {Exercise, Series, Training} from "../../shared/entities/get.entities";
import {DateService} from "../../shared/services/date.service";

declare var Materialize: any;
declare var $: any;

@Component({
  selector: 'coach-training-edit-modal',
  templateUrl: 'training-edit.modal.html',
  styleUrls: ['./training.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class TrainingEditModal extends BaseModal implements OnInit {

  public selectedTraining: Training = null;
  public exercisesForTraining: Exercise[] = [];
  public trainingDate: string;

  private trainingsService: TrainingsService;
  private dateService: DateService;

  constructor(private trainingModalsService: TrainingModalsService, private serviceInjector: ServiceInjector, private ngZone: NgZone) {
    super(serviceInjector);
    this.trainingsService = this.serviceInjector.getTrainingsService();
    this.dateService = this.serviceInjector.getDateService();
  }

  public ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      super.ngOnInit();

      this.initialization$ = this.trainingModalsService.editTraining.subscribe(
        (training: Training) => {
          this.selectedTraining = training;
          this.openModal();
        }
      );
    });
  }

  public initDataBeforeOpenModal(): void {
    this.ngZone.runOutsideAngular(() => {
      super.initDataBeforeOpenModal();
      this.exercisesForTraining = [];
      this.trainingDate = this.dateService.parseDateToString(this.selectedTraining.trainingDate);
      this.exercisesForTraining = this.trainingsService.getExercisesWithSessionForTraining(this.selectedTraining);
    });
  }

  public onAddNewEmptySeriesToExercise(index: number): void {
    this.ngZone.runOutsideAngular(() => {
      this.exercisesForTraining[index].exerciseSessions[0].series.push(new Series(0, 0, 0, ''));
    });
  }

  public onDeleteSeries(exerciseIndex: number, seriesIndex: number): void {
    this.ngZone.runOutsideAngular(() => {
      this.exercisesForTraining[exerciseIndex].exerciseSessions[0].series.splice(seriesIndex, 1);
    });
  }

  public isDataValid(): boolean {
    return this.ngZone.runOutsideAngular(() => {
      if (!this.exercisesForTraining) {
        return false;
      }

      return this.exercisesForTraining.every((exercise, i) =>
          exercise.exerciseSessions[0].series.length > 0 &&
          exercise.exerciseSessions[0].series.forEach(series => series.repeats > 0)
          || exercise.exerciseSessions[0].isEmpty
        ) && this.dateService.isDateValid(this.trainingDate);
    });
  }

  public onEditClick(): void {
    this.ngZone.runOutsideAngular(() => {
      this.selectedTraining.trainingDate = this.dateService.parseStringToDate(this.trainingDate);
      this.trainingsService.editTraining(this.selectedTraining, this.exercisesForTraining);
      this.trainingModalsService.callRefreshPage();
      this.closeModal();
    });
  }
}
