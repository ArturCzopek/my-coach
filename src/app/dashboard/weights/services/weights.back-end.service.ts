import {WeightsService} from "./weights.service";
import {Injectable, Injector} from "@angular/core";
import {Weight} from "../../../shared/entities/get.entities";
import {Observable} from "rxjs/Observable";
import {WeightsPreview} from "../../../shared/entities/preview.entities";
import {NewWeight} from "../../../shared/entities/add.entities";
import {ServiceInjector} from "../../../shared/services/service.injector";
import {Http, RequestOptions} from "@angular/http";
import {environment} from "../../../../environments/environment";

@Injectable()
export class WeightsBackEndService extends WeightsService {

  private weightUrl = '/weight';

  constructor(private injector: Injector, private http: Http)  {
    super(injector.get(ServiceInjector));
  }

  public getWeightsPreviews(): Observable<WeightsPreview[]> {
    return this.http.get(`${environment.server.url}${this.weightUrl}/previews`).map(res => res.json());
  }

  public getWeights(weightsPreview: WeightsPreview): Observable<Weight[]> {
    return this.http.get(`${environment.server.url}${this.weightUrl}/forDate/${weightsPreview.year}/${weightsPreview.month}`)
      .map(res => res.json());
  }

  public addWeight(weightToAdd: NewWeight): Observable<any> {
    return this.http.post(`${environment.server.url}${this.weightUrl}/add`, weightToAdd);
  }

  public deleteWeights(weightsToDelete: Weight[]): Observable<any> {
    return this.http.delete(`${environment.server.url}${this.weightUrl}/delete`, new RequestOptions({body: weightsToDelete}));
  }

  public editWeights(weightsToEdit: Weight[]): Observable<any> {
    return this.http.put(`${environment.server.url}${this.weightUrl}/update`, weightsToEdit);
  }
}
