import {Injectable, Injector, NgZone} from "@angular/core";
import {TrainingsService} from "./tranings.service";
import {CyclePreview} from "../../shared/entities/preview.entities";
import {Cycle, Exercise, ExerciseSession, Series, Set, Training} from "../../shared/entities/get.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {CYCLE_PREVIEWS_LIST} from "../../shared/entities/mock-data/previews/cycle-previews.mock-data";
import {Observable} from "rxjs";
import {CYCLES_LIST} from "../../shared/entities/mock-data/cycles.mock-data";
import {DOES_NOT_CONTAIN} from "../../shared/global.values";
import {NewCycle, NewExercise, NewTraining} from "../../shared/entities/add.entities";

declare var $: any;

@Injectable()
export class TrainingsMockService extends TrainingsService {

  private newCycleId: number = CYCLES_LIST.length + 1;
  private newSetId: number = CYCLES_LIST
      .map(cycle => cycle.sets.length)
      .reduce(this.reduce) + 1;

  private newExerciseId: number = CYCLES_LIST
      .map(cycle => cycle.sets)
      .map(sets =>
        sets.map(set =>
          set.exercises.length
        ).reduce(this.reduce)
      ).reduce(this.reduce) + 1;

  private newTrainingId: number = CYCLES_LIST
      .map(cycle => cycle.sets)
      .map(sets => sets.map(set => set.trainings.length).reduce(this.reduce))
      .reduce(this.reduce) + 1;

  private newExerciseSessionId: number = CYCLES_LIST
      .map(cycle => cycle.sets)
      .map(sets =>
        sets.map(set =>
          set.exercises.map(exercise =>
            exercise.exerciseSessions.length
          ).reduce(this.reduce)
        ).reduce(this.reduce)
      ).reduce(this.reduce) + 1;

  private newSeriesId: number = CYCLES_LIST
      .map(cycle => cycle.sets)
      .map(sets =>
        sets.map(set =>
          set.exercises.map(exercise =>
            exercise.exerciseSessions.map(exerciseSession =>
              exerciseSession.series.length
            ).reduce(this.reduce)
          ).reduce(this.reduce)
        ).reduce(this.reduce)
      ).reduce(this.reduce) + 1;

  constructor(private injector: Injector) {
    super(injector.get(ServiceInjector), injector.get(NgZone));
  }

  public getActiveCycle(): Observable<Cycle> {
    return this.ngZone.runOutsideAngular(() => {
      return Observable.of(CYCLES_LIST.find(cycle => !cycle.finished));
    });
  }

  public getCyclePreviews(): Observable<CyclePreview[]> {

    return this.ngZone.runOutsideAngular(() => {
      return Observable.create(observer => {
        // timeout is simulation of 'getting from http'
        setTimeout(() => {
          observer.next(CYCLE_PREVIEWS_LIST);
        }, 500);

        setTimeout(() => {
          observer.complete();
        }, 600);
      });
    });
  }

  public getCycle(cycleId: number): Observable<Cycle> {

    return this.ngZone.runOutsideAngular(() => {
      return Observable.create(observer => {
        // timeout is simulation of 'getting from http'
        setTimeout(() => {
          observer.next(CYCLES_LIST.find(cycle => cycle.cycleId === cycleId));
        }, 500);

        setTimeout(() => {
          observer.complete();
        }, 600);
      });
    });
  }

  public getExercisesWithSessionForTraining(trainingId: number): Observable<Exercise[]> {
    return this.ngZone.runOutsideAngular(() => {
      let trainingIndex = DOES_NOT_CONTAIN;
      let trainingSet: Set = null;

      CYCLES_LIST.forEach(cycle => {
        cycle.sets.forEach(set => {
          const tmpTrainingIndex = set.trainings.findIndex(currentTraining => currentTraining.trainingId === trainingId);

          if (tmpTrainingIndex !== DOES_NOT_CONTAIN) {
            trainingIndex = tmpTrainingIndex;
            trainingSet = set;
            return;
          }
        });
      });

      const cutExercises: Exercise[] = trainingSet.exercises
        .map(exercise =>
          new Exercise(exercise.exerciseId, exercise.exerciseName, [exercise.exerciseSessions[trainingIndex]])
        );

      // workaround for deep copy...
      return Observable.of(JSON.parse(JSON.stringify(cutExercises)));
    });
  }

  public addCycle(cycleToAdd: NewCycle): Observable<any> {
    this.ngZone.runOutsideAngular(() => {
      const sets: Set[] = [];
      cycleToAdd.sets.map(set => sets.push(new Set(this.newSetId++, set.setName, [], [])));
      const cycle: Cycle = new Cycle(this.newCycleId, sets, false, cycleToAdd.startDate);
      this.newCycleId++;

      CYCLES_LIST.push(cycle);
      CYCLE_PREVIEWS_LIST.push(new CyclePreview(cycle.cycleId, false, cycle.startDate));
    });

    return Observable.of(true);
  }

  public addExercises(exercisesToAdd: NewExercise[]): Observable<any> {
    return this.ngZone.runOutsideAngular(() => {
      for (const exercise of exercisesToAdd) {


        this.getActiveCycle().first().subscribe(
          cycle => {
            const setIdInArray = cycle.sets.findIndex(set => set.setId === exercise.setId);
            const exerciseToAdd: Exercise = new Exercise(this.newExerciseId, exercise.exerciseName, []);

            if (exercise.exerciseDescription) {
              exerciseToAdd.exerciseDescription = exercise.exerciseDescription;
            }

            this.newExerciseId++;
            cycle.sets[setIdInArray].exercises.push(exerciseToAdd);
          },
          error => console.error('error', error)
        );
      }

      return Observable.of(true);
    });
  }

  public addTraining(trainingToAdd: NewTraining): Observable<any> {
    return this.ngZone.runOutsideAngular(() => {
      this.getActiveCycle().first().subscribe(
        cycle => {
          const set: Set = cycle.sets.find(currentSet => currentSet.setId === trainingToAdd.setId);

          set.trainings.push(new Training(this.newTrainingId, trainingToAdd.trainingDate));
          this.newTrainingId++;

          trainingToAdd.exerciseSessions.forEach(exerciseSession => {

            const seriesList: Series[] = [];

            if (!exerciseSession.isEmpty) {
              exerciseSession.series.forEach(series => {

                if (series.comment && series.comment.length > 0) {
                  seriesList.push(new Series(this.newSeriesId, series.repeats, series.weight, series.comment));
                } else {
                  seriesList.push(new Series(this.newSeriesId, series.repeats, series.weight));
                }

                this.newSeriesId++;
              });
            }


            const exercise = set.exercises.find(currentExercise => currentExercise.exerciseId === exerciseSession.exerciseId);
            exercise.exerciseSessions.push(
              new ExerciseSession(
                this.newExerciseSessionId,
                seriesList,
                exerciseSession.isEmpty
              )
            );

            this.newExerciseSessionId++;
          });

          return Observable.of(true);
        },
        error => console.error(error, 'error')
      );
    });
  }

  public deleteCycle(cycleToDelete: Cycle): Observable<any> {
    return this.ngZone.runOutsideAngular(() => {
      const cycleId = CYCLES_LIST.findIndex(cycle => cycle.cycleId === cycleToDelete.cycleId);

      CYCLES_LIST.splice(cycleId, 1);
      CYCLE_PREVIEWS_LIST.splice(cycleId, 1);

      return Observable.of(true);
    });
  }

  public deleteExercise(exerciseToDelete: Exercise): Observable<any> {
    return this.ngZone.runOutsideAngular(() => {
      CYCLES_LIST.forEach(cycle => {
        cycle.sets.forEach(set => {
          const exerciseIndex = set.exercises.findIndex(exercise => exercise.exerciseId === exerciseToDelete.exerciseId);
          if (exerciseIndex !== DOES_NOT_CONTAIN) {
            set.exercises.splice(exerciseIndex, 1);
          }
        });
      });

      return Observable.of(true);
    });
  }

  public deleteTraining(trainingToDelete: Training): Observable<any> {
    return this.ngZone.runOutsideAngular(() => {
      CYCLES_LIST.forEach(cycle => {
          cycle.sets.forEach(set => {
            const trainingIndex = set.trainings.findIndex(training => training.trainingId === trainingToDelete.trainingId);

            if (trainingIndex !== DOES_NOT_CONTAIN) {
              set.trainings.splice(trainingIndex, 1);
              set.exercises.forEach(exercise => exercise.exerciseSessions.splice(trainingIndex, 1));
            }
          });
        }
      );

      return Observable.of(true);
    });
  }

  public editCycle(cycleToEdit: Cycle): Observable<any> {
    return this.ngZone.runOutsideAngular(() => {
      const cycleIndex: number = CYCLES_LIST.findIndex(cycle => cycle.cycleId === cycleToEdit.cycleId);

      if (cycleIndex !== DOES_NOT_CONTAIN) {
        CYCLES_LIST[cycleIndex] = cycleToEdit;
      }

      for (let i = 0; i < CYCLE_PREVIEWS_LIST.length; i++) {
        if (CYCLE_PREVIEWS_LIST[i].cycleId === cycleToEdit.cycleId) {
          CYCLE_PREVIEWS_LIST[i].finished = cycleToEdit.finished;
          CYCLE_PREVIEWS_LIST[i].startDate = cycleToEdit.startDate;
          CYCLE_PREVIEWS_LIST[i].endDate = cycleToEdit.endDate;

          if (!CYCLE_PREVIEWS_LIST[i].finished) {
            CYCLE_PREVIEWS_LIST[i].endDate = null;
          }

          break;
        }
      }

      return Observable.of(true);
    });
  }

  public editExercise(exerciseToEdit: Exercise): Observable<any> {
    return this.ngZone.runOutsideAngular(() => {
      CYCLES_LIST.forEach(cycle => {
        cycle.sets.forEach(set => {
          const exerciseIndex = set.exercises.findIndex(exercise => exercise.exerciseId === exerciseToEdit.exerciseId);

          if (exerciseIndex !== DOES_NOT_CONTAIN) {
            set.exercises[exerciseIndex].exerciseName = exerciseToEdit.exerciseName;
            set.exercises[exerciseIndex].exerciseDescription = exerciseToEdit.exerciseDescription;
            return;
          }
        });
      });

      return Observable.of(true);
    });
  }

  public editTraining(trainingToEdit: Training, exercisesToEdit: Exercise[]): Observable<any> {
    return this.ngZone.runOutsideAngular(() => {
      CYCLES_LIST.forEach(cycle => {
        cycle.sets.forEach(set => {
          const trainingIndex = set.trainings.findIndex(currentTraining => currentTraining.trainingId === trainingToEdit.trainingId);

          if (trainingIndex !== DOES_NOT_CONTAIN) {
            set.trainings[trainingIndex].trainingDate = trainingToEdit.trainingDate;

            set.exercises.forEach((currentExercise, i) => {
              currentExercise.exerciseSessions[trainingIndex].empty = exercisesToEdit[i].exerciseSessions[0].empty;

              if (currentExercise.exerciseSessions[trainingIndex].empty) {
                currentExercise.exerciseSessions[trainingIndex].series = [];
              } else {
                currentExercise.exerciseSessions[trainingIndex].series = exercisesToEdit[i].exerciseSessions[0].series;
                currentExercise.exerciseSessions[trainingIndex].series.forEach(series => {
                  if (series.seriesId < 1) {
                    series.seriesId = this.newSeriesId;
                    this.newSeriesId++;
                  }
                });
              }
            });
          }
        });
      });

      return Observable.of(true);
    });
  }

  public hasUserOnlyFinishedCycles(): Observable<boolean> {
    return this.ngZone.runOutsideAngular(() => {
      return Observable.of(CYCLES_LIST.every(cycle => cycle.finished));
    });
  }

  private reduce(prevVal, currVal): number {
    return prevVal + currVal;
  }
}
