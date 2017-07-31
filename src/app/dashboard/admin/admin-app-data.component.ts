import {Component} from "@angular/core";
import {AdminService} from "./services/admin.service";
import {ServiceInjector} from "../../shared/services/service.injector";
import {DictionaryService} from "../../shared/services/dictionary.service";

@Component({
  selector: 'coach-admin-app-data',
  template: `
    <h1>{{'page.admin.data.title' | dictionary}}</h1>
    <div class="app-data-row" *ngFor="let data of appData; trackBy: trackByKey">
      <p class="key">{{getTranslatedKey(data.key)}}</p> <p>{{data.value}}</p>
    </div>
  `,
  styleUrls: ['./admin.scss']
})
export class AdminAppDataComponent {

  public appData: any[] = [];
  private dictionaryService: DictionaryService;

  constructor(private adminService: AdminService, private serviceInjector: ServiceInjector) {
    this.dictionaryService = serviceInjector.getDictionaryService();
    this.adminService.getAppData()
      .first()
      .subscribe(
        data => {
          this.appData = [];
          for (let key in data) {
            this.appData.push({key, value: data[key]})
          }
        },
        error => console.error(error)
      )
  }

  public getTranslatedKey(key: string): string {
    return this.dictionaryService.getDictionaryValue(`page.admin.data.${key}.label`);
  }

  public trackByKey(index, data: any) {
    return data.key;
  }
}
