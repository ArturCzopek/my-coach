import { AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';

declare var $: any;

export abstract class BaseCardComponent implements OnInit, AfterViewInit {

    public previewTitle: string;
    public arrowImageClass: string;
    public isLoading: boolean;
    public showData: boolean;

    constructor(
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        // false showData because at first toggle we want to see true to load data
        this.showData = false;
        this.isLoading = true;
        this.arrowImageClass = 'left-arrow';

        // removing black garbages from modal and not needed click on FAB
        $('.modal-overlay').remove();
        if ($('#fab').hasClass('active')) {
            $('#fab a').click();
        }
    }

    ngAfterViewInit(): void {
        setTimeout(1000, () => this.changeDetectorRef.detach());
    }

    public toggleShow() {
        this.showData = !this.showData;
        this.arrowImageClass = this.showData ? 'down-arrow' : 'left-arrow';
    }

    public getLoadingStyle(): string {
        return this.isLoading ? 'loading' : '';
    }
}
