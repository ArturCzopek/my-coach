/* tslint:disable:component-class-suffix */
import {Component, NgZone, OnInit} from "@angular/core";
import {Cycle} from "../../shared/entities/get.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {DateService} from "../../shared/services/date.service";
import {BaseModal} from "../../shared/components/base.modal";
import {TrainingsService} from "../services/tranings.service";
import {TrainingModalsService} from "../services/training-modals.service";

declare var Materialize: any;

@Component({
  selector: 'coach-cycle-edit-modal',
  templateUrl: 'cycle-edit.modal.html',
  styleUrls: ['./training.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class CycleEditModal extends BaseModal implements OnInit {

  public selectedCycle: Cycle = null;
  public modalTitle: string;
  public isFinished = false;
  public startDate = '';
  public endDate = '';

  public isOtherCycleActive: boolean;

  private trainingsService: TrainingsService;

  constructor(private trainingModalsService: TrainingModalsService, private serviceInjector: ServiceInjector,
              private dateService: DateService, private ngZone: NgZone) {
    super(serviceInjector);
    this.trainingsService = serviceInjector.getTrainingsService();
  }

  public ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      super.ngOnInit();

      this.initialization$ = this.trainingModalsService.editCycle.subscribe(
        (data: any) => {
          this.selectedCycle = data.cycle;
          this.modalTitle = data.modalTitle;
          this.openModal();
        }
      );
    });
  }

  public initDataBeforeOpenModal(): void {
    this.ngZone.runOutsideAngular(() => {
      super.initDataBeforeOpenModal();
      this.startDate = this.dateService.parseDateToString(this.selectedCycle.startDate);

      if (this.selectedCycle.endDate) {
        this.endDate = this.dateService.parseDateToString(this.selectedCycle.endDate);
      } else {
        this.endDate = this.dateService.parseDateToString(new Date());

      }
      this.isFinished = this.selectedCycle.finished;

      this.isOtherCycleActive = this.isFinished;
    });
  }

  public canModalBeOpened(): boolean {
    return this.ngZone.runOutsideAngular(() => {
      if (!this.selectedCycle) {
        Materialize.toast(this.dictionaryService.getDictionaryValue('page.trainings.loadFirst.tooltip'), 3000);
        return false;
      }

      return true;
    });
  }

  public isDataValid(): boolean {
    return this.ngZone.runOutsideAngular(() => {
      return this.dateService.isSecondDateLater(this.startDate, this.endDate);
    });
  }

  public onEditClick(): void {
    this.ngZone.runOutsideAngular(() => {
      this.selectedCycle.startDate = this.dateService.parseStringToDate(this.startDate);
      this.selectedCycle.finished = this.isFinished;

      if (this.selectedCycle.finished) {
        this.selectedCycle.endDate = this.dateService.parseStringToDate(this.endDate);
      } else {
        this.selectedCycle.endDate = null;
      }

      this.trainingsService.editCycle(this.selectedCycle).first()
        .subscribe(
          ok => this.trainingModalsService.callRefreshPage(),
          error => console.error(error, 'error'),
          () => this.closeModal()
        );
    });
  }
}
