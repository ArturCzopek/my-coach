import { AfterViewInit, Component } from '@angular/core';

import { AdminService } from '../services/admin.service';
import { DictionaryService } from '../../../shared/services/dictionary.service';
import { ServiceInjector } from '../../../shared/services/service.injector';

declare var Materialize: any;

@Component({
    selector: 'coach-admin-email',
    templateUrl: './admin-email.component.html',
    styleUrls: ['./../admin.scss', './../../../shared/materialize-upgrades.scss']
})
export class AdminEmailComponent implements AfterViewInit {

    public mailContent = '';
    public mailTitle = 'My Coach';
    public message = '';
    public messageStyle = '';
    private dictionaryService: DictionaryService;

    constructor(
        private adminService: AdminService,
        private serviceInjector: ServiceInjector
    ) {
        this.dictionaryService = this.serviceInjector.getDictionaryService();
    }

    ngAfterViewInit(): void {
        setTimeout(() => Materialize.updateTextFields(), 500);
    }

    public sendEmail(): void {
        this.adminService
            .sendEmail(this.mailTitle, this.mailContent)
            .first()
            .subscribe(
                ok => {
                    this.mailTitle = '';
                    this.mailContent = '';
                    this.message = this.dictionaryService.getDictionaryValue('page.admin.email.message.success');
                    this.messageStyle = 'success-message';
                },
                error => {
                    this.message = this.dictionaryService.getDictionaryValue('page.admin.email.message.error');
                    this.messageStyle = 'error-message';
                }
            );
    }

}
