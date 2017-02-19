import {Injector, Injectable} from "@angular/core";
import {WeightsService} from "../../weights/services/weights.service";
import {WeightsBackEndService} from "../../weights/services/weights.back-end.service";
import {WeightsMockService} from "../../weights/services/weights.mock.service";
import {environment} from "../../../environments/environment";
import {ReportService} from "../../reports/services/report.service";
import {ReportBackEndService} from "../../reports/services/report.back-end.service";
import {ReportMockService} from "../../reports/services/report.mock.service";
import {DictionaryService} from "./dictionary.service";
import {DictionaryMockService} from "./dictionary.mock.service";
import {DictionaryBackEndService} from "./dictionary.back-end.service";

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

  public getDictionaryService(): DictionaryService {
    if (environment.isBackendServerAvailable) {
      return this.injector.get(DictionaryBackEndService);
    } else {
      return this.injector.get(DictionaryMockService);
    }
  }
}
