import {CyclePreview} from "../../shared/entities/preview.entities";
import {Cycle, Series, Set} from "../../shared/entities/get.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {Inject} from "@angular/core";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {DateService} from "../../shared/services/date.service";
import {Observable} from "rxjs/Observable";

export abstract class TrainingsService {

  protected dictionaryService: DictionaryService;
  protected dateService: DateService;

  constructor(@Inject(ServiceInjector)  serviceInjector: ServiceInjector) {
    this.dictionaryService = serviceInjector.getDictionaryService();
    this.dateService = serviceInjector.getDateService();
  }

  abstract getCyclePreviews(): Observable<CyclePreview[]>

  abstract getCycle(cycleId: number): Observable<Cycle>;

  abstract getTrainingDatesForSet(set: Set): string[];

  getCyclePreviewTitle(cyclePreview: CyclePreview): string {
    let title: string = `${this.dictionaryService.getDictionaryValue('page.trainings.cycle.card.title')} `
      + `${this.dateService.parseDateToString(cyclePreview.startDate)} - `;

    if (cyclePreview.endDate) {
      title += `${this.dateService.parseDateToString(cyclePreview.endDate)}`;
    } else {
      title += `${this.dictionaryService.getDictionaryValue('page.trainings.cycle.current')}`;
    }

    return title;
  }

  getFormattedRepeatsWithWeight(series: Series): string {
    return `${series.repeats} ${this.dictionaryService.getDictionaryValue('global.multiply.label')} ` +
      `${series.weight} ${this.dictionaryService.getDictionaryValue('global.weight.label')}`;
  }
}
