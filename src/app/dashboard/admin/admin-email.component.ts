import {AfterViewInit, Component} from "@angular/core";
import {AdminService} from "./services/admin.service";
import {DictionaryService} from "../../shared/services/dictionary.service";
import {ServiceInjector} from "../../shared/services/service.injector";

declare var Materialize: any;

@Component({
  selector: 'coach-admin-email',
  template: `
    <h1>{{'page.admin.email.title' | dictionary}}</h1>
    <div class="input-field">
      <input id="mail-title" type="text" [(ngModel)]="mailTitle" name="mail-title">
      <label for="mail-title">{{'page.admin.email.title.label' | dictionary}}</label>
    </div>
    <div class="input-field">
      <i class="material-icons prefix">email</i>
      <textarea id="mail-content" class="materialize-textarea active" [(ngModel)]="mailContent" name="mail-content"
                length="2000" materialize="characterCounter"></textarea>
      <label for="mail-content">{{'page.admin.email.text.label' | dictionary}}</label>
    </div>
    <button class="btn waves-effect waves-light blue" type="submit" name="action" (click)="sendEmail()">
      {{'page.admin.email.send.label' | dictionary}}
      <i class="material-icons right">send</i>
    </button>
    <div *ngIf="message">
      <p [ngClass]="messageStyle">{{message}}</p>
    </div>
  `,
  styleUrls: ['./admin.scss', '../../shared/materialize-upgrades.scss']
})
export class AdminEmailComponent implements AfterViewInit {

  public mailContent = "";
  public mailTitle = "My Coach";
  public message = "";
  public messageStyle = "";
  private dictionaryService: DictionaryService;

  constructor(private adminService: AdminService, private serviceInjector: ServiceInjector) {
    this.dictionaryService = this.serviceInjector.getDictionaryService();
  }

  ngAfterViewInit(): void {
    setTimeout(() => Materialize.updateTextFields(), 500);
  }

  public sendEmail() {
    this.adminService.sendEmail(this.mailTitle, this.mailContent)
      .first()
      .subscribe(
        ok => {
          this.mailTitle = "";
          this.mailContent = "";
          this.message = this.dictionaryService.getDictionaryValue("page.admin.email.message.success");
          this.messageStyle = "success-message";
        },
        error => {
          this.message = this.dictionaryService.getDictionaryValue("page.admin.email.message.error");
          this.messageStyle = "error-message";
        }
      )
  }


}
