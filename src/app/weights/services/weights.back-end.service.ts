import {WeightsService} from "./weights.service";
import {Injectable} from "@angular/core";
import {Weight} from "../../shared/entities/get.entities";
import {Observable} from "rxjs";
import {WeightsPreview} from "../../shared/entities/preview.entities";
import {NewWeight} from "../../shared/entities/add.entities";

@Injectable()
export class WeightsBackEndService extends WeightsService {

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
