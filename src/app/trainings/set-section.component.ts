import {Exercise, ExerciseSession, Series, Set, Training} from "../shared/entities/get.entities";
import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from "@angular/core";
import {DateService} from "../shared/services/date.service";
import {ServiceInjector} from "../shared/services/service.injector";
import {TrainingsService} from "./services/tranings.service";
import {TrainingModalsService} from "./services/training-modals.service";

@Component({
  selector: 'coach-set-section',
  templateUrl: 'set-section.component.html',
  styleUrls: ['./trainings.scss', '../shared/materialize-upgrades.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetSectionComponent implements AfterViewInit {
  @Input() set: Set;
  @Input() finishedCycles: boolean;

  private dateService: DateService;
  private trainingsService: TrainingsService;

  constructor(serviceInjector: ServiceInjector, private trainingModalsService: TrainingModalsService,
              private changeDetectorRef: ChangeDetectorRef) {
    this.dateService = serviceInjector.getDateService();
    this.trainingsService = serviceInjector.getTrainingsService();
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detach();
  }

  onAddExercise() {
    this.trainingModalsService.callAddExercise(this.finishedCycles);
  }

  onDeleteExercise(exercise: Exercise) {
    this.trainingModalsService.callDeleteExercise(exercise);
  }

  onDeleteTraining(training: Training) {
    this.trainingModalsService.callDeleteTraining(training);
  }

  onEditExercise(exercise: Exercise) {
    this.trainingModalsService.callEditExercise(exercise);
  }

  onEditTraining(training: Training) {
    this.trainingModalsService.callEditTraining(training);
  }

  trackByExerciseId(index, exercise: Exercise) {
    return exercise.exerciseId;
  }

  trackBySessionId(index, session: ExerciseSession) {
    return session.exerciseSessionId;
  }

  trackBySeriesId(index, series: Series) {
    return series.seriesId;
  }
}
