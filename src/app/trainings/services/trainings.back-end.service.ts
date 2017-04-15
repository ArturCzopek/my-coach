import {TrainingsService} from "./tranings.service";
import {Injectable, Injector, NgZone} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {CyclePreview} from "../../shared/entities/preview.entities";
import {Cycle, Exercise, Training} from "../../shared/entities/get.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {NewCycle, NewExercise, NewTraining} from "../../shared/entities/add.entities";
import {Http, RequestOptions} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class TrainingsBackEndService extends TrainingsService {

  private trainingUrl = '/training';
  private cycleUrl = '/cycle';
  private exerciseUrl = '/exercise';

  constructor(private injector: Injector, private http: Http) {
    super(injector.get(ServiceInjector), injector.get(NgZone));
  }

  public getActiveCycle(): Observable<Cycle> {
    return this.http.get(`${environment.url}${this.trainingUrl}${this.cycleUrl}/active`).map(res => res.json());
  }

  public getCyclePreviews(): Observable<CyclePreview[]> {
    return this.http.get(`${environment.url}${this.trainingUrl}${this.cycleUrl}/previews`).map(res => res.json());
  }

  public getCycle(cycleId: number): Observable<Cycle> {
    return this.http.get(`${environment.url}${this.trainingUrl}${this.cycleUrl}/${cycleId}`).map(res => res.json());
  }

  public getExercisesWithSessionForTraining(trainingId: number): Observable<Exercise[]> {
    return this.http.get(`${environment.url}${this.trainingUrl}${this.exerciseUrl}/${trainingId}`).map(res => res.json());
  }

  public addCycle(cycleToAdd: NewCycle): Observable<any> {
    return this.http.post(`${environment.url}${this.trainingUrl}${this.cycleUrl}/add`, cycleToAdd);
  }

  public addExercises(exerciseToAdd: NewExercise[]): Observable<any> {
    return this.http.post(`${environment.url}${this.trainingUrl}${this.exerciseUrl}/add`, exerciseToAdd);
  }

  public addTraining(trainingToAdd: NewTraining): Observable<any> {
    return this.http.post(`${environment.url}${this.trainingUrl}/add`, trainingToAdd);
  }

  public deleteCycle(cycleToDelete: Cycle): Observable<any> {
    return this.http.delete(`${environment.url}${this.trainingUrl}${this.cycleUrl}/delete`,
      new RequestOptions({body: cycleToDelete})
    );
  }

  public deleteExercise(exerciseToDelete: Exercise): Observable<any> {
    return this.http.delete(`${environment.url}${this.trainingUrl}${this.exerciseUrl}/delete`,
      new RequestOptions({body: exerciseToDelete})
    );
  }

  public deleteTraining(trainingToDelete: Training): Observable<any> {
    return this.http.delete(`${environment.url}${this.trainingUrl}/delete`, new RequestOptions({body: trainingToDelete}));
  }

  public editCycle(cycleToEdit: Cycle): Observable<any> {
    return this.http.put(`${environment.url}${this.trainingUrl}${this.cycleUrl}/update`, cycleToEdit);
  }

  public editExercise(exerciseToEdit: Exercise): Observable<any> {
    return this.http.put(`${environment.url}${this.trainingUrl}${this.exerciseUrl}/update`, exerciseToEdit);
  }

  public editTraining(trainingToEdit: Training, exercisesToEdit: Exercise[]): Observable<any> {
    return this.http.put(`${environment.url}${this.trainingUrl}/update`, {training: trainingToEdit, exercises: exercisesToEdit});
  }

  public hasUserOnlyFinishedCycles(): Observable<boolean> {
    return this.http.get(`${environment.url}${this.trainingUrl}${this.cycleUrl}/finished`).map(res => res.json());
  }
}
