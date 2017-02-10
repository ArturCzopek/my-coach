import {WeightsService} from "./wiehgts.service";
import {Injectable} from "@angular/core";
import {Weight} from "../../shared/entities/get.entities";
import {Observable} from "rxjs";
import {WeightsPreview} from "../../shared/entities/preview.entities";

@Injectable()
export class WeightsBackEndService implements WeightsService {

  getWeightsPreviews(): Observable<WeightsPreview[]> {
    console.log('WeightsBackEndService#getWeightsPreviews not implemented yet')
    return null;
  }

  getWeights(weightsPreview: WeightsPreview): Observable<Weight[]> {
    console.log('WeightsBackEndService#getWeights not implemented yet')
    return null;
  }

  getAllDays(weights: Weight[]): number[] {
    console.log('WeightsBackEndService#getAllDays not implemented yet')
    return null;
  }

  getAllValues(weights: Weight[]): number[] {
    console.log('WeightsBackEndService#getAllValues not implemented yet')
    return null;
  }
}
