import {Set} from "../shared/entities/get.entities";
import {Component, Input} from "@angular/core";
import {DateService} from "../shared/services/date.service";
import {ServiceInjector} from "../shared/services/service.injector";
import {TrainingsService} from "./services/tranings.service";

@Component({
  selector: 'coach-set-section',
  templateUrl: 'set-section.component.html',
  styleUrls: ['./trainings.scss', '../shared/materialize-upgrades.scss']
})
export class SetSectionComponent {
  @Input() set: Set;

  private dateService: DateService;
  private trainingsService: TrainingsService;

  constructor(serviceInjector: ServiceInjector) {
    this.dateService = serviceInjector.getDateService();
    this.trainingsService = serviceInjector.getTrainingsService();
  }
}
