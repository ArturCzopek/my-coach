import {Component} from "@angular/core";

@Component({
  selector: 'coach-weights-modals',
  template: `
    <coach-weights-add-modal></coach-weights-add-modal>
    <coach-weights-edit-modal></coach-weights-edit-modal>
    <coach-weights-delete-modal></coach-weights-delete-modal>`,
})
export class WeightsModals {

}
