var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
var LineChartComponent = (function () {
    function LineChartComponent() {
        this.minValue = 99;
        this.maxValue = 0;
        this.dataOffset = 5;
        this.isChartLegend = false;
        this.chartType = 'line';
        this.chartOptions = {
            responsive: true,
            animation: {
                easing: 'easeInOutExpo'
            },
        };
        this.chartColors = [
            {
                backgroundColor: '#BBDEFB',
                borderColor: '#1976D2',
                pointBackgroundColor: '#1976D2',
                pointBorderColor: '#BBDEFB',
                pointHoverBackgroundColor: '#2196F3',
                pointHoverBorderColor: '#1565C0' // MATERIAL DESIGN 800
            },
            {
                backgroundColor: '#FFCDD2',
                borderColor: '#D32F2F',
                pointBackgroundColor: '#D32F2F',
                pointBorderColor: '#FFCDD2',
                pointHoverBackgroundColor: '#F44336',
                pointHoverBorderColor: '#C62828' // MATERIAL DESIGN 800
            },
            {
                backgroundColor: '#C8E6C9',
                borderColor: '#388E3C',
                pointBackgroundColor: '#388E3C',
                pointBorderColor: '#C8E6C9',
                pointHoverBackgroundColor: '#4CAF50',
                pointHoverBorderColor: '#2E7D32' // MATERIAL DESIGN 800
            }
        ];
    }
    LineChartComponent.prototype.ngOnInit = function () {
        this.findMinAndMaxValues();
    };
    LineChartComponent.prototype.findMinAndMaxValues = function () {
        var _this = this;
        this.chartData[0].data.forEach(function (value) {
            if (value < _this.minValue) {
                _this.minValue = Math.round(value);
            }
            else if (value > _this.maxValue) {
                _this.maxValue = Math.round(value);
            }
        });
    };
    return LineChartComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], LineChartComponent.prototype, "chartData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], LineChartComponent.prototype, "chartLabels", void 0);
LineChartComponent = __decorate([
    Component({
        selector: 'coach-line-chart',
        templateUrl: 'line-chart.component.html',
        styleUrls: []
    })
], LineChartComponent);
export { LineChartComponent };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/shared/charts/line-chart.component.js.map