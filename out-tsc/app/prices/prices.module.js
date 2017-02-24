var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core/src/metadata/ng_module";
import { PricesListComponent } from "./prices-list.component";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { PricesMockService } from "./services/prices.mock.service";
import { PricesBackEndService } from "./services/prices.back-end.service";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { PricesModalsService } from "./services/prices-modals.service";
import { PricesCardComponent } from "./prices-card.component";
import { PricesModals } from "./modals/prices.modals";
import { ProductAddModal } from "./modals/product-add.modal";
import { PriceAddModal } from "./modals/price-add.modal";
import { PricesEditModal } from "./modals/prices-edit.modal";
import { ProductEditModal } from "./modals/product-edit.modal";
import { ProductDeleteModal } from "./modals/product-delete.modal";
import { PricesDeleteModal } from "./modals/prices-delete.modal";
var PricesModule = (function () {
    function PricesModule() {
    }
    return PricesModule;
}());
PricesModule = __decorate([
    NgModule({
        declarations: [
            PricesListComponent,
            PricesCardComponent,
            PricesModals,
            PriceAddModal,
            PricesDeleteModal,
            PricesEditModal,
            ProductAddModal,
            ProductDeleteModal,
            ProductEditModal
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
], PricesModule);
export { PricesModule };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/prices/prices.module.js.map