import { Injectable, Injector } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { WeightsService } from './weights.service';
import { Weight } from '../../../shared/entities/get.entities';
import { WeightsPreview } from '../../../shared/entities/preview.entities';
import { NewWeight } from '../../../shared/entities/add.entities';
import { ServiceInjector } from '../../../shared/services/service.injector';
import { environment } from '../../../../environments/environment';
import { UserService } from '../../../shared/services/user.service';

@Injectable()
export class WeightsBackEndService extends WeightsService {

    private weightUrl = '/weight';

    constructor(
        private injector: Injector,
        private http: Http,
        private userService: UserService
    ) {
        super(injector.get(ServiceInjector));
    }

    public getWeightsPreviews(): Observable<WeightsPreview[]> {
        return this.http
            .get(
                `${environment.server.url}${this.weightUrl}/previews`,
                this.userService.prepareAuthOptions()
            )
            .map(res => res.json());
    }

    public getWeights(weightsPreview: WeightsPreview): Observable<Weight[]> {
        return this.http
            .get(
                `${environment.server.url}${this.weightUrl}/forDate/${weightsPreview.year}/${weightsPreview.month}`,
                this.userService.prepareAuthOptions()
            )
            .map(res => res.json());
    }

    public addWeight(weightToAdd: NewWeight): Observable<any> {
        return this.http
            .post(
                `${environment.server.url}${this.weightUrl}/add`,
                weightToAdd,
                this.userService.prepareAuthOptions()
            );
    }

    public deleteWeights(weightsToDelete: Weight[]): Observable<any> {
        const options = this.userService.prepareAuthOptions();
        options.body = weightsToDelete;
        return this.http.delete(`${environment.server.url}${this.weightUrl}/delete`, options);
    }

    public editWeights(weightsToEdit: Weight[]): Observable<any> {
        return this.http.put(`${environment.server.url}${this.weightUrl}/update`, weightsToEdit, this.userService.prepareAuthOptions());
    }
}
