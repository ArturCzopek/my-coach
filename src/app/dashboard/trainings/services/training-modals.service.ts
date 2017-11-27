import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Cycle, Exercise, Training } from '../../../shared/entities/get.entities';

@Injectable()
export class TrainingModalsService {

    addCycle: Subject<any> = new Subject<any>();
    addExercises: Subject<any> = new Subject<any>();
    addTraining: Subject<any> = new Subject<any>();
    deleteCycle: Subject<any> = new Subject<any>();
    deleteExercise: Subject<any> = new Subject<any>();
    deleteTraining: Subject<any> = new Subject<any>();
    editCycle: Subject<any> = new Subject<any>();
    editExercise: Subject<any> = new Subject<any>();
    editTraining: Subject<any> = new Subject<any>();
    refreshPage: Subject<any> = new Subject<any>();

    public callAddCycle(finishedCycles: boolean): void {
        this.addCycle.next(finishedCycles);
    }

    public callAddExercise(finishedCycles: boolean): void {
        this.addExercises.next(finishedCycles);
    }

    public callAddTraining(finishedCycles: boolean): void {
        this.addTraining.next(finishedCycles);
    }

    public callDeleteCycle(cycle: Cycle, modalTitle: string): void {
        this.deleteCycle.next({cycle: cycle, modalTitle: modalTitle});
    }

    public callDeleteExercise(exercise: Exercise): void {
        this.deleteExercise.next(exercise);
    }

    public callDeleteTraining(training: Training): void {
        this.deleteTraining.next(training);
    }

    public callEditCycle(cycle: Cycle, modalTitle: string): void {
        this.editCycle.next({cycle: cycle, modalTitle: modalTitle});
    }

    public callEditExercise(exercise: Exercise): void {
        this.editExercise.next(exercise);
    }

    public callEditTraining(training: Training): void {
        this.editTraining.next(training);
    }

    public callRefreshPage(): void {
        this.refreshPage.next(null);
    }
}
