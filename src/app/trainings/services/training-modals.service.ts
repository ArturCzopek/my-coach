import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Cycle, Exercise, Training} from "../../shared/entities/get.entities";

@Injectable()
export class TrainingModalsService {

  addCycle: Subject<any> = new Subject<any>();
  addExercises: Subject<any> = new Subject<any>();
  addTraining: Subject<any> = new Subject<any>();
  deleteCycle: Subject<any> = new Subject<any>();
  deleteExercise: Subject<any> = new Subject<any>();
  deleteTraining: Subject<any> = new Subject<any>();
  editCycle: Subject<any> = new Subject<any>();
  editExercise: Subject<any> = new Subject<any>();
  editTraining: Subject<any> = new Subject<any>();
  refreshPage: Subject<any> = new Subject<any>();

  public callAddCycle(finishedCycles: boolean) {
    this.addCycle.next(finishedCycles);
  }

  public callAddExercise(finishedCycles: boolean) {
    this.addExercises.next(finishedCycles);
  }

  public callAddTraining(finishedCycles: boolean) {
    this.addTraining.next(finishedCycles);
  }

  public callDeleteCycle(cycle: Cycle, modalTitle: string) {
    this.deleteCycle.next({cycle: cycle, modalTitle: modalTitle});
  }

  public callDeleteExercise(exercise: Exercise) {
    this.deleteExercise.next(exercise);
  }

  public callDeleteTraining(training: Training) {
    this.deleteTraining.next(training);
  }

  public callEditCycle(cycle: Cycle, modalTitle: string) {
    this.editCycle.next({cycle: cycle, modalTitle: modalTitle});
  }

  public callEditExercise(exercise: Exercise) {
    this.editExercise.next(exercise);
  }

  public callEditTraining(training: Training) {
    this.editTraining.next(training);
  }

  public callRefreshPage() {
    this.refreshPage.next(null);
  }
}
