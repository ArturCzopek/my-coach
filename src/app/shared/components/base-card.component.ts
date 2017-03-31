import {OnInit} from "@angular/core";

export abstract class BaseCardComponent implements OnInit {

  public previewTitle: string;
  public arrowImageClass: string;
  public isLoading: boolean;
  public showData: boolean;

  ngOnInit(): void {
    // false showData because at first toggle we want to see true to load data
    this.showData = false;
    this.isLoading = true;
    this.arrowImageClass = 'left-arrow';
  }

  public toggleShow() {
    this.showData = !this.showData;

    if (this.showData) {
      this.arrowImageClass = 'down-arrow';
    } else {
      this.arrowImageClass = 'left-arrow';
    }
  }

  public getLoadingStyle() {
    if (this.isLoading) {
      return "loading";
    } else {
      return "";
    }
  }
}
