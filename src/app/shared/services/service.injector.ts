import {Injectable, Injector} from "@angular/core";
import {WeightsService} from "../../dashboard/weights/services/weights.service";
import {WeightsBackEndService} from "../../dashboard/weights/services/weights.back-end.service";
import {WeightsMockService} from "../../dashboard/weights/services/weights.mock.service";
import {environment} from "../../../environments/environment";
import {ReportBackEndService} from "../../dashboard/reports/services/report.back-end.service";
import {ReportMockService} from "../../dashboard/reports/services/report.mock.service";
import {DictionaryService} from "./dictionary.service";
import {DictionaryMockService} from "./dictionary.mock.service";
import {DictionaryBackEndService} from "./dictionary.back-end.service";
import {PricesService} from "../../dashboard/prices/services/prices.service";
import {PricesBackEndService} from "../../dashboard/prices/services/prices.back-end.service";
import {PricesMockService} from "../../dashboard/prices/services/prices.mock.service";
import {TrainingsService} from "../../dashboard/trainings/services/tranings.service";
import {TrainingsMockService} from "../../dashboard/trainings/services/trainings.mock.service";
import {TrainingsBackEndService} from "../../dashboard/trainings/services/trainings.back-end.service";
import {DateService} from "./date.service";
import {ReportService} from "../../dashboard/reports/services/report.service";

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

  public getPricesService(): PricesService {
    if (environment.isBackendServerAvailable) {
      return this.injector.get(PricesBackEndService);
    } else {
      return this.injector.get(PricesMockService);
    }
  }

  public getTrainingsService(): TrainingsService {
    if (environment.isBackendServerAvailable) {
      return this.injector.get(TrainingsBackEndService);
    } else {
      return this.injector.get(TrainingsMockService);
    }
  }

  public getDictionaryService(): DictionaryService {
    if (environment.isBackendServerAvailable) {
      return this.injector.get(DictionaryBackEndService);
    } else {
      return this.injector.get(DictionaryMockService);
    }
  }

  public getDateService(): DateService {
    return this.injector.get(DateService);
  }
}
