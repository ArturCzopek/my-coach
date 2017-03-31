import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Cycle} from "../../shared/entities/get.entities";

@Injectable()
export class TrainingModalsService {

  deleteCycle: Subject<any> = new Subject<any>();
  editCycle: Subject<any> = new Subject<any>();
  refreshPage: Subject<any> = new Subject<any>();

  public callDeleteCycle(cycle: Cycle, modalTitle: string) {
    this.deleteCycle.next({cycle: cycle, modalTitle: modalTitle});
  }

  public callEditCycle(cycle: Cycle, modalTitle: string) {
    this.editCycle.next({cycle: cycle, modalTitle: modalTitle});
  }

  public callRefreshPage() {
    this.refreshPage.next(null);
  }
}
