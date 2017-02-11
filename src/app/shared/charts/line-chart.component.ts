import {Component, Input, OnInit} from "@angular/core";

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
      backgroundColor: '#BBDEFB', //MATERIAL DESIGN 100
      borderColor: '#1976D2', //MATERIAL DESIGN 700
      pointBackgroundColor: '#1976D2', //MATERIAL DESIGN 700
      pointBorderColor: '#BBDEFB', //MATERIAL DESIGN 100
      pointHoverBackgroundColor: '#2196F3', //MATERIAL DESIGN 500
      pointHoverBorderColor: '#1565C0' //MATERIAL DESIGN 800
    },
    { // red
      backgroundColor: '#FFCDD2', //MATERIAL DESIGN 100
      borderColor: '#D32F2F', //MATERIAL DESIGN 700
      pointBackgroundColor: '#D32F2F', //MATERIAL DESIGN 700
      pointBorderColor: '#FFCDD2', //MATERIAL DESIGN 100
      pointHoverBackgroundColor: '#F44336', //MATERIAL DESIGN 500
      pointHoverBorderColor: '#C62828' //MATERIAL DESIGN 800
    },
    { // green
      backgroundColor: '#C8E6C9', //MATERIAL DESIGN 100
      borderColor: '#388E3C', //MATERIAL DESIGN 700
      pointBackgroundColor: '#388E3C', //MATERIAL DESIGN 700
      pointBorderColor: '#C8E6C9', //MATERIAL DESIGN 100
      pointHoverBackgroundColor: '#4CAF50', //MATERIAL DESIGN 500
      pointHoverBorderColor: '#2E7D32' //MATERIAL DESIGN 800
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
