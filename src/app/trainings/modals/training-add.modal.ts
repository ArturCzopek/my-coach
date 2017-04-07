/* tslint:disable:component-class-suffix */
import {Component, OnInit} from "@angular/core";
import {NewExerciseSession, NewSeries, NewTraining} from "../../shared/entities/add.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {BaseModal} from "../../shared/components/base.modal";
import {TrainingsService} from "../services/tranings.service";
import {TrainingModalsService} from "../services/training-modals.service";
import {Cycle} from "../../shared/entities/get.entities";
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
  public selectedSetNr: number = 0;
  public trainingDate: string = '';

  private trainingsService: TrainingsService;
  private dateService: DateService;

  constructor(private trainingModalsService: TrainingModalsService, private serviceInjector: ServiceInjector) {
    super(serviceInjector);
    this.trainingsService = this.serviceInjector.getTrainingsService();
    this.dateService = this.serviceInjector.getDateService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.trainingModalsService.addTraining.subscribe(
      () => {
        this.openModal();
      }
    );
  }

  public initDataBeforeOpenModal() {
    this.exerciseSessionsToAdd = [];
    this.selectedSetNr = 0;
    this.trainingDate = this.dateService.getCurrentDateAsString();
    this.activeCycle = this.trainingsService.getActiveCycle();
    this.isExerciseActive = [];
    this.initPossibleSetsToDisplay();

    if ($('#fab').hasClass('active')) {
      $('#fab a').click();
    }
  }

  public addNewEmptySeriesToExercise(index: number): void {
    this.exerciseSessionsToAdd[this.selectedSetNr][index].series.push(new NewSeries(0, 0, ''));
  }

  public onDeleteSeries(exerciseIndex: number, seriesIndex: number) {
    this.exerciseSessionsToAdd[this.selectedSetNr][exerciseIndex].series.splice(seriesIndex, 1);
  }

  public isDataValid(): boolean {

    if (!this.exerciseSessionsToAdd[this.selectedSetNr]) {
      return false;
    }

    return this.exerciseSessionsToAdd.length > 0 &&
      this.exerciseSessionsToAdd[this.selectedSetNr].every(
        (exerciseSession, i) => exerciseSession.series.length > 0 || !this.isExerciseActive[this.selectedSetNr][i]
      )
      && this.dateService.isDateValid(this.trainingDate);
  }

  public onAddClick() {
    this.trainingsService.addTraining(this.createNewTraining());

    this.trainingModalsService.callRefreshPage();
    this.closeModal();
  }

  private createNewTraining(): NewTraining {
    return new NewTraining(
      this.activeCycle.sets[this.selectedSetNr].setId,
      this.exerciseSessionsToAdd[this.selectedSetNr],
      this.dateService.parseStringToDate(this.trainingDate));
  }

  public canModalBeOpened(): boolean {
    if (!this.trainingsService.getActiveCycle()) {
      Materialize.toast(this.dictionaryService.getDictionaryValue('page.trainings.cycle.notActive.tooltip'), 3000);
      return false;
    }

    return true;
  }

  private initPossibleSetsToDisplay() {

    this.activeCycle.sets.forEach((set, i) => {

      this.exerciseSessionsToAdd.push([]);
      this.isExerciseActive.push([]);

      set.exercises.forEach((exercise) => {
        this.isExerciseActive[i].push(true);
        this.exerciseSessionsToAdd[i].push(new NewExerciseSession(exercise.exerciseId, []));
      })
    });
  }
}
