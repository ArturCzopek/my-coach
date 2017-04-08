import {Exercise, Set, Training} from "../shared/entities/get.entities";
import {Component, Input} from "@angular/core";
import {DateService} from "../shared/services/date.service";
import {ServiceInjector} from "../shared/services/service.injector";
import {TrainingsService} from "./services/tranings.service";
import {TrainingModalsService} from "./services/training-modals.service";

@Component({
  selector: 'coach-set-section',
  templateUrl: 'set-section.component.html',
  styleUrls: ['./trainings.scss', '../shared/materialize-upgrades.scss']
})
export class SetSectionComponent {
  @Input() set: Set;

  private dateService: DateService;
  private trainingsService: TrainingsService;

  constructor(serviceInjector: ServiceInjector, private trainingModalsService: TrainingModalsService) {
    this.dateService = serviceInjector.getDateService();
    this.trainingsService = serviceInjector.getTrainingsService();
  }

  onAddExercise() {
    this.trainingModalsService.callAddExercise();
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
}
