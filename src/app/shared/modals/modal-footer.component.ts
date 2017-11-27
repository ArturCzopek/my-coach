import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'coach-modal-footer',
    templateUrl: './modal-footer.component.html',
    styleUrls: ['../materialize-upgrades.scss']
})
export class ModalFooterComponent {

    @Input()
    public rightButtonLabel: string;

    @Input()
    public leftButtonLabel: string;

    @Input()
    public isDataValid: boolean;

    @Output()
    public rightButtonAction: EventEmitter<null> = new EventEmitter();

    @Output()
    public leftButtonAction: EventEmitter<null> = new EventEmitter();

    public onRightButtonClick(): void {
        this.rightButtonAction.emit(null);
    }

    public onLeftButtonClick(): void {
        this.leftButtonAction.emit(null);
    }

}
