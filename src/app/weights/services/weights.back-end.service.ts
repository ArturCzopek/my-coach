import {WeightsService} from "./weights.service";
import {Injectable, Injector} from "@angular/core";
import {Weight} from "../../shared/entities/get.entities";
import {Observable} from "rxjs/Observable";
import {WeightsPreview} from "../../shared/entities/preview.entities";
import {NewWeight} from "../../shared/entities/add.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {Http, RequestOptions} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class WeightsBackEndService extends WeightsService {

  private weightUrl = '/weight';

  constructor(private injector: Injector, http: Http) {
    super(injector.get(ServiceInjector), http);
  }

  public getWeightsPreviews(): Observable<WeightsPreview[]> {
    return this.http.get(`${environment.url}${this.weightUrl}/previews`).map(res => res.json());
  }

  public getWeights(weightsPreview: WeightsPreview): Observable<Weight[]> {
    return this.http.get(`${environment.url}${this.weightUrl}/forDate/${weightsPreview.year}/${weightsPreview.month}`).map(res => res.json());
  }

  public addWeight(weightToAdd: NewWeight): Observable<any> {
    return this.http.post(`${environment.url}${this.weightUrl}/add`, new RequestOptions({body:  weightToAdd}));
  }

  public editWeights(weightsToUpdate: Weight[]): Observable<any> {
    return this.http.put(`${environment.url}${this.weightUrl}/update`, new RequestOptions({body: weightsToUpdate}));
  }

  public deleteWeights(weightsToDelete: Weight[]): Observable<any> {
    return this.http.delete(`${environment.url}${this.weightUrl}/delete`, new RequestOptions({body: weightsToDelete}));
  }

  public parseFromServer(weights: Weight[]): Weight[] {
    weights.forEach(weight => {
      if (typeof weight.measurementDate === "string") {
        weight.measurementDate = this.dateService.parseStringFromServerToDate(weight.measurementDate);
      }
    });

    return weights;
  }
}
