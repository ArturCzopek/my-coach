import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {WeightsPreview} from "../../shared/entities/preview.entities";
import {WeightsService} from "./services/weights.service";
import {WeightsModalsService} from "./services/weights-modals.service";
import {ServiceInjector} from "../../shared/services/service.injector";

@Component({
  selector: 'coach-weights-list',
  templateUrl: './weights-list.component.html',
  styleUrls: ['./weights.scss', '../../shared/materialize-upgrades.scss']
})
export class WeightsListComponent implements OnInit, AfterViewInit {

  public isLoading: boolean;
  private weightsPreviews: WeightsPreview[];
  private weightsService: WeightsService;

  constructor(private weightsModalsService: WeightsModalsService, private serviceInjector: ServiceInjector,
              private changeDetectorRef: ChangeDetectorRef) {
    this.weightsService = serviceInjector.getWeightsService();
  }

  ngOnInit() {
    this.loadWeightsPreviews();
    this.weightsModalsService.refreshPage.subscribe(() => this.ngOnInit());
  }

  ngAfterViewInit(): void {
    setTimeout(1000, () => this.changeDetectorRef.detach());
  }

  private loadWeightsPreviews() {
    this.isLoading = true;
    this.weightsService.getWeightsPreviews().first()
      .subscribe(
        previews => this.weightsPreviews = previews.slice().reverse(),
        error => console.error('error', error),
        () => {
          this.isLoading = false;
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  onAddClick() {
    this.weightsModalsService.callAddWeight();
  }

  trackByWeightsPreviewId(index, weightsPreview: WeightsPreview) {
    return `${weightsPreview.month} ${weightsPreview.year}`;
  }
}
