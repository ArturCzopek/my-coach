import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { CyclePreview } from '../../shared/entities/preview.entities';
import { ServiceInjector } from '../../shared/services/service.injector';
import { DictionaryService } from '../../shared/services/dictionary.service';
import { BaseCardComponent } from '../../shared/components/base-card.component';
import { TrainingsService } from './services/tranings.service';
import { Cycle, Set } from '../../shared/entities/get.entities';
import { TrainingModalsService } from './services/training-modals.service';

@Component({
    selector: 'coach-cycle-card',
    templateUrl: 'cycle-card.component.html',
    styleUrls: ['./trainings.scss', '../../shared/materialize-upgrades.scss']
})
export class CycleCardComponent extends BaseCardComponent implements OnInit {

    @Input()
    public cyclePreview: CyclePreview;
    @Input()
    public cycle: Cycle;

    private trainingsService: TrainingsService;
    private dictionaryService: DictionaryService;

    constructor(
        private cdr: ChangeDetectorRef,
        private serviceInjector: ServiceInjector,
        private trainingModalsService: TrainingModalsService
    ) {
        super(cdr);
        this.trainingsService = serviceInjector.getTrainingsService();
        this.dictionaryService = serviceInjector.getDictionaryService();
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.cycle = null;
        this.previewTitle = this.trainingsService.getCyclePreviewTitle(this.cyclePreview);
    }

    public onCycleClick(): void {
        this.toggleShow();

        if (this.showData) {
            if (this.cycle == null) {
                this.trainingsService
                    .getCycle(this.cyclePreview.cycleId)
                    .subscribe(
                        cycle => {
                            this.cycle = cycle;
                        },
                        error => console.error(error, 'error'),
                        () => this.isLoading = false
                    );
            }
        }
    }

    public onEditClick(): void {
        this.trainingModalsService.callEditCycle(this.cycle, this.previewTitle);
    }

    public onDeleteClick(): void {
        this.trainingModalsService.callDeleteCycle(this.cycle, this.previewTitle);
    }

    public trackBySetId(index, set: Set): number {
        return set.setId;
    }
}
