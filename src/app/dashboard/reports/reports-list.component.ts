import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {ReportPreview} from "../../shared/entities/preview.entities";
import {ReportService} from "./services/report.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {ReportModalsService} from "./services/report-modals.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'coach-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports.scss', '../../shared/materialize-upgrades.scss']
})
export class ReportsListComponent implements OnInit, AfterViewInit, OnDestroy {

  public isLoading: boolean;
  private reportPreviews: ReportPreview[];
  private reportService: ReportService;
  private refresh$: Subscription = null;


  constructor(private reportModalsService: ReportModalsService, private serviceInjector: ServiceInjector,
              private changeDetectorRef: ChangeDetectorRef) {
    this.reportService = serviceInjector.getReportService();
  }

  ngOnInit() {
    this.loadReportPreviews();
    if (this.refresh$ == null) {
      this.refresh$ = this.reportModalsService.refreshPage.subscribe(() => this.ngOnInit());
    }
  }

  ngAfterViewInit(): void {
    setTimeout(1000, () => this.changeDetectorRef.detach());
  }

  ngOnDestroy() {
    this.refresh$.unsubscribe();
    this.refresh$ = null;
  }

  public loadReportPreviews() {
    this.isLoading = true;
    this.reportService.getReportPreviews().first()
      .subscribe(
        previews => this.reportPreviews = this.reportService.parsePreviewsFromServer(previews.slice().reverse()),
        error => console.error('error', error),
        () => {
          this.isLoading = false;
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  onAddClick() {
    this.reportModalsService.callAddReport();
  }

  trackByReportPreviewId(index, reportPreview: ReportPreview) {
    return reportPreview.reportId;
  }
}
