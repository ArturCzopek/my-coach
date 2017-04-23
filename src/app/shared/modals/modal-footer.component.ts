import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'coach-modal-footer',
  template: `
    <div class="modal-footer">
      <a class="modal-action modal-close waves-effect waves-red btn-flat" (click)="onRightButtonClick()">{{rightButtonLabel}}</a>
      <a class="modal-action waves-effect waves-teal btn-flat" (click)="onLeftButtonClick()" [class.disabled]="!isDataValid">{{leftButtonLabel}}</a>
    </div>
  `,
  styleUrls: ['../materialize-upgrades.scss']
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
