import {Component, OnInit} from '@angular/core';
import {WEIGHT_PREVIEWS_LIST} from "../shared/entities/mock-data/previews/weight-previews.mock-data";
import {WeightPreview} from "../shared/entities/preview.entities";
import {WEIGHT_LIST} from "../shared/entities/mock-data/weights.mock-data";
import {Weight} from "../shared/entities/get.entities";

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
