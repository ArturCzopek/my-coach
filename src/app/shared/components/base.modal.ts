import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { DictionaryService } from '../services/dictionary.service';
import { MODAL_PARAMS } from '../global.values';
import { ServiceInjector } from '../services/service.injector';
import { Subscription } from 'rxjs/Subscription';

declare var $: any;
declare var Materialize: any;

export abstract class BaseModal implements OnInit, OnDestroy {

    public modalActions = new EventEmitter<string | MaterializeAction>();
    public modalParams: any;
    public datePickerParams: any;
    public dictionaryService: DictionaryService;
    public errorMessage = '';
    public initialization$: Subscription;

    constructor(
        public serviceInjector: ServiceInjector
    ) {
        this.dictionaryService = serviceInjector.getDictionaryService();
    }

    ngOnInit(): void {
        this.modalParams = MODAL_PARAMS;
        this.datePickerParams = this.dictionaryService.getDateDictionarySettings();
    }

    ngOnDestroy(): void {
        this.initialization$.unsubscribe();
    }

    public initDataBeforeOpenModal(): void {
        if ($('#fab').hasClass('active')) {
            $('#fab a').click();
        }

        this.errorMessage = '';
    }

    public openModal(): void {
        if (this.canModalBeOpened()) {
            this.initDataBeforeOpenModal();
            this.modalActions.emit({action: 'modal', params: ['open']});
            setTimeout(() => Materialize.updateTextFields(), 500);
        }
    }

    public closeModal(): void {
        this.modalActions.emit({action: 'modal', params: ['close']});
    }

    // "on" only for style purposes in html
    public onCloseModal(): void {
        this.closeModal();
    }

    public canModalBeOpened(): boolean {
        return true;
    }

    public isDataValid(): boolean {
        return true;
    }
}
