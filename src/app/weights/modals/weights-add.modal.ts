import {OnInit, Component, Injector} from "@angular/core";
import {MaterializeAction} from "angular2-materialize";
import {WeightsService} from "../services/weights.service";
import {EventEmitter} from "@angular/common/src/facade/async";
import {Weight} from "../../shared/entities/get.entities";
import {WeightsModalsService} from "../services/weights-modals.service";
import {environment} from "../../../environments/environment";
import {WeightsBackEndService} from "../services/weights.back-end.service";
import {WeightsMockService} from "../services/weights.mock.service";


declare var Materialize:any;

@Component({
  selector: 'coach-weights-add-modal',
  templateUrl: 'weights-add.modal.html',
  styleUrls:['./weights.modal.scss', '../../shared/materialize-upgrades.scss']
})
export class WeightsAddModal implements OnInit {

  private weightsService: WeightsService;
  private editModalActions = new EventEmitter<string|MaterializeAction>();

  private weightToAdd: Weight;

  constructor(private weightsModalsService: WeightsModalsService, private injector: Injector) {

  }

  ngOnInit(): void {
  }

}
