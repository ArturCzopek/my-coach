import {CircleLoaderComponent} from "./circle-loader.component";
import {StripLoaderComponent} from "./strip-loader.component";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    CircleLoaderComponent,
    StripLoaderComponent
  ],
  exports: [
    CircleLoaderComponent,
    StripLoaderComponent
  ]
})
export class UtilsModule {
}
