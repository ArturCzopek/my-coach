/* tslint:disable:component-class-suffix */
import { Component, OnInit } from '@angular/core';

import { NewExerciseSession, NewSeries, NewTraining } from '../../../shared/entities/add.entities';
import { ServiceInjector } from '../../../shared/services/service.injector';
import { BaseModal } from '../../../shared/components/base.modal';
import { TrainingsService } from '../services/tranings.service';
import { TrainingModalsService } from '../services/training-modals.service';
import { Cycle, Exercise, Set } from '../../../shared/entities/get.entities';
import { DateService } from '../../../shared/services/date.service';

declare var Materialize: any;
declare var $: any;

@Component({
    selector: 'coach-training-add-modal',
    templateUrl: './training-add.modal.html',
    styleUrls: ['./training.modals.scss', '../../../shared/materialize-upgrades.scss']
})
export class TrainingAddModal extends BaseModal implements OnInit {

    public exerciseSessionsToAdd: NewExerciseSession[][] = [];
    public isExerciseActive: boolean[][] = [];
    public activeCycle: Cycle = null;
    public selectedSetNr = 0;
    public trainingDate = '';
    public finishedCycles: boolean;
    private trainingsService: TrainingsService;
    private dateService: DateService;

    constructor(
        public serviceInjector: ServiceInjector,
        private trainingModalsService: TrainingModalsService
    ) {
        super(serviceInjector);
        this.trainingsService = this.serviceInjector.getTrainingsService();
        this.dateService = this.serviceInjector.getDateService();
    }

    public ngOnInit(): void {
        super.ngOnInit();

        this.initialization$ = this.trainingModalsService
            .addTraining
            .subscribe(finishedCycles => {
                this.finishedCycles = finishedCycles;
                this.openModal();
            });
    }

    public initDataBeforeOpenModal(): void {
        super.initDataBeforeOpenModal();
        this.exerciseSessionsToAdd = [];
        this.selectedSetNr = 0;
        this.trainingDate = this.dateService.getCurrentDateAsString();
        this.isExerciseActive = [];
        this.activeCycle = null;
        this.trainingsService.getActiveCycle()
            .first()
            .subscribe(
                cycle => {
                    this.activeCycle = cycle;
                    this.initPossibleSetsToDisplay();
                },
                error => console.error(error, 'error')
            );
    }

    public onAddNewEmptySeriesToExercise(index: number): void {
        this.exerciseSessionsToAdd[this.selectedSetNr][index].series.push(new NewSeries(0, 0, ''));
    }

    public onDeleteSeries(exerciseIndex: number, seriesIndex: number): void {
        this.exerciseSessionsToAdd[this.selectedSetNr][exerciseIndex].series.splice(seriesIndex, 1);
    }

    public isDataValid(): boolean {
        if (!this.exerciseSessionsToAdd[this.selectedSetNr]) {
            return false;
        }

        return this.exerciseSessionsToAdd.length > 0 &&
            this.exerciseSessionsToAdd[this.selectedSetNr].every(
                (exerciseSession, i) => (exerciseSession.series.length > 0 && exerciseSession.series.every(series => series.repeats > 0))
                    || !this.isExerciseActive[this.selectedSetNr][i]
            )
            && !this.isExerciseActive[this.selectedSetNr].every(isActive => !isActive) && this.dateService.isDateValid(this.trainingDate);

    }

    public onAddClick(): void {
        this.trainingsService.addTraining(this.createNewTraining())
            .first()
            .subscribe(
                ok => {
                    this.trainingModalsService.callRefreshPage();
                    this.errorMessage = '';
                    this.closeModal();
                },
                error => this.errorMessage = this.dictionaryService.getErrorMessage(error)
            );
    }

    public canModalBeOpened(): boolean {
        if (!this.finishedCycles) {
            return true;
        }

        Materialize.toast(
            this.dictionaryService.getDictionaryValue('page.trainings.cycle.notActive.tooltip'),
            3000
        );
        return false;
    }

    public changeExerciseActive(exerciseId: number): void {
        this.isExerciseActive[this.selectedSetNr][exerciseId] = !this.isExerciseActive[this.selectedSetNr][exerciseId];
    }

    public trackBySetId(index, set: Set): number {
        return set.setId;
    }

    public trackByExerciseId(index, exercise: Exercise): number {
        return exercise.exerciseId;
    }

    private createNewTraining(): NewTraining {
        return new NewTraining(
            this.activeCycle.sets[this.selectedSetNr].setId,
            this.formattedSessions(this.exerciseSessionsToAdd[this.selectedSetNr]),
            this.dateService.parseStringToDate(this.trainingDate));
    }

    private formattedSessions(sessions: NewExerciseSession[]): NewExerciseSession[] {
        return sessions.map((session, index) => {
            session.empty = !this.isExerciseActive[this.selectedSetNr][index];
            return session;
        });
    }

    private initPossibleSetsToDisplay(): void {
        this.activeCycle.sets.forEach((set, i) => {
            this.exerciseSessionsToAdd.push([]);
            this.isExerciseActive.push([]);

            set.exercises.forEach((exercise) => {
                this.isExerciseActive[i].push(true);
                this.exerciseSessionsToAdd[i].push(new NewExerciseSession(exercise.exerciseId, []));
            });
        });
    }
}
