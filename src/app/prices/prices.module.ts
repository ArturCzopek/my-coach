import {NgModule} from "@angular/core/src/metadata/ng_module";
import {PricesComponent} from "./prices.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [PricesComponent],
  imports: [
    HttpModule,
    CommonModule
  ]
})

export class PricesModule {}
