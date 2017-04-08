/* tslint:disable:component-class-suffix */
import {Component, NgZone, OnInit, Renderer2, ViewChild} from "@angular/core";
import {NewExercise} from "../../shared/entities/add.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {BaseModal} from "../../shared/components/base.modal";
import {TrainingsService} from "../services/tranings.service";
import {TrainingModalsService} from "../services/training-modals.service";
import {Cycle} from "../../shared/entities/get.entities";

declare var Materialize: any;
declare var $: any;

@Component({
  selector: 'coach-exercise-add-modal',
  templateUrl: 'exercise-add.modal.html',
  styleUrls: ['./training.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class ExerciseAddModal extends BaseModal implements OnInit {

  public exercisesToAdd: NewExercise[] = [];
  public activeCycle: Cycle = null;

  @ViewChild('addLink')
  public addLink;

  private trainingsService: TrainingsService;

  constructor(private trainingModalsService: TrainingModalsService, private serviceInjector: ServiceInjector, private ngZone: NgZone, private renderer: Renderer2) {
    super(serviceInjector);
    this.trainingsService = this.serviceInjector.getTrainingsService();
  }

  public ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      super.ngOnInit();

      this.trainingModalsService.addExercises.subscribe(
        () => {
          this.openModal();
        }
      );
    });
  }

  public initDataBeforeOpenModal(): void {
    this.ngZone.runOutsideAngular(() => {
      super.initDataBeforeOpenModal();

      this.exercisesToAdd = [];
      this.activeCycle = this.trainingsService.getActiveCycle();

      this.renderer.listen(this.addLink, 'click', () => this.addNewEmptyExerciseToList());
    });
  }

  public addNewEmptyExerciseToList(): void {
    this.ngZone.runOutsideAngular(() => {
      this.exercisesToAdd.push(new NewExercise(this.activeCycle.sets[0].setId, '', ''));
    });
  }

  public onDeleteExercise(index: number): void {
    this.ngZone.runOutsideAngular(() => {
      this.exercisesToAdd.splice(index, 1);
    });
  }

  public isDataValid(): boolean {
    return this.ngZone.runOutsideAngular(() => {
      return this.exercisesToAdd.length > 0 && this.exercisesToAdd.every(exercise => exercise.exerciseName.length > 0);
    });
  }

  public onAddClick(): void {
    this.ngZone.runOutsideAngular(() => {
      this.trainingsService.addExercises(this.exercisesToAdd);
      this.trainingModalsService.callRefreshPage();
      this.closeModal();
    });
  }

  public canModalBeOpened(): boolean {
    return this.ngZone.runOutsideAngular(() => {
      if (this.trainingsService.hasUserOnlyFinishedCycles()) {
        Materialize.toast(this.dictionaryService.getDictionaryValue('page.trainings.cycle.notActive.tooltip'), 3000);
        return false;
      }

      return true;
    });
  }
}