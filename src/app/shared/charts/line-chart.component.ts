import {Component, Input, OnInit} from "@angular/core";

//TODO fix charts y-axis
//change label from x

@Component({
  selector: 'coach-line-chart',
  templateUrl: 'line-chart.component.html',
  styleUrls: []
})
export class LineChartComponent implements OnInit{

  @Input() private chartData: any[];
  @Input() private chartLabels: any[];

  private minValue = 99;
  private maxValue = 0;
  private dataOffset = 5;

  private isChartLegend: boolean = false;
  private chartType: string = 'line';

  private chartOptions: any = {
    responsive: true,
    animation: {
      easing: 'easeInOutExpo'
    },
    // scales: {
    //   yAxes: [{
    //     // ticks: {min: 74, max: 86},
    //     ticks: {min: this.minValue - this.dataOffset, max: this.maxValue + this.dataOffset}
    //   }]
    // }
  }

  private chartColors: any[] = [
    { // blue
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(25,118,210,1)',
      pointBackgroundColor: 'rgba(25,118,210,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: 'rgba(25,118,210,0.8)'
    },
    { // red
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(188,0,0,1)',
      pointBackgroundColor: 'rgba(188,0,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: 'rgba(188,0,0,0.8)'
    },
    { // green
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(30,170,0,1)',
      pointBackgroundColor: 'rgba(30,170,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: 'rgba(30,170,0,0.8)'
    }
  ];

  ngOnInit(): void {
    this.findMinAndMaxValues();
  }

  private findMinAndMaxValues() {
    this.chartData[0].data.forEach((value) => {
        if (value < this.minValue) {
          this.minValue = Math.round(value);
        } else if (value > this.maxValue) {
          this.maxValue = Math.round(value);
        }
      }
    );
  }
}
