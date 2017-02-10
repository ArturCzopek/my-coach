import {Injectable} from "@angular/core";
import {WeightsPreview} from "../../shared/entities/preview.entities";
import {Observable} from "rxjs";
import {Weight} from "../../shared/entities/get.entities";
import {WEIGHT_LIST} from "../../shared/entities/mock-data/weights.mock-data";
import {WEIGHTS_PREVIEWS_LIST} from "../../shared/entities/mock-data/previews/weight-previews.mock-data";
import {WeightsService} from "./wiehgts.service";

@Injectable()
export class WeightsMockService implements WeightsService {

  public getWeightsPreviews(): Observable<WeightsPreview[]> {
    return Observable.create(observer => {

      //timeout is simulation of 'getting from http'
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

      //timeout is simulation of 'getting from http'
      setTimeout(() => {
        observer.next(weightsToReturn);
      }, 1000);

      setTimeout(() => {
        observer.complete();
      }, 1100);
    })
  }

  public getAllDays(weights: Weight[]): number[] {

    let days: number[] = [];

    weights.forEach((weight) => {
      days.push(weight.measurementDate.getDate())
    });

    return days;
  }

  public getAllValues(weights: Weight[]): number[] {

    let values: number[] = [];

    weights.forEach((weight) => {
      values.push(weight.value)
    });

    return values;
  }
}
