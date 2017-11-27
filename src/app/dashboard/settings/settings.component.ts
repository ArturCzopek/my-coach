import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
    selector: 'coach-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements AfterViewInit {

    constructor(private changeDetectorRef: ChangeDetectorRef, public userService: UserService) {
    }

    ngAfterViewInit() {
        setTimeout(1000, () => this.changeDetectorRef.detach());
    }
}
