import {Injectable, Injector} from "@angular/core";
import {WeightsPreview} from "../../shared/entities/preview.entities";
import {Observable} from "rxjs/Observable";
import {Weight} from "../../shared/entities/get.entities";
import {WEIGHT_LIST} from "../../shared/entities/mock-data/weights.mock-data";
import {WEIGHTS_PREVIEWS_LIST} from "../../shared/entities/mock-data/previews/weight-previews.mock-data";
import {WeightsService} from "./weights.service";
import {NewWeight} from "../../shared/entities/add.entities";
import {ServiceInjector} from "../../shared/services/service.injector";

@Injectable()
export class WeightsMockService extends WeightsService {

  private newWeightId: number = WEIGHT_LIST[0].length + WEIGHT_LIST[1].length + 1;

  constructor(private injector: Injector)  {
    super(injector.get(ServiceInjector));
  }

  public getWeightsPreviews(): Observable<WeightsPreview[]> {
    return Observable.create(observer => {

      // timeout is simulation of 'getting from http'
      setTimeout(() => {
        observer.next(WEIGHTS_PREVIEWS_LIST);
      }, 500);

      setTimeout(() => {
        observer.complete();
      }, 600);
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

  // for mock we add only to second month
  public addWeight(weightToAdd: NewWeight): Observable<any> {
    const weight: Weight = new Weight(this.newWeightId, weightToAdd.value, weightToAdd.measurementDate);
    this.newWeightId++;
    WEIGHT_LIST[1].push(weight);

    return Observable.of(true);
  }

  public editWeights(weightsToEdit: Weight[]): Observable<any> {

    for (const weight of weightsToEdit) {
      for (const weightList of WEIGHT_LIST) {
        for (let i = 0; i < weightList.length; i++) {
          if (weightList[i].weightId === weight.weightId) {
            weightList[i] = weight;
            break;
          }
        }
      }
    }

    return Observable.of(true);
  }

  public deleteWeights(weights: Weight[]): Observable<any> {

    for (const weightToDelete of weights) {
      for (const weightList of WEIGHT_LIST) {
        for (let i = 0; i < weightList.length; i++) {
          if (weightList[i].weightId === weightToDelete.weightId) {
            weightList.splice(i, 1);
            break;
          }
        }
      }
    }

    return Observable.of(true);
  }
}
