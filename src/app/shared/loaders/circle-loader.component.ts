import { Component } from '@angular/core';

@Component({
    selector: 'coach-circle-loader',
    template: `
        <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-blue-only">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="gap-patch">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['../materialize-upgrades.scss']
})
export class CircleLoaderComponent {}
