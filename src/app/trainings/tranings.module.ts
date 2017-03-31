import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {TrainingsMockService} from "./services/trainings.mock.service";
import {TrainingsBackEndService} from "./services/trainings.back-end.service";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {CyclesListComponent} from "./cycles-list.component";
import {CycleCardComponent} from "./cycle-card.component";
import {SetSectionComponent} from "./set-section.component";

@NgModule({
  declarations: [
    CyclesListComponent,
    CycleCardComponent,
    SetSectionComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    TrainingsMockService,
    TrainingsBackEndService
  ]
})
export class TrainingsModule {
}
