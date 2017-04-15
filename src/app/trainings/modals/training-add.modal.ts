/* tslint:disable:component-class-suffix */
import {Component, NgZone, OnInit} from "@angular/core";
import {NewExerciseSession, NewSeries, NewTraining} from "../../shared/entities/add.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {BaseModal} from "../../shared/components/base.modal";
import {TrainingsService} from "../services/tranings.service";
import {TrainingModalsService} from "../services/training-modals.service";
import {Cycle, Set} from "../../shared/entities/get.entities";
import {DateService} from "../../shared/services/date.service";

declare var Materialize: any;
declare var $: any;

@Component({
  selector: 'coach-training-add-modal',
  templateUrl: 'training-add.modal.html',
  styleUrls: ['./training.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class TrainingAddModal extends BaseModal implements OnInit {

  public exerciseSessionsToAdd: NewExerciseSession[][] = [];
  public isExerciseActive: boolean[][] = [];
  public activeCycle: Cycle = null;
  public selectedSetNr = 0;
  public trainingDate = '';

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

      this.initialization$ = this.trainingModalsService.addTraining.subscribe(
        () => {
          this.openModal();
        }
      );
    });
  }

  public initDataBeforeOpenModal(): void {
    this.ngZone.runOutsideAngular(() => {
      super.initDataBeforeOpenModal();
      this.exerciseSessionsToAdd = [];
      this.selectedSetNr = 0;
      this.trainingDate = this.dateService.getCurrentDateAsString();
      this.activeCycle = this.trainingsService.getActiveCycle();
      this.isExerciseActive = [];
      this.initPossibleSetsToDisplay();

    });
  }

  public onAddNewEmptySeriesToExercise(index: number): void {
    this.ngZone.runOutsideAngular(() => {
      this.exerciseSessionsToAdd[this.selectedSetNr][index].series.push(new NewSeries(0, 0, ''));
    });
  }

  public onDeleteSeries(exerciseIndex: number, seriesIndex: number): void {
    this.ngZone.runOutsideAngular(() => {
      this.exerciseSessionsToAdd[this.selectedSetNr][exerciseIndex].series.splice(seriesIndex, 1);
    });
  }

  public isDataValid(): boolean {
    return this.ngZone.runOutsideAngular(() => {
      if (!this.exerciseSessionsToAdd[this.selectedSetNr]) {
        return false;
      }

      return this.exerciseSessionsToAdd.length > 0 &&
        this.exerciseSessionsToAdd[this.selectedSetNr].every(
          (exerciseSession, i) => exerciseSession.series.length > 0 || !this.isExerciseActive[this.selectedSetNr][i]
        )
        && !this.isExerciseActive[this.selectedSetNr].every(isActive => !isActive) && this.dateService.isDateValid(this.trainingDate);
    });

  }

  public onAddClick(): void {
    this.ngZone.runOutsideAngular(() => {
      this.trainingsService.addTraining(this.createNewTraining());
      this.trainingModalsService.callRefreshPage();
      this.closeModal();
    });
  }

  private createNewTraining(): NewTraining {
    return this.ngZone.runOutsideAngular(() => {
      return new NewTraining(
        this.activeCycle.sets[this.selectedSetNr].setId,
        this.exerciseSessionsToAdd[this.selectedSetNr],
        this.dateService.parseStringToDate(this.trainingDate));
    });
  }

  public canModalBeOpened(): boolean {
    return this.ngZone.runOutsideAngular(() => {
      if (!this.trainingsService.getActiveCycle()) {
        Materialize.toast(this.dictionaryService.getDictionaryValue('page.trainings.cycle.notActive.tooltip'), 3000);
        return false;
      }

      return true;
    });
  }

  public trackBySetId(index, set: Set) {
    return set.setId;
  }

  private initPossibleSetsToDisplay(): void {
    this.ngZone.runOutsideAngular(() => {
      this.activeCycle.sets.forEach((set, i) => {
        this.exerciseSessionsToAdd.push([]);
        this.isExerciseActive.push([]);

        set.exercises.forEach((exercise) => {
          this.isExerciseActive[i].push(true);
          this.exerciseSessionsToAdd[i].push(new NewExerciseSession(exercise.exerciseId, []));
        });
      });
    });
  }
}
