import {
    AfterViewInit, ChangeDetectionStrategy,
    ChangeDetectorRef, Component, Input
} from '@angular/core';
import {
    Exercise, ExerciseSession,
    Series, Set, Training
} from '../../shared/entities/get.entities';
import { DateService } from '../../shared/services/date.service';
import { ServiceInjector } from '../../shared/services/service.injector';
import { TrainingsService } from './services/tranings.service';
import { TrainingModalsService } from './services/training-modals.service';

@Component({
    selector: 'coach-set-section',
    templateUrl: 'set-section.component.html',
    styleUrls: ['./trainings.scss', '../../shared/materialize-upgrades.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetSectionComponent implements AfterViewInit {

    @Input()
    public set: Set;

    @Input()
    public finishedCycles: boolean;

    private dateService: DateService;
    private trainingsService: TrainingsService;

    constructor(
        public serviceInjector: ServiceInjector,
        private trainingModalsService: TrainingModalsService,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        this.dateService = serviceInjector.getDateService();
        this.trainingsService = serviceInjector.getTrainingsService();
    }

    ngAfterViewInit(): void {
        this.changeDetectorRef.detach();
    }

    public onAddExercise(): void {
        this.trainingModalsService.callAddExercise(this.finishedCycles);
    }

    public onDeleteExercise(exercise: Exercise): void {
        this.trainingModalsService.callDeleteExercise(exercise);
    }

    public onDeleteTraining(training: Training): void {
        this.trainingModalsService.callDeleteTraining(training);
    }

    public onEditExercise(exercise: Exercise): void {
        this.trainingModalsService.callEditExercise(exercise);
    }

    public onEditTraining(training: Training): void {
        this.trainingModalsService.callEditTraining(training);
    }

    public trackByExerciseId(index, exercise: Exercise): number {
        return exercise.exerciseId;
    }

    public trackBySessionId(index, session: ExerciseSession): number {
        return session.exerciseSessionId;
    }

    public trackBySeriesId(index, series: Series): number {
        return series.seriesId;
    }
}
