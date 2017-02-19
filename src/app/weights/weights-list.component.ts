import {Component, OnInit} from "@angular/core";
import {WeightsPreview} from "../shared/entities/preview.entities";
import {WeightsService} from "./services/weights.service";
import {WeightsModalsService} from "./services/weights-modals.service";
import {ServiceInjector} from "../shared/services/service.injector";

@Component({
  selector: 'coach-weights-list',
  templateUrl: './weights-list.component.html',
  styleUrls: ['./weights.scss', '../shared/materialize-upgrades.scss']
})
export class WeightsListComponent implements OnInit {

  public isLoading: boolean;
  private weightsPreviews: WeightsPreview[];
  private weightsService: WeightsService;

  constructor(private weightsModalsService: WeightsModalsService, private serviceInjector: ServiceInjector) {
    this.weightsService = serviceInjector.getWeightsService();
  }

  ngOnInit() {
    this.loadWeightsPreviews();
    this.weightsModalsService.refreshPage.subscribe(() => this.ngOnInit());
  }

  private loadWeightsPreviews() {
    this.isLoading = true;
    this.weightsService.getWeightsPreviews()
      .subscribe(
        previews => {
          this.weightsPreviews = previews.reverse();
        },
        () => {},
        () => {
          this.isLoading = false;
        }
      );
  }

  onAddClick() {
    this.weightsModalsService.callAddWeight();
  }
}
