import {Injectable, Injector} from "@angular/core";
import {TrainingsService} from "./tranings.service";
import {CyclePreview} from "../../shared/entities/preview.entities";
import {Cycle, Set} from "../../shared/entities/get.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {CYCLE_PREVIEWS_LIST} from "../../shared/entities/mock-data/previews/cycle-previews.mock-data";
import {Observable} from "rxjs/Observable";
import {CYCLES_LIST} from "../../shared/entities/mock-data/cycles.mock-data";

@Injectable()
export class TrainingsMockService extends TrainingsService {

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
        observer.next(this.getCycleById(cycleId));
      }, 500);

      setTimeout(() => {
        observer.complete();
      }, 600);
    });
  }

  getTrainingDatesForSet(set: Set): string[] {
    const trainingDates: string[] = [];

    if (set.trainings) {
      set.trainings.forEach((training) => trainingDates.push(this.dateService.parseDateToString(training.trainingDate)));
    }

    return trainingDates;
  }

  private getCycleById(cycleId: number): Cycle {
    for (const cycle of CYCLES_LIST) {
      if (cycle.cycleId === cycleId) {
        return cycle;
      }
    }

    return null;
  }

}
