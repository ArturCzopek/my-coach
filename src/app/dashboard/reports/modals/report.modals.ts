/* tslint:disable:component-class-suffix */
import {Component} from "@angular/core";

@Component({
  selector: 'coach-report-modals',
  template: `
    <coach-report-add-modal></coach-report-add-modal>
    <coach-report-delete-modal></coach-report-delete-modal>
    <coach-report-edit-modal></coach-report-edit-modal>`
})
export class ReportModals {

}
