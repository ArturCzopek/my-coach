import {WeightsPreview} from "../../shared/entities/preview.entities";
import {Observable} from "rxjs";
import {Weight} from "../../shared/entities/get.entities";
import {NewWeight} from "../../shared/entities/add.entities";

export abstract class WeightsService {

  abstract getWeightsPreviews(): Observable<WeightsPreview[]>;

  abstract getWeights(weightsPreview: WeightsPreview): Observable<Weight[]>;

  abstract getAllDays(weights: Weight[]): number[];

  abstract getAllValues(weights: Weight[]): number[];

  abstract addWeight(weightToAdd: NewWeight): void;

  abstract editWeights(weights: Weight[]): void;

  abstract deleteWeights(weights: Weight[]): void;

  public getPreviewTitle(weightsPreview: WeightsPreview): string {
    return `${weightsPreview.month} ${weightsPreview.year}r.`;
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

  private formatDay(day: number): string {
    if (day > 0 && day < 10) {
      return `Day 0${day}`;
    } else {
      return `Day ${day}`;
    }
  }
}
