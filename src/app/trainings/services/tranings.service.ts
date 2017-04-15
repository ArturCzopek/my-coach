import {CyclePreview} from "../../shared/entities/preview.entities";
import {Cycle, Exercise, Series, Training} from "../../shared/entities/get.entities";
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

  abstract getActiveCycle(): Observable<Cycle>;

  abstract getCyclePreviews(): Observable<CyclePreview[]>

  abstract getCycle(cycleId: number): Observable<Cycle>;

  abstract getExercisesWithSessionForTraining(trainingId: number): Observable<Exercise[]>;

  abstract addCycle(cycleToAdd: NewCycle): Observable<any>;

  abstract addExercises(exercisesToAdd: NewExercise[]): Observable<any>;

  abstract addTraining(trainingToAdd: NewTraining): Observable<any>;

  abstract deleteCycle(cycleToDelete: Cycle): Observable<any>;

  abstract deleteExercise(exerciseToDelete: Exercise): Observable<any>;

  abstract deleteTraining(trainingToDelete: Training): Observable<any>;

  abstract editCycle(cycleToEdit: Cycle): Observable<any>;

  abstract editExercise(exerciseToEdit: Exercise): Observable<any>;

  abstract editTraining(trainingToEdit: Training, exercisesToEdit: Exercise[]): Observable<any>;

  abstract hasUserOnlyFinishedCycles(): Observable<boolean>;

  public getCyclePreviewTitle(cyclePreview: CyclePreview): string {

    return this.ngZone.runOutsideAngular(() => {
      let title: string = `${this.dictionaryService.getDictionaryValue('page.trainings.cycle.card.title')} `
        + `${this.dateService.parseDateToString(cyclePreview.startDate)} - `;

      if (cyclePreview.finished && cyclePreview.endDate) {
        title += `${this.dateService.parseDateToString(cyclePreview.endDate)}`;
      } else {
        title += `${this.dictionaryService.getDictionaryValue('page.trainings.cycle.current')}`;
      }

      return title;
    });
  }

  public getFormattedRepeatsWithWeight(series: Series): string {

    return this.ngZone.runOutsideAngular(() => {
      return `${series.repeats} ${this.dictionaryService.getDictionaryValue('global.multiply.label')} ` +
        `${series.weight} ${this.dictionaryService.getDictionaryValue('global.weight.label')}`;
    });
  }
}
