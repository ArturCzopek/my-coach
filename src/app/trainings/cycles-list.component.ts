import {Component, OnInit} from "@angular/core";
import {CyclePreview} from "../shared/entities/preview.entities";
import {TrainingsService} from "./services/tranings.service";
import {ServiceInjector} from "../shared/services/service.injector";
import {TrainingModalsService} from "./services/training-modals.service";

@Component({
  selector: 'coach-cycles-list',
  templateUrl: './cycles-list.component.html',
  styleUrls: ['./trainings.scss', '../shared/materialize-upgrades.scss']
})
export class CyclesListComponent implements OnInit {

  public isLoading: boolean;
  private cyclePreviews: CyclePreview[];
  private trainingService: TrainingsService;

  constructor(private serviceInjector: ServiceInjector, private trainingModalsService: TrainingModalsService) {
    this.trainingService = serviceInjector.getTrainingsService();
  }

  ngOnInit() {
    this.loadCyclePreviews();
    this.trainingModalsService.refreshPage.subscribe(() => this.ngOnInit());
  }

  private loadCyclePreviews() {
    this.isLoading = true;
    this.trainingService.getCyclePreviews()
      .subscribe(
        previews => {
          this.cyclePreviews = previews.slice().reverse();
        },
        () => {},
        () => {
          this.isLoading = false;
        }
      );
  }

  onAddExerciseClick() {
    this.trainingModalsService.callAddExercise();
  }

  onAddCycleClick() {
    this.trainingModalsService.callAddCycle();
  }

  onAddTrainingClick() {
    this.trainingModalsService.callAddTraining();
  }
}
