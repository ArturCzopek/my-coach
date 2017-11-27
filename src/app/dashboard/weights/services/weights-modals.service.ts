import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Weight } from '../../../shared/entities/get.entities';

@Injectable()
export class WeightsModalsService {

    addWeight: Subject<any> = new Subject<any>();
    editWeights: Subject<any> = new Subject<any>();
    deleteWeights: Subject<any> = new Subject<any>();
    refreshPage: Subject<any> = new Subject<any>();

    public callAddWeight(): void {
        this.addWeight.next(null);
    }

    public callEditWeights(weights: Weight[], modalTitle: string): void {
        this.editWeights.next({weights: weights, modalTitle: modalTitle});
    }

    public callDeleteWeights(weights: Weight[], modalTitle: string): void {
        this.deleteWeights.next({weights: weights, modalTitle: modalTitle});
    }

    public callRefreshPage(): void {
        this.refreshPage.next(null);
    }
}
