var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core/src/metadata/ng_module";
import { ReportsListComponent } from "./reports-list.component";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { ReportCardComponent } from "./report-card.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { ReportBackEndService } from "./services/report.back-end.service";
import { ReportMockService } from "./services/report.mock.service";
import { ReportModalsService } from "./services/report-modals.service";
import { ReportModals } from "./modals/report.modals";
import { ReportAddModal } from "./modals/report-add.modal";
import { ReportDeleteModal } from "./modals/report-delete.modal";
import { ReportEditModal } from "./modals/report-edit.modal";
var ReportsModule = (function () {
    function ReportsModule() {
    }
    return ReportsModule;
}());
ReportsModule = __decorate([
    NgModule({
        declarations: [
            ReportsListComponent,
            ReportCardComponent,
            ReportModals,
            ReportAddModal,
            ReportDeleteModal,
            ReportEditModal
        ],
        imports: [
            HttpModule,
            CommonModule,
            FormsModule,
            SharedModule
        ],
        providers: [
            ReportBackEndService,
            ReportMockService,
            ReportModalsService
        ]
    })
], ReportsModule);
export { ReportsModule };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/reports/reports.module.js.map