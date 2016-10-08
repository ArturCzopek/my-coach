import {NgModule} from "@angular/core/src/metadata/ng_module";
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
