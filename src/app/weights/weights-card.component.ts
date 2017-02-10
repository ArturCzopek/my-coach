import {Component, OnInit, Input, Injector} from "@angular/core";
import {WeightsPreview} from "../shared/entities/preview.entities";
import {Weight} from "../shared/entities/get.entities";
import {WeightsMockService} from "./services/weights.mock.service";
import {WeightsBackEndService} from "./services/weights.back-end.service";
import {environment} from "../../environments/environment";
import {WeightsService} from "./services/wiehgts.service";

@Component({
  selector: 'coach-weights-card',
  templateUrl: 'weights-card.component.html',
  styleUrls: ['./weights.scss', '../shared/materialize-upgrades.scss']
})
export class WeightsCardComponent implements OnInit {

  @Input() weightsPreview: WeightsPreview;

  private previewTitle: string;
  private weights: Weight[];
  private weightsDays: number[];
  private weightsValues: number[];

  private chartData: any[] = [];
  private chartLabels: number[] = [];

  private errorMessage: string;
  private showWeights: boolean;
  private isLoading: boolean;

  private arrowImageClass: string;

  private weightsService: WeightsService;

  constructor(private injector: Injector) {
    if (environment.isBackendServerAvailable) {
      this.weightsService = this.injector.get(WeightsBackEndService);
    } else {
      this.weightsService = this.injector.get(WeightsMockService);
    }
  }

  ngOnInit() {
    //false showReport because at first toggle we want to see true to load data
    this.showWeights = false;
    this.isLoading = true;
    this.errorMessage = '';
    this.weights = null;
    this.arrowImageClass = 'left-arrow';
    this.previewTitle = this.getPreviewTitle();
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
              this.chartLabels = this.weightsDays;
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

  private toggleShow() {
    this.showWeights = !this.showWeights;

    if (this.showWeights) {
      this.arrowImageClass = 'down-arrow';
    } else {
      this.arrowImageClass = 'left-arrow';
    }
  }

  private getPreviewTitle() {
    return `${this.weightsPreview.month} ${this.weightsPreview.year}r.`;
  }

  private onEditClick() {
    console.log("Not implemented yet");
  }

  private onDeleteClick() {
    console.log("Not implemented yet");
  }
}
