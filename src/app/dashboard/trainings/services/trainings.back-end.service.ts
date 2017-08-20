import {TrainingsService} from "./tranings.service";
import {Injectable, Injector} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {CyclePreview} from "../../../shared/entities/preview.entities";
import {Cycle, Exercise, Training} from "../../../shared/entities/get.entities";
import {ServiceInjector} from "../../../shared/services/service.injector";
import {NewCycle, NewExercise, NewTraining} from "../../../shared/entities/add.entities";
import {Http} from "@angular/http";
import {environment} from "../../../../environments/environment";
import {UserService} from "../../../shared/services/user.service";

@Injectable()
export class TrainingsBackEndService extends TrainingsService {

  private trainingUrl = '/training';
  private cycleUrl = '/cycle';
  private exerciseUrl = '/exercise';

  constructor(private injector: Injector, private http: Http, private userService: UserService) {
    super(injector.get(ServiceInjector));
  }

  public getActiveCycle(): Observable<Cycle> {
    return this.http.get(
      `${environment.server.url}${this.trainingUrl}${this.cycleUrl}/active`,
      this.userService.prepareAuthOptions()
    )
      .map(res => res.json());
  }

  public getCyclePreviews(): Observable<CyclePreview[]> {
    return this.http.get(
      `${environment.server.url}${this.trainingUrl}${this.cycleUrl}/previews`,
      this.userService.prepareAuthOptions()
    )
      .map(res => res.json());
  }

  public getCycle(cycleId: number): Observable<Cycle> {
    return this.http.get(
      `${environment.server.url}${this.trainingUrl}${this.cycleUrl}/${cycleId}`,
      this.userService.prepareAuthOptions()
    )
      .map(res => res.json());
  }

  public getExercisesWithSessionForTraining(trainingId: number): Observable<Exercise[]> {
    return this.http.get(
      `${environment.server.url}${this.trainingUrl}${this.exerciseUrl}/${trainingId}`,
      this.userService.prepareAuthOptions()
    )
      .map(res => res.json());
  }

  public addCycle(cycleToAdd: NewCycle): Observable<any> {
    return this.http.post(
      `${environment.server.url}${this.trainingUrl}${this.cycleUrl}/add`,
      cycleToAdd,
      this.userService.prepareAuthOptions()
    );
  }

  public addExercises(exerciseToAdd: NewExercise[]): Observable<any> {
    return this.http.post(
      `${environment.server.url}${this.trainingUrl}${this.exerciseUrl}/add`,
      exerciseToAdd,
      this.userService.prepareAuthOptions()
    );
  }

  public addTraining(trainingToAdd: NewTraining): Observable<any> {
    return this.http.post(
      `${environment.server.url}${this.trainingUrl}/add`,
      trainingToAdd,
      this.userService.prepareAuthOptions()
    );
  }

  public deleteCycle(cycleToDelete: Cycle): Observable<any> {
    const options = this.userService.prepareAuthOptions();
    options.body = cycleToDelete;
    return this.http.delete(`${environment.server.url}${this.trainingUrl}${this.cycleUrl}/delete`, options);
  }

  public deleteExercise(exerciseToDelete: Exercise): Observable<any> {
    const options = this.userService.prepareAuthOptions()
    options.body = exerciseToDelete;
    return this.http.delete(`${environment.server.url}${this.trainingUrl}${this.exerciseUrl}/delete`, options);
  }

  public deleteTraining(trainingToDelete: Training): Observable<any> {
    const options = this.userService.prepareAuthOptions();
    options.body = trainingToDelete;
    return this.http.delete(`${environment.server.url}${this.trainingUrl}/delete`, options);
  }

  public editCycle(cycleToEdit: Cycle): Observable<any> {
    return this.http.put(
      `${environment.server.url}${this.trainingUrl}${this.cycleUrl}/update`,
      cycleToEdit,
      this.userService.prepareAuthOptions()
    );
  }

  public editExercise(exerciseToEdit: Exercise): Observable<any> {
    return this.http.put(
      `${environment.server.url}${this.trainingUrl}${this.exerciseUrl}/update`,
      exerciseToEdit,
      this.userService.prepareAuthOptions()
    );
  }

  public editTraining(training: Training, exercises: Exercise[]): Observable<any> {
    return this.http.put(`${environment.server.url}${this.trainingUrl}/update`,
      {training, exercises},
      this.userService.prepareAuthOptions()
    );
  }

  public hasUserOnlyFinishedCycles(): Observable<boolean> {
    return this.http.get(
      `${environment.server.url}${this.trainingUrl}${this.cycleUrl}/finished`,
      this.userService.prepareAuthOptions()
    )
      .map(res => res.json());
  }
}
