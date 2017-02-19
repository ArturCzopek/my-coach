var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core/src/metadata/ng_module";
import { WeightsListComponent } from "./weights-list.component";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { WeightsCardComponent } from "./weights-card.component";
import { SharedModule } from "../shared/shared.module";
import { WeightsMockService } from "./services/weights.mock.service";
import { WeightsBackEndService } from "./services/weights.back-end.service";
import { WeightsModalsService } from "./services/weights-modals.service";
import { WeightsEditModal } from "./modals/weights-edit.modal";
import { WeightsModals } from "./modals/weights.modals";
import { FormsModule } from "@angular/forms";
import { WeightsDeleteModal } from "./modals/weights-delete.modal";
import { WeightAddModal } from "./modals/weight-add.modal";
var WeightsModule = (function () {
    function WeightsModule() {
    }
    return WeightsModule;
}());
WeightsModule = __decorate([
    NgModule({
        declarations: [
            WeightsListComponent,
            WeightsCardComponent,
            WeightsModals,
            WeightsEditModal,
            WeightsDeleteModal,
            WeightAddModal
        ],
        imports: [
            HttpModule,
            CommonModule,
            FormsModule,
            SharedModule
        ],
        providers: [
            WeightsMockService,
            WeightsBackEndService,
            WeightsModalsService
        ]
    })
], WeightsModule);
export { WeightsModule };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/weights/weights.module.js.map