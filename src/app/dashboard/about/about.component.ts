import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

@Component({
    selector: 'coach-about',
    templateUrl: './about.component.html',
    styleUrls: ['../../app.component.scss']
})
export class AboutComponent implements AfterViewInit {

    constructor(
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    ngAfterViewInit(): void {
        setTimeout(1000, () => this.changeDetectorRef.detach());
    }
}
