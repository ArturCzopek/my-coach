import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { WeightsPreview } from '../../shared/entities/preview.entities';
import { WeightsService } from './services/weights.service';
import { WeightsModalsService } from './services/weights-modals.service';
import { ServiceInjector } from '../../shared/services/service.injector';

@Component({
    selector: 'coach-weights-list',
    templateUrl: './weights-list.component.html',
    styleUrls: ['./weights.scss', '../../shared/materialize-upgrades.scss']
})
export class WeightsListComponent implements OnInit, AfterViewInit, OnDestroy {

    public isLoading: boolean;
    private weightsPreviews: WeightsPreview[];
    private weightsService: WeightsService;
    private refresh$: Subscription = null;

    constructor(
        private weightsModalsService: WeightsModalsService,
        private serviceInjector: ServiceInjector,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        this.weightsService = serviceInjector.getWeightsService();
    }

    ngOnInit(): void {
        this.loadWeightsPreviews();

        if (this.refresh$ == null) {
            this.refresh$ = this.weightsModalsService.refreshPage.subscribe(() => this.ngOnInit());
        }
    }

    ngAfterViewInit(): void {
        setTimeout(1000, () => this.changeDetectorRef.detach());
    }

    ngOnDestroy(): void {
        this.refresh$.unsubscribe();
        this.refresh$ = null;
    }

    public onAddClick(): void {
        this.weightsModalsService.callAddWeight();
    }

    public trackByWeightsPreviewId(index, weightsPreview: WeightsPreview): string {
        return `${weightsPreview.month} ${weightsPreview.year}`;
    }

    private loadWeightsPreviews(): void {
        this.isLoading = true;
        this.weightsService
            .getWeightsPreviews()
            .first()
            .subscribe(
                previews => this.weightsPreviews = previews.slice().reverse(),
                error => console.error('error', error),
                () => {
                    this.isLoading = false;
                    this.changeDetectorRef.detectChanges();
                }
            );
    }
}
