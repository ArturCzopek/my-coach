import {Component, OnInit, Input} from "@angular/core";
import {WeightsPreview} from "../shared/entities/preview.entities";
import {Weight} from "../shared/entities/get.entities";
import {WeightsService} from "./services/weights.service";
import {WeightsModalsService} from "./services/weights-modals.service";
import {ServiceInjector} from "../shared/services/service.injector";

@Component({
  selector: 'coach-weights-card',
  templateUrl: 'weights-card.component.html',
  styleUrls: ['./weights.scss', '../shared/materialize-upgrades.scss']
})
export class WeightsCardComponent implements OnInit {

  @Input() weightsPreview: WeightsPreview;

  public previewTitle: string;
  public weights: Weight[];
  public weightsDays: number[];
  public weightsValues: number[];

  public chartData: any[] = [];
  public chartLabels: string[] = [];

  public errorMessage: string;
  public showWeights: boolean;
  public isLoading: boolean;

  public arrowImageClass: string;

  private weightsService: WeightsService;

  constructor(private weightsModalsService: WeightsModalsService, private serviceInjector: ServiceInjector) {
    this.weightsService = serviceInjector.getWeightsService();
  }

  ngOnInit() {
    // false showReport because at first toggle we want to see true to load data
    this.showWeights = false;
    this.isLoading = true;
    this.errorMessage = '';
    this.weights = null;
    this.arrowImageClass = 'left-arrow';
    this.previewTitle = this.weightsService.getPreviewTitle(this.weightsPreview);
  }

  onWeightsClick() {
    this.toggleShow();

    if (this.showWeights) {
      if (this.weights == null) {
        this.weightsService.getWeights(this.weightsPreview)
          .subscribe(
            weights => {
              this.errorMessage = '';
              this.weights = weights;
              this.weightsDays = this.weightsService.getAllDays(this.weights);
              this.weightsValues = this.weightsService.getAllValues(this.weights);
              this.chartData = [
                {data: this.weightsValues, label: "Weight [kg]: " }
              ];
              this.chartLabels = this.weightsService.formatDaysToDisplayingValues(this.weightsDays);
            },
            error => {
              this.errorMessage = 'Cannot load weights!';
              console.log(error);
            },
            () => {
              this.isLoading = false;
            }
          );
      }
    }
  }

  getLoadingStyle() {
    if (this.isLoading) {
      return "loading";
    } else {
      return "";
    }
  }

  public toggleShow() {
    this.showWeights = !this.showWeights;

    if (this.showWeights) {
      this.arrowImageClass = 'down-arrow';
    } else {
      this.arrowImageClass = 'left-arrow';
    }
  }


  public onEditClick() {
    this.weightsModalsService.setEditWeights(this.weights, this.previewTitle);
  }

  public onDeleteClick() {
    this.weightsModalsService.setDeleteWeights(this.weights, this.previewTitle);
  }
}
