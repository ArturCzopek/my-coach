import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Weight} from "../../shared/entities/get.entities";

@Injectable()
export class WeightsModalsService {

  addWeights: Subject<any> = new Subject<any>();
  editWeights: Subject<any> = new Subject<any>();
  deleteWeights: Subject<any> = new Subject<any>();
  refreshPage: Subject<any> = new Subject<any>();

  public callAddWeights() {
    this.addWeights.next(null);
  }

  public setEditWeights(weights: Weight[], modalTitle: string) {
    this.editWeights.next({weights: weights, modalTitle: modalTitle});
  }

  public setDeleteWeights(weights: Weight[], modalTitle: string) {
    this.deleteWeights.next({weights: weights, modalTitle: modalTitle});
  }

  public callRefreshPage() {
    this.refreshPage.next(null);
  }
}
