import { Component, OnInit, ElementRef, OnChanges, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import * as d3 from 'd3';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexYAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  fill: ApexFill;
};

@Component({
  selector: 'app-monthly-activity',
  templateUrl: './monthly-activity.component.html',
  styleUrls: ['./monthly-activity.component.css']
})
export class MonthlyActivityComponent  {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  monthlyActivityData;
  constructor(private dataservice: DataService) {
    this.monthlyActivityData = dataservice.getMonthlyActivityData();

    var familyRoomData = this.monthlyActivityData.filter(d=> {
      if(d.room == "family room")
        return d;
    })
    .map(d=> {
      return d.total;
    })
    console.log(familyRoomData);

    var bedroomData = this.monthlyActivityData.filter(d=> {
      if(d.room == "master bedroom")
        return d;
    })
    .map(d=> {
      return d.total;
    })

    var bathroomData = this.monthlyActivityData.filter(d=> {
      if(d.room == "master bathroom")
        return d;
    })
    .map(d=> {
      return d.total;
    })

    var kitchenData = this.monthlyActivityData.filter(d=> {
      if(d.room == "kitchen")
        return d;
    })
    .map(d=> {
      return d.total;
    });
    console.log(kitchenData);

    var dates = d3.range(1,32).map(d => {
      return d + " Dec";
    });

    this.chartOptions = {
      series: [
        {
          name: "Family Room",
          data: familyRoomData
        },
        {
          name: "Master Bedroom",
          data: bedroomData
        },
        {
          name: "Kitchen",
          data: kitchenData
        },
        {
          name: "Master Bedroom",
          data: bathroomData
        }
      ],
      chart: {
        type: "bar",
        height: 220,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          
        }
      },
      xaxis: {
        type: "category",
        categories: dates
      },
      yaxis: {
        title:{
          text: "Total events"
        }
      },
      legend: {
        position: "top",
        offsetY: 0
      },
      fill: {
        opacity: 0.8
      },
      dataLabels:{
        enabled:false
      },
    };
  }
 
}
