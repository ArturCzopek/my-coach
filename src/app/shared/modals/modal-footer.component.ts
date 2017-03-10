import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'coach-modal-footer',
  templateUrl: 'modal-footer.component.html',
  styleUrls: []
})
export class ModalFooterComponent {
  @Input() public rightButtonLabel: string;
  @Input() public leftButtonLabel: string;
  @Input() public isDataValid: boolean;

  @Output() public rightButtonAction = new EventEmitter();
  @Output() public leftButtonAction = new EventEmitter();

  onRightButtonClick() {
    this.rightButtonAction.emit(null);
  }

  onLeftButtonClick() {
    this.leftButtonAction.emit(null);
  }

}
