import {Component, Input} from "@angular/core";
import {WeightsPreview} from "../shared/entities/preview.entities";
import {Weight} from "../shared/entities/get.entities";
import {WeightsService} from "./services/weights.service";
import {WeightsModalsService} from "./services/weights-modals.service";
import {ServiceInjector} from "../shared/services/service.injector";
import {DictionaryService} from "../shared/services/dictionary.service";
import {BaseCardComponent} from "../shared/components/base-card.component";

@Component({
  selector: 'coach-weights-card',
  templateUrl: 'weights-card.component.html',
  styleUrls: ['./weights.scss', '../shared/materialize-upgrades.scss']
})
export class WeightsCardComponent extends BaseCardComponent {

  @Input() weightsPreview: WeightsPreview;

  public weights: Weight[];
  public weightsDays: number[];
  public weightsValues: number[];

  public chartData: any[] = [];
  public chartLabels: string[] = [];

  private weightsService: WeightsService;
  private dictionaryService: DictionaryService;

  constructor(private weightsModalsService: WeightsModalsService, private serviceInjector: ServiceInjector) {
    super();
    this.weightsService = serviceInjector.getWeightsService();
    this.dictionaryService = serviceInjector.getDictionaryService();
  }

  ngOnInit() {
    super.ngOnInit();
    this.weights = null;
    this.previewTitle = this.weightsService.getPreviewTitle(this.weightsPreview);
  }

  onWeightsClick() {
    this.toggleShow();

    if (this.showData) {
      if (this.weights == null) {
        this.weightsService.getWeights(this.weightsPreview)
          .subscribe(
            weights => {
              this.weights = weights;
              this.weightsDays = this.weightsService.getAllDays(this.weights);
              this.weightsValues = this.weightsService.getAllValues(this.weights);
              this.chartData = [
                {
                  data: this.weightsValues,
                  label: this.dictionaryService.getDictionaryValue('page.weights.chart.point.label')
                }
              ];
              this.chartLabels = this.weightsService.formatDaysToDisplayingValues(this.weightsDays);
            },
            () => {
            },
            () => {
              this.isLoading = false;
            }
          );
      }
    }
  }

  public onEditClick() {
    this.weightsModalsService.callEditWeights(this.weights, this.previewTitle);
  }

  public onDeleteClick() {
    this.weightsModalsService.callDeleteWeights(this.weights, this.previewTitle);
  }
}
