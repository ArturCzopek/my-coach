import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {PricesListComponent} from "./prices-list.component";
import {PricesMockService} from "./services/prices.mock.service";
import {PricesBackEndService} from "./services/prices.back-end.service";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {PricesModalsService} from "./services/prices-modals.service";
import {PricesCardComponent} from "./prices-card.component";
import {PricesModals} from "./modals/prices.modals";
import {ProductAddModal} from "./modals/product-add.modal";
import {PriceAddModal} from "./modals/price-add.modal";
import {PricesEditModal} from "./modals/prices-edit.modal";
import {ProductEditModal} from "./modals/product-edit.modal";
import {ProductDeleteModal} from "./modals/product-delete.modal";
import {PricesDeleteModal} from "./modals/prices-delete.modal";
import {ShoppingListModal} from "./modals/shopping-list.modal";

@NgModule({
  declarations: [
    PricesListComponent,
    PricesCardComponent,
    PricesModals,
    PriceAddModal,
    PricesDeleteModal,
    PricesEditModal,
    ProductAddModal,
    ProductDeleteModal,
    ProductEditModal,
    ShoppingListModal,
  ],
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    PricesMockService,
    PricesBackEndService,
    PricesModalsService
  ]
})

export class PricesModule {
}
