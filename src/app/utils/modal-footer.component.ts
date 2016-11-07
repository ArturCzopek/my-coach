import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'coach-modal-footer',
  templateUrl: 'modal-footer.component.html',
  styleUrls: ['utils.scss']
})
export class ModalFooter {
  @Input() private rightButtonLabel: string;
  @Input() private leftButtonLabel: string;

  @Output() private rightButtonAction = new EventEmitter();
  @Output() private leftButtonAction = new EventEmitter();

  onRightButtonClick() {
    this.rightButtonAction.emit(null);
  }

  onLeftButtonClick() {
    this.leftButtonAction.emit(null);
  }
}
