import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexAnnotations,
  ApexMarkers
} from "ng-apexcharts";

import { series } from "./data";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  annotations: ApexAnnotations;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  labels: string[];
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
};
@Component({
  selector: 'app-weight-monthly',
  templateUrl: './weight-monthly.component.html',
  styleUrls: ['./weight-monthly.component.css']
})
export class WeightMonthlyComponent {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  weightData;
  constructor() {

    this.weightData = {
      weight: [142, 143, 140, 145, 147],
      dates: ["1 Dec 2019", "5 Dec 2019", "12 Dec 2019", "16 Dec 2019", "25 Dec 2019"]
    }
      this.chartOptions = {
      series: [
        {
          name:"Weight (lb)",
          data: this.generateDayWiseTimeSeries()
        }
      ],
      chart: {
        height: 220,
        type: "line",
        toolbar: {
          show: false
        }
      },
     
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "straight"
      },
      grid: {
        padding: {
          right: 30,
          left: 20
        }
      },     
      markers: {
        size: 1
      },
      yaxis: {
        title: {
          text: "Weight",
          offsetX: 10
        }
      },
      xaxis: {
        type: "datetime",
        title: {
          text: "Date",
          offsetY: 10
        }
      }
    };
  }
  public generateDayWiseTimeSeries() {
    var i = 0;
    var series = [];
    series = [];
    this.weightData.weight.forEach((d,i) => {
      var ts = new Date(this.weightData.dates[i]).getTime();
      series.push([ts,d]);
    })
    
    return series;
  }
}


