import {Component, Input, OnInit} from "@angular/core";
import {CyclePreview} from "../shared/entities/preview.entities";
import {ServiceInjector} from "../shared/services/service.injector";
import {DictionaryService} from "../shared/services/dictionary.service";
import {BaseCardComponent} from "../shared/components/base-card.component";
import {TrainingsService} from "./services/tranings.service";
import {Cycle} from "../shared/entities/get.entities";

@Component({
  selector: 'coach-cycle-card',
  templateUrl: 'cycle-card.component.html',
  styleUrls: ['./trainings.scss', '../shared/materialize-upgrades.scss']
})
export class CycleCardComponent extends BaseCardComponent implements OnInit {

  @Input() cyclePreview: CyclePreview;
  @Input() cycle: Cycle;

  private trainingsService: TrainingsService;
  private dictionaryService: DictionaryService;

  constructor(private serviceInjector: ServiceInjector) {
    super();
    this.trainingsService = serviceInjector.getTrainingsService();
    this.dictionaryService = serviceInjector.getDictionaryService();
  }

  ngOnInit() {
    super.ngOnInit();
    this.cycle = null;
    this.previewTitle = this.trainingsService.getCyclePreviewTitle(this.cyclePreview);
  }

  public onCycleClick() {
    this.toggleShow();

    if (this.showData) {
      if (this.cycle == null) {
        this.trainingsService.getCycle(this.cyclePreview.cycleId)
          .subscribe(
            cycle => {
              this.cycle = cycle;
            },
            () => {},
            () => {
              this.isLoading = false;
            }
          );
      }
    }
  }

  public onEditClick() {
    console.log('Not implemented yet');
    // this.weightsModalsService.callEditWeights(this.weights, this.previewTitle);
  }

  public onDeleteClick() {
    console.log('Not implemented yet');
    // this.weightsModalsService.callDeleteWeights(this.weights, this.previewTitle);
  }
}
