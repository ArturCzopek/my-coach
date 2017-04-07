import {CyclePreview} from "../../shared/entities/preview.entities";
import {Cycle, Exercise, Series} from "../../shared/entities/get.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {Inject, NgZone} from "@angular/core";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {DateService} from "../../shared/services/date.service";
import {Observable} from "rxjs/Observable";
import {NewCycle, NewExercise, NewTraining} from "../../shared/entities/add.entities";

export abstract class TrainingsService {

  protected dictionaryService: DictionaryService;
  protected dateService: DateService;

  constructor(@Inject(ServiceInjector) serviceInjector: ServiceInjector, protected ngZone: NgZone) {
    this.dictionaryService = serviceInjector.getDictionaryService();
    this.dateService = serviceInjector.getDateService();
  }

  abstract getCyclePreviews(): Observable<CyclePreview[]>

  abstract getCycle(cycleId: number): Observable<Cycle>;

  abstract addCycle(cycleToAdd: NewCycle): void;

  abstract addExercises(exercisesToAdd: NewExercise[]): void;

  abstract addTraining(trainingToAdd: NewTraining): void;

  abstract deleteCycle(cycleToDelete: Cycle): void;

  abstract editCycle(cycleToEdit: Cycle): void;

  abstract hasUserOnlyFinishedCycles(): boolean;

  abstract getActiveCycle(): Cycle;

  abstract deleteExercise(exerciseToDelete: Exercise): void;

  getCyclePreviewTitle(cyclePreview: CyclePreview): string {

    return this.ngZone.runOutsideAngular(() => {
      let title: string = `${this.dictionaryService.getDictionaryValue('page.trainings.cycle.card.title')} `
        + `${this.dateService.parseDateToString(cyclePreview.startDate)} - `;

      if (cyclePreview.isFinished && cyclePreview.endDate) {
        title += `${this.dateService.parseDateToString(cyclePreview.endDate)}`;
      } else {
        title += `${this.dictionaryService.getDictionaryValue('page.trainings.cycle.current')}`;
      }

      return title;
    })
  }

  getFormattedRepeatsWithWeight(series: Series): string {

    return this.ngZone.runOutsideAngular(() => {
      return `${series.repeats} ${this.dictionaryService.getDictionaryValue('global.multiply.label')} ` +
        `${series.weight} ${this.dictionaryService.getDictionaryValue('global.weight.label')}`;
    })
  }
}
