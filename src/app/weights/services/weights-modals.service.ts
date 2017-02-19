import {Subject} from "rxjs";
import {Weight} from "../../shared/entities/get.entities";

export class WeightsModalsService {

  addWeight: Subject<any> = new Subject<any>();
  editWeights: Subject<any> = new Subject<any>();
  deleteWeights: Subject<any> = new Subject<any>();
  refreshPage: Subject<any> = new Subject<any>();

  public callAddWeight() {
    this.addWeight.next(null);
  }

  public callEditWeights(weights: Weight[], modalTitle: string) {
    this.editWeights.next({weights: weights, modalTitle: modalTitle});
  }

  public callDeleteWeights(weights: Weight[], modalTitle: string) {
    this.deleteWeights.next({weights: weights, modalTitle: modalTitle});
  }

  public callRefreshPage() {
    this.refreshPage.next(null);
  }
}
