import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

@Component({
    selector: 'coach-not-found',
    templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements AfterViewInit {

    constructor(
        private cdr: ChangeDetectorRef
    ) {}

    ngAfterViewInit(): void {
        setTimeout(1000, () => this.cdr.detach());
    }
}
