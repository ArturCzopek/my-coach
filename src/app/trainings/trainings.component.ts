import {Component, OnInit} from '@angular/core';
import {CYCLES_LIST} from "../shared/entities/mock-data/Cycles";
import {Cycle} from "../shared/entities/GetEntities";

@Component({
  selector: 'coach-training',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  private showContents: boolean[]

  constructor() {
  }

  ngOnInit() {
    this.showContents = [false, false, true];
  }

  getCycles(): Cycle[] {
    return CYCLES_LIST;
  }

  showContent(index: number): boolean {
    return this.showContents[index];
  }
}
