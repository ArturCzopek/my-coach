/* tslint:disable:component-class-suffix */
import { Component } from '@angular/core';

@Component({
    selector: 'coach-weights-modals',
    template: `
        <coach-weight-add-modal></coach-weight-add-modal>
        <coach-weights-edit-modal></coach-weights-edit-modal>
        <coach-weights-delete-modal></coach-weights-delete-modal>`
})
export class WeightsModals {}
