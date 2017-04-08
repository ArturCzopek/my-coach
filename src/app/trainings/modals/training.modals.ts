/* tslint:disable:component-class-suffix */
import {Component} from "@angular/core";

@Component({
  selector: 'coach-training-modals',
  template: `
    <coach-cycle-add-modal></coach-cycle-add-modal>
    <coach-exercise-add-modal></coach-exercise-add-modal>
    <coach-training-add-modal></coach-training-add-modal>
    <coach-cycle-delete-modal></coach-cycle-delete-modal>
    <coach-exercise-delete-modal></coach-exercise-delete-modal>
    <coach-training-delete-modal></coach-training-delete-modal>
    <coach-cycle-edit-modal></coach-cycle-edit-modal>`
})
export class TrainingModals {

}
