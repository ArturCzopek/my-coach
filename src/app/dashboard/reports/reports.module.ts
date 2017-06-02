import {NgModule} from "@angular/core";
import {ReportsListComponent} from "./reports-list.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ReportCardComponent} from "./report-card.component";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {ReportBackEndService} from "./services/report.back-end.service";
import {ReportMockService} from "./services/report.mock.service";
import {ReportModalsService} from "./services/report-modals.service";
import {ReportModals} from "./modals/report.modals";
import {ReportAddModal} from "./modals/report-add.modal";
import {ReportDeleteModal} from "./modals/report-delete.modal";
import {ReportEditModal} from "./modals/report-edit.modal";

@NgModule({
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
  ],
  exports: [
    ReportsListComponent
  ]
})
export class ReportsModule {
}
