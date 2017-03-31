import {WeightsService} from "./weights.service";
import {Injectable, Injector} from "@angular/core";
import {Weight} from "../../shared/entities/get.entities";
import {Observable} from "rxjs/Observable";
import {WeightsPreview} from "../../shared/entities/preview.entities";
import {NewWeight} from "../../shared/entities/add.entities";
import {ServiceInjector} from "../../shared/services/service.injector";

@Injectable()
export class WeightsBackEndService extends WeightsService {

  constructor(private injector: Injector) {
    super(injector.get(ServiceInjector));
  }

  getWeightsPreviews(): Observable<WeightsPreview[]> {
    console.log('WeightsBackEndService#getWeightsPreviews not implemented yet');
    return null;
  }

  getWeights(weightsPreview: WeightsPreview): Observable<Weight[]> {
    console.log('WeightsBackEndService#getWeights not implemented yet');
    return null;
  }

  getAllDays(weights: Weight[]): number[] {
    console.log('WeightsBackEndService#getAllDays not implemented yet');
    return null;
  }

  getAllValues(weights: Weight[]): number[] {
    console.log('WeightsBackEndService#getAllValues not implemented yet');
    return null;
  }

  addWeight(weightToAdd: NewWeight): void {
    console.log('WeightsBackEndService#addWeights not implemented yet');
  }

  editWeights(weights: Weight[]): void {
    console.log('WeightsBackEndService#editWeights not implemented yet');
  }

  deleteWeights(weights: Weight[]): void {
    console.log('WeightsBackEndService#deleteWeights not implemented yet');
  }
}
