import {Component, OnInit} from '@angular/core';
import {WEIGHT_PREVIEWS_LIST} from "../shared/entities/mock-data/previews/WeightPreviews";
import {WeightPreview} from "../shared/entities/PreviewEntites";
import {WEIGHT_LIST} from "../shared/entities/mock-data/Weights";
import {Weight} from "../shared/entities/GetEntities";

@Component({
  selector: 'coach-weight',
  templateUrl: './weights.component.html',
  styleUrls: ['./weights.component.scss']
})
export class WeightsComponent implements OnInit {

  private showContents: boolean[];

  constructor() {
  }

  ngOnInit() {
    this.showContents = [true, true];
  }

  getWeightPreviews(): WeightPreview[] {
    return WEIGHT_PREVIEWS_LIST;
  }

  showContent(index: number): boolean {
    return this.showContents[index];
  }

  getAllDays(month: number): number[] {

    let weights: Weight[];

    if (month === 10) {
      weights = WEIGHT_LIST[0];
    } else {
      weights = WEIGHT_LIST[1];
    }

    let days: number[] = [];

    weights.forEach((weight) => {
      days.push(weight.measurementDate.getDate())
    });

    return days;
  }

  getAllValues(month: number): number[] {

    let weights: Weight[];

    if (month === 10) {
      weights = WEIGHT_LIST[0];
    } else {
      weights = WEIGHT_LIST[1];
    }

    let values: number[] = [];

    weights.forEach((weight) => {
      values.push(weight.value)
    });

    return values;
  }
}
