/* tslint:disable:component-class-suffix */
import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from "@angular/core";
import {NewCycle, NewSet} from "../../../shared/entities/add.entities";
import {ServiceInjector} from "../../../shared/services/service.injector";
import {DateService} from "../../../shared/services/date.service";
import {BaseModal} from "../../../shared/components/base.modal";
import {TrainingsService} from "../services/tranings.service";
import {TrainingModalsService} from "../services/training-modals.service";

declare var Materialize: any;
declare var $: any;

@Component({
  selector: 'coach-cycle-add-modal',
  templateUrl: 'cycle-add.modal.html',
  styleUrls: ['./training.modals.scss', '../../../shared/materialize-upgrades.scss']
})
export class CycleAddModal extends BaseModal implements OnInit, AfterViewInit {

  public cycleToAdd: NewCycle = null;
  public setsToAdd: NewSet[] = [];
  public startDate = '';
  public finishedCycles: boolean;

  @ViewChild('emptySetLink')
  public emptySetLink: ElementRef;

  private trainingsService: TrainingsService;

  constructor(private trainingModalsService: TrainingModalsService, private serviceInjector: ServiceInjector,
              private dateService: DateService, private renderer: Renderer2) {
    super(serviceInjector);
    this.trainingsService = this.serviceInjector.getTrainingsService();

  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.initialization$ = this.trainingModalsService.addCycle.subscribe(
      finishedCycles => {
        this.finishedCycles = finishedCycles;
        this.openModal();
      }
    );
  }

  ngAfterViewInit(): void {
    this.renderer.listen(this.emptySetLink.nativeElement, 'click', () => this.addNewEmptySetToList());
  }

  public initDataBeforeOpenModal(): void {
    super.initDataBeforeOpenModal();
    this.setsToAdd = [];
    this.startDate = '';
  }

  public isDataValid(): boolean {
    return this.setsToAdd.length > 0 && this.hasEverySetName() && this.dateService.isDateValid(this.startDate);

  }

  public onAddClick(): void {
    this.cycleToAdd = new NewCycle(this.dateService.parseStringToDate(this.startDate), this.setsToAdd);

    this.trainingsService.addCycle(this.cycleToAdd).first()
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
      Materialize.toast(this.dictionaryService.getDictionaryValue('page.trainings.cycle.finishAll.tooltip'), 3000);
      return false;
    }

    return true;
  }

  public addNewEmptySetToList(): void {
    this.setsToAdd.push(new NewSet("", []));
  }

  public onDeleteSet(index: number): void {
    this.setsToAdd.splice(index, 1);
  }

  public trackByIndex(index, set: NewSet) {
    return index;
  }

  private hasEverySetName(): boolean {
    return this.setsToAdd.every(set => set.setName.length > 0);
  }
}
