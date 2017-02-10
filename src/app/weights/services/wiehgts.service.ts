import {WeightsPreview} from "../../shared/entities/preview.entities";
import {Observable} from "rxjs";
import {Weight} from "../../shared/entities/get.entities";

export interface WeightsService {

  getWeightsPreviews(): Observable<WeightsPreview[]>;

  getWeights(weightsPreview: WeightsPreview): Observable<Weight[]>;

  getAllDays(weights: Weight[]): number[];

  getAllValues(weights: Weight[]): number[];
}
