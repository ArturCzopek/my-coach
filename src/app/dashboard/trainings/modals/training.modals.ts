/* tslint:disable:component-class-suffix */
import { Component } from '@angular/core';

@Component({
    selector: 'coach-training-modals',
    template: `
        <coach-cycle-add-modal></coach-cycle-add-modal>
        <coach-cycle-delete-modal></coach-cycle-delete-modal>
        <coach-cycle-edit-modal></coach-cycle-edit-modal>
        
        <coach-exercise-add-modal></coach-exercise-add-modal>
        <coach-exercise-delete-modal></coach-exercise-delete-modal>
        <coach-exercise-edit-modal></coach-exercise-edit-modal>
        
        <coach-training-add-modal></coach-training-add-modal>
        <coach-training-edit-modal></coach-training-edit-modal>
        <coach-training-delete-modal></coach-training-delete-modal>`
})
export class TrainingModals {}
