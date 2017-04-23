/* tslint:disable:component-class-suffix */
import {Component, OnInit} from "@angular/core";
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
              private dateService: DateService) {
    super(serviceInjector);
    this.trainingsService = serviceInjector.getTrainingsService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.initialization$ = this.trainingModalsService.editCycle.subscribe(
      (data: any) => {
        this.selectedCycle = data.cycle;
        this.modalTitle = data.modalTitle;
        this.openModal();
      }
    );
  }

  public initDataBeforeOpenModal(): void {
    super.initDataBeforeOpenModal();
    this.startDate = this.dateService.parseDateToString(this.selectedCycle.startDate);

    if (this.selectedCycle.endDate) {
      this.endDate = this.dateService.parseDateToString(this.selectedCycle.endDate);
    } else {
      this.endDate = this.dateService.parseDateToString(new Date());

    }
    this.isFinished = this.selectedCycle.finished;

    this.isOtherCycleActive = this.isFinished;
  }

  public canModalBeOpened(): boolean {
    if (!this.selectedCycle) {
      Materialize.toast(this.dictionaryService.getDictionaryValue('page.trainings.loadFirst.tooltip'), 3000);
      return false;
    }

    return true;
  }

  public isDataValid(): boolean {
    return this.dateService.isSecondDateLater(this.startDate, this.endDate);
  }

  public onEditClick(): void {
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
  }
}
