import {CircleLoaderComponent} from "./circle-loader.component";
import {StripLoaderComponent} from "./strip-loader.component";
import {NgModule} from "@angular/core";
import {ModalFooter} from "./modal-footer.component";

@NgModule({
  declarations: [
    CircleLoaderComponent,
    StripLoaderComponent,
    ModalFooter
  ],
  exports: [
    CircleLoaderComponent,
    StripLoaderComponent,
    ModalFooter
  ]
})
export class UtilsModule {
}
