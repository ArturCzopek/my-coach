import {TrainingsService} from "./tranings.service";
import {Injectable, Injector, NgZone} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {CyclePreview} from "../../shared/entities/preview.entities";
import {Cycle, Exercise, Training} from "../../shared/entities/get.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {NewCycle, NewExercise, NewTraining} from "../../shared/entities/add.entities";

@Injectable()
export class TrainingsBackEndService extends TrainingsService {

  constructor(private injector: Injector) {
    super(injector.get(ServiceInjector), injector.get(NgZone));
  }

  public getActiveCycle(): Cycle {
    console.log("TrainingsBackEndService#getActiveCycle not implemented yet");
    return null;
  }

  public getCycle(cycleId: number): Observable<Cycle> {
    console.log("TrainingsBackEndService#getCycle not implemented yet");
    return null;
  }

  public getCyclePreviews(): Observable<CyclePreview[]> {
    console.log("TrainingsBackEndService#getCyclePreviews not implemented yet");
    return null;
  }

  public getExercisesWithSessionForTraining(training: Training): Exercise[] {
    console.log("TrainingsBackEndService#editExercise not implemented yet");
    return null;
  }

  public addCycle(cycleToAdd: NewCycle): void {
    console.log("TrainingsBackEndService#addCycle not implemented yet");
  }

  public addExercises(exerciseToAdd: NewExercise[]): void {
    console.log("TrainingsBackEndService#addExercises not implemented yet");
  }

  public addTraining(trainingToAdd: NewTraining): void {
    console.log("TrainingsBackEndService#addTraining not implemented yet");
  }

  public deleteCycle(cycleToDelete: Cycle): void {
    console.log("TrainingsBackEndService#deleteCycle not implemented yet");
  }

  public deleteExercise(exerciseToDelete: Exercise): void {
    console.log("TrainingsBackEndService#deleteExercise not implemented yet");
  }

  public deleteTraining(trainingToDelete: Training): void {
    console.log("TrainingsBackEndService#deleteTraining not implemented yet");
  }

  public editCycle(cycleToEdit: Cycle): void {
    console.log("TrainingsBackEndService#editCycle not implemented yet");
  }

  public editExercise(exerciseToEdit: Exercise): void {
    console.log("TrainingsBackEndService#editExercise not implemented yet");
  }

  public editTraining(trainingToEdit: Training, exercisesToEdit: Exercise[]): void {
    console.log("TrainingsBackEndService#editTraining not implemented yet");
  }

  public hasUserOnlyFinishedCycles(): boolean {
    console.log("TrainingsBackEndService#hasUserOnlyFinishedCycles not implemented yet");
    return null;
  }
}
