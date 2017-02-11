import {Injectable, Injector} from "@angular/core";
import {WeightsService} from "../weights/services/weights.service";
import {WeightsBackEndService} from "../weights/services/weights.back-end.service";
import {WeightsMockService} from "../weights/services/weights.mock.service";
import {environment} from "../../environments/environment";
import {ReportService} from "../reports/services/report.service";
import {ReportBackEndService} from "../reports/services/report.back-end.service";
import {ReportMockService} from "../reports/services/report.mock.service";

@Injectable()
export class ServiceInjector {

  constructor(private injector: Injector) {

  }

  public getWeightsService(): WeightsService {
    if (environment.isBackendServerAvailable) {
      return this.injector.get(WeightsBackEndService);
    } else {
      return this.injector.get(WeightsMockService);
    }
  }

  public getReportService(): ReportService {
    if (environment.isBackendServerAvailable) {
      return this.injector.get(ReportBackEndService);
    } else {
      return this.injector.get(ReportMockService);
    }
  }
}
