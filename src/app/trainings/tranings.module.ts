import {NgModule} from "@angular/core";
import {TrainingsComponent} from "./trainings.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [TrainingsComponent],
  imports: [
    HttpModule,
    CommonModule
  ]
})
export class TrainingsModule {}
