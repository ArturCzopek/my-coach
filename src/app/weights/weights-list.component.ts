import {Component, OnInit, Injector} from "@angular/core";
import {WeightsPreview} from "../shared/entities/preview.entities";
import {Weight} from "../shared/entities/get.entities";
import {WeightsService} from "./services/wiehgts.service";
import {environment} from "../../environments/environment";
import {WeightsMockService} from "./services/weights.mock.service";
import {WeightsBackEndService} from "./services/weights.back-end.service";

@Component({
  selector: 'coach-weights-list',
  templateUrl: './weights-list.component.html',
  styleUrls: ['./weights.scss', '../shared/materialize-upgrades.scss']
})
export class WeightsListComponent implements OnInit {

  private isLoading: boolean;
  private errorMessage: string;
  private weightsPreviews: WeightsPreview[];
  private modalParams;

  private weightForModal: Weight;

  private weightsService: WeightsService;

  constructor(private injector: Injector) {
    if (environment.isBackendServerAvailable) {
      this.weightsService = this.injector.get(WeightsBackEndService);
    } else {
      this.weightsService = this.injector.get(WeightsMockService);
    }
  }

  ngOnInit() {
    this.loadWeightsPreviews();
    this.weightForModal = null;
    this.modalParams = {
      dismissible: true,
      in_duration: 900,
      out_duration: 900
    };
  }

  private loadWeightsPreviews() {
    this.isLoading = true;
    this.weightsService.getWeightsPreviews()
      .subscribe(
        previews => {
          this.errorMessage = '';
          this.weightsPreviews = previews;
        },
        error => {
          this.errorMessage = 'Cannot get report previews!!';
          console.log(error);
        },
        () => {
          this.isLoading = false;
        }
      );
  }

  editWeight() {
    console.log('Not implemented yet');
  }

  deleteWeight() {
    console.log('Not implemented yet');
  }

  addWeight() {
    console.log('Not implemented yet');
  }

}
