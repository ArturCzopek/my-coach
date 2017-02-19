import {Injector, Injectable} from "@angular/core";
import {WeightsPreview} from "../../shared/entities/preview.entities";
import {Observable} from "rxjs";
import {Weight} from "../../shared/entities/get.entities";
import {WEIGHT_LIST} from "../../shared/entities/mock-data/weights.mock-data";
import {WEIGHTS_PREVIEWS_LIST} from "../../shared/entities/mock-data/previews/weight-previews.mock-data";
import {WeightsService} from "./weights.service";
import {DOES_NOT_CONTAIN} from "../../shared/global.values";
import {NewWeight} from "../../shared/entities/add.entities";
import {ServiceInjector} from "../../shared/services/service.injector";

@Injectable()
export class WeightsMockService extends WeightsService {

  private newId: number = WEIGHT_LIST[0].length + WEIGHT_LIST[1].length;

  constructor(private injector: Injector) {
    super(injector.get(ServiceInjector));
  }

  public getWeightsPreviews(): Observable<WeightsPreview[]> {
    return Observable.create(observer => {

      // timeout is simulation of 'getting from http'
      setTimeout(() => {
        observer.next(WEIGHTS_PREVIEWS_LIST);
      }, 1000);

      setTimeout(() => {
        observer.complete();
      }, 1100);
    });
  };

  public getWeights(weightsPreview: WeightsPreview): Observable<Weight[]> {
    return Observable.create(observer => {

      let weightsToReturn: Weight[];

      if (weightsPreview.month === 10) {
        weightsToReturn = WEIGHT_LIST[0];
      } else {
        weightsToReturn = WEIGHT_LIST[1];
      }

      // timeout is simulation of 'getting from http'
      setTimeout(() => {
        observer.next(weightsToReturn);
      }, 1000);

      setTimeout(() => {
        observer.complete();
      }, 1100);
    });
  }

  public getAllDays(weights: Weight[]): number[] {

    const days: number[] = [];

    weights.forEach((weight: Weight) => {
      days.push(weight.measurementDate.getDate());
    });

    return days;
  }

  public getAllValues(weights: Weight[]): number[] {

    const values: number[] = [];

    weights.forEach((weight: Weight) => {
      values.push(weight.value);
    });

    return values;
  }

  // for mock we add only to second month
  public addWeight(weightToAdd: NewWeight): void {
    const weightId: number = this.newId;
    this.newId++;
    const weight: Weight = new Weight(weightId, weightToAdd.value, weightToAdd.measurementDate);
    WEIGHT_LIST[1].push(weight);
  }

  public editWeights(weights: Weight[]): void {

    for (const weightToUpdate of weights) {
      for (const weightList of WEIGHT_LIST) {
        const weightIndex = weightList.indexOf(weightToUpdate);
        if (weightIndex === DOES_NOT_CONTAIN) {
          continue;
        } else {
          weightList[weightIndex] = weightToUpdate;
          break;
        }
      }
    }
  }

  public deleteWeights(weights: Weight[]): void {

    for (const weightToDelete of weights) {
      for (const weightList of WEIGHT_LIST) {
        const weightIndex: number = weightList.indexOf(weightToDelete);
        if (weightIndex === DOES_NOT_CONTAIN) {
          continue;
        } else {
          weightList.splice(weightIndex, 1);
          break;
        }
      }
    }
  }
}
