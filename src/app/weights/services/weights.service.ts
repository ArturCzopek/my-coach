import {Inject} from "@angular/core";
import {WeightsPreview} from "../../shared/entities/preview.entities";
import {Observable} from "rxjs/Observable";
import {Weight} from "../../shared/entities/get.entities";
import {NewWeight} from "../../shared/entities/add.entities";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {DateService} from "../../shared/services/date.service";

export abstract class WeightsService {

  private dictionaryService: DictionaryService;
  private dateService: DateService;

  constructor(@Inject(ServiceInjector) protected serviceInjector: ServiceInjector) {
    this.dictionaryService = serviceInjector.getDictionaryService();
    this.dateService = serviceInjector.getDateService();
  }

  abstract getWeightsPreviews(): Observable<WeightsPreview[]>;

  abstract getWeights(weightsPreview: WeightsPreview): Observable<Weight[]>;

  abstract addWeight(weightToAdd: NewWeight): Observable<any>;

  abstract editWeights(weightsToEdit: Weight[]): Observable<any>;

  abstract deleteWeights(weights: Weight[]): Observable<any>;

  public getAllDays(weights: Weight[]): number[] {
    return weights.map(weight => weight.measurementDate.getDate());
  }

  public getAllValues(weights: Weight[]): number[] {
    return weights.map(weight => weight.value);
  }

  public getPreviewTitle(weightsPreview: WeightsPreview): string {
    return `${this.dictionaryService.getDateDictionarySettings().monthsFull[weightsPreview.month - 1]} ${weightsPreview.year}r.`;
  }

  public formatDaysToDisplayingValuesFromWeights(weights: Weight[]): string[] {
    const days: number [] = this.getAllDays(weights);
    const formattedDays: string[] = this.formatDaysToDisplayingValues(days);
    return formattedDays;
  }

  public formatDaysToDisplayingValues(days: number[]) {
    const formattedDays: string [] = [];

    days.forEach(day => {
      formattedDays.push(this.formatDay(day));
    });

    return formattedDays;
  }

  public parseFromServer(weights: Weight[]): Weight[] {
    weights.forEach(weight => {
      if (typeof weight.measurementDate === "string") {
        weight.measurementDate = this.dateService.parseStringFromServerToDate(weight.measurementDate);
      }
    });

    return weights;
  }

  private formatDay(day: number): string {
    if (day > 0 && day < 10) {
      return `${this.dictionaryService.getDictionaryValue('calendar.day')} 0${day}`;
    } else {
      return `${this.dictionaryService.getDictionaryValue('calendar.day')} ${day}`;
    }
  }
}
