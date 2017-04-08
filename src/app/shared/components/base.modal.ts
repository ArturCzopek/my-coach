import {AfterViewChecked, EventEmitter, OnInit} from "@angular/core";
import {MaterializeAction} from "angular2-materialize";
import {DictionaryService} from "../services/dictionary.service";
import {MODAL_PARAMS} from "../global.values";
import {ServiceInjector} from "../services/service.injector";

declare var $: any;
declare var Materialize: any;

export abstract class BaseModal implements OnInit, AfterViewChecked {

  public modalActions = new EventEmitter<string|MaterializeAction>();
  public modalParams: any;
  public datePickerParams: any;
  public dictionaryService: DictionaryService;

  constructor(serviceInjector: ServiceInjector) {
    this.dictionaryService = serviceInjector.getDictionaryService();
  }

  ngOnInit(): void {
    this.modalParams = MODAL_PARAMS;
    this.datePickerParams = this.dictionaryService.getDateDictionarySettings();
  }

  ngAfterViewChecked(): void {
    if (typeof Materialize.updateTextFields === "function") {
      Materialize.updateTextFields();
    }
  }

  initDataBeforeOpenModal() {
    if ($('#fab').hasClass('active')) {
      $('#fab a').click();
    }
  }

  openModal() {
    if (this.canModalBeOpened()) {
      this.initDataBeforeOpenModal();
      this.modalActions.emit({action: "modal", params: ['open']});
    }
  }

  closeModal() {
    this.modalActions.emit({action: "modal", params: ['close']});
    $('.lean-overlay').remove();
  }

  // "on" only for style purposes in html
  onCloseModal() {
    this.closeModal();
  }

  canModalBeOpened(): boolean {
    return true;
  };

  isDataValid(): boolean {
    return true;
  };
}
