import {Injectable, Injector} from "@angular/core";
import {TrainingsService} from "./tranings.service";
import {CyclePreview} from "../../shared/entities/preview.entities";
import {Cycle} from "../../shared/entities/get.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {CYCLE_PREVIEWS_LIST} from "../../shared/entities/mock-data/previews/cycle-previews.mock-data";
import {Observable} from "rxjs/Observable";
import {CYCLES_LIST} from "../../shared/entities/mock-data/cycles.mock-data";
import {DOES_NOT_CONTAIN} from "../../shared/global.values";

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


  deleteCycle(cycleToDelete: Cycle): void {
    for (let i = 0; i < CYCLES_LIST.length; i++) {
      if (CYCLES_LIST[i].cycleId === cycleToDelete.cycleId) {
        CYCLES_LIST.splice(i, 1);
        break;
      }
    }

    for (let i = 0; i < CYCLE_PREVIEWS_LIST.length; i++) {
      if (CYCLE_PREVIEWS_LIST[i].cycleId === cycleToDelete.cycleId) {
        CYCLE_PREVIEWS_LIST.splice(i, 1);
        break;
      }
    }
  }

  editCycle(cycleToEdit: Cycle): void {
    const cycleIndex: number = CYCLES_LIST.indexOf(cycleToEdit);
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

  private getCycleById(cycleId: number): Cycle {
    for (const cycle of CYCLES_LIST) {
      if (cycle.cycleId === cycleId) {
        return cycle;
      }
    }

    return null;
  }



}
