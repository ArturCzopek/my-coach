/* tslint:disable:component-class-suffix */
import {Component, OnInit} from "@angular/core";
import {NewCycle, NewSet} from "../../shared/entities/add.entities";
import {ServiceInjector} from "../../shared/services/service.injector";
import {DateService} from "../../shared/services/date.service";
import {BaseModal} from "../../shared/components/base.modal";
import {TrainingsService} from "../services/tranings.service";
import {TrainingModalsService} from "../services/training-modals.service";

declare var Materialize: any;
declare var $: any;

@Component({
  selector: 'coach-cycle-add-modal',
  templateUrl: 'cycle-add.modal.html',
  styleUrls: ['./training.modals.scss', '../../shared/materialize-upgrades.scss']
})
export class CycleAddModal extends BaseModal implements OnInit {

  public cycleToAdd: NewCycle = null;
  public setsToAdd: NewSet[] = [];
  public startDate = '';

  private trainingsService: TrainingsService;

  constructor(private trainingModalsService: TrainingModalsService, private serviceInjector: ServiceInjector,
              private dateService: DateService) {
    super(serviceInjector);
    this.trainingsService = this.serviceInjector.getTrainingsService();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.trainingModalsService.addCycle.subscribe(
      () => {
        this.openModal();
      }
    );
  }

  public initDataBeforeOpenModal() {
    this.setsToAdd = [];
    this.startDate = '';

    if ($('#fab').hasClass('active')) {
      $('#fab a').click();
    }
  }

  public isDataValid(): boolean {
    return this.setsToAdd.length > 0 && this.hasEverySetName() && this.dateService.isDateValid(this.startDate);
  }

  public onAddClick() {
    this.cycleToAdd = new NewCycle(this.dateService.parseStringToDate(this.startDate), this.setsToAdd);

    this.trainingsService.addCycle(this.cycleToAdd);

    this.trainingModalsService.callRefreshPage();
    this.closeModal();
  }

  public canModalBeOpened(): boolean {
    if (!this.trainingsService.hasUserOnlyFinishedCycles()) {
      Materialize.toast(this.dictionaryService.getDictionaryValue('page.trainings.cycle.finishAll.tooltip'), 3000);
      return false;
    }

    return true;
  }

  public addNewEmptySetToList() {
    this.setsToAdd.push(new NewSet("", []));
  }

  public onDeleteSet(index: number) {
    this.setsToAdd.splice(index, 1);
  }

  private hasEverySetName(): boolean {
    return this.setsToAdd.every(set => set.setName.length > 0);
  }
}
