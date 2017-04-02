import {Injectable, Injector} from "@angular/core";
import {TrainingsService} from "./tranings.service";
import {CyclePreview} from "../../shared/entities/preview.entities";
import {Cycle, Exercise, Set} from "../../shared/entities/get.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {CYCLE_PREVIEWS_LIST} from "../../shared/entities/mock-data/previews/cycle-previews.mock-data";
import {Observable} from "rxjs/Observable";
import {CYCLES_LIST} from "../../shared/entities/mock-data/cycles.mock-data";
import {DOES_NOT_CONTAIN} from "../../shared/global.values";
import {NewCycle, NewExercise} from "../../shared/entities/add.entities";

@Injectable()
export class TrainingsMockService extends TrainingsService {

  private newCycleId: number = CYCLES_LIST.length + 1;
  private newSetId: number = CYCLES_LIST
    .map(cycle => cycle.sets.length)
    .reduce(this.reduce) + 1;

  private newExerciseId: number = CYCLES_LIST
    .map(cycle => cycle.sets)
    .map(sets => sets.map(set => set.exercises.length).reduce(this.reduce))
    .reduce(this.reduce) + 1;

  constructor(private injector: Injector) {
    super(injector.get(ServiceInjector));
  }

  getCyclePreviews(): Observable<CyclePreview[]> {
    return Observable.create(observer => {
      // timeout is simulation of 'getting from http'
      setTimeout(() => {
        observer.next(CYCLE_PREVIEWS_LIST);
      }, 500);

      setTimeout(() => {
        observer.complete();
      }, 600);
    });
  }

  getCycle(cycleId: number): Observable<Cycle> {
    return Observable.create(observer => {
      // timeout is simulation of 'getting from http'
      setTimeout(() => {
        observer.next(CYCLES_LIST.find(cycle => cycle.cycleId === cycleId));
      }, 500);

      setTimeout(() => {
        observer.complete();
      }, 600);
    });
  }

  addCycle(cycleToAdd: NewCycle): void {
    const sets: Set[] = [];
    cycleToAdd.sets.map(set => sets.push(new Set(this.newSetId++, set.setName, [], [])));
    const cycle: Cycle = new Cycle(this.newCycleId, sets, false, cycleToAdd.startDate);
    this.newCycleId++;

    CYCLES_LIST.push(cycle);
    CYCLE_PREVIEWS_LIST.push(new CyclePreview(cycle.cycleId, false, cycle.startDate));
  }

  addExercises(exercisesToAdd: NewExercise[]): void {

    for (const exercise of exercisesToAdd) {

      const setIdInArray: number = this.getActiveCycle().sets.findIndex(set => set.setId === exercise.setId);
      const exerciseToAdd: Exercise = new Exercise(this.newExerciseId, exercise.exerciseName, []);

      if (exercise.exerciseDescription) {
        exerciseToAdd.exerciseDescription = exercise.exerciseDescription;
      }

      this.newExerciseId++;

      this.getActiveCycle().sets[setIdInArray].exercises.push(exerciseToAdd);
    }
  }

  deleteCycle(cycleToDelete: Cycle): void {
    const cycleId = CYCLES_LIST.findIndex(cycle => cycle.cycleId === cycleToDelete.cycleId);

    CYCLES_LIST.splice(cycleId, 1);
    CYCLE_PREVIEWS_LIST.splice(cycleId, 1);
  }

  editCycle(cycleToEdit: Cycle): void {
    const cycleIndex: number = CYCLES_LIST.findIndex(cycle => cycle.cycleId === cycleToEdit.cycleId);

    if (cycleIndex !== DOES_NOT_CONTAIN) {
      CYCLES_LIST[cycleIndex] = cycleToEdit;
    }

    for (let i = 0; i < CYCLE_PREVIEWS_LIST.length; i++) {
      if (CYCLE_PREVIEWS_LIST[i].cycleId === cycleToEdit.cycleId) {
        CYCLE_PREVIEWS_LIST[i].isFinished = cycleToEdit.isFinished;
        CYCLE_PREVIEWS_LIST[i].startDate = cycleToEdit.startDate;
        CYCLE_PREVIEWS_LIST[i].endDate = cycleToEdit.endDate;

        if (!CYCLE_PREVIEWS_LIST[i].isFinished) {
          CYCLE_PREVIEWS_LIST[i].endDate = null;
        }

        break;
      }
    }
  }

  hasUserOnlyFinishedCycles(): boolean {
    return CYCLES_LIST.every(cycle => cycle.isFinished);
  }


  getActiveCycle(): Cycle {
    return CYCLES_LIST.find(cycle => !cycle.isFinished);
  }

  private reduce(prevVal, currVal): number {
    return prevVal + currVal;
  }

}
