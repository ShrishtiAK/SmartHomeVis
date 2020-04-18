import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";
import * as d3 from 'd3';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};


@Component({
  selector: 'app-activity-bar',
  templateUrl: './activity-bar.component.html',
  styleUrls: ['./activity-bar.component.css']
})
export class ActivityBarComponent  {
  dailyActivityData = [
    {
      "date": "18-11-2019",
      "hour": 0,
      "family room": 13,
      "master bathroom": 6,
      "kitchen": 5,
      "master bedroom": 1,
      "curtain sensor": 27
    },
    {
      "date": "18-11-2019",
      "hour": 1,
      "family room": 2,
      "master bathroom": 2,
      "kitchen": 3,
      "master bedroom": 25,
      "curtain sensor": 17
    },
    {
      "date": "18-11-2019",
      "hour": 2,
      "family room": 0,
      "master bathroom": 3,
      "kitchen": 2,
      "master bedroom": 10,
      "curtain sensor": 1
    },
    {
      "date": "18-11-2019",
      "hour": 3,
      "family room": 0,
      "master bathroom": 0,
      "kitchen": 4,
      "master bedroom": 8,
      "curtain sensor": 0
    },
    {
      "date": "18-11-2019",
      "hour": 4,
      "family room": 0,
      "master bathroom": 0,
      "kitchen": 5,
      "master bedroom": 2,
      "curtain sensor": 0
    },
    {
      "date": "18-11-2019",
      "hour": 5,
      "family room": 0,
      "master bathroom": 0,
      "kitchen": 31,
      "master bedroom": 5,
      "curtain sensor": 3
    },
    {
      "date": "18-11-2019",
      "hour": 6,
      "family room": 1,
      "master bathroom": 15,
      "kitchen": 54,
      "master bedroom": 10,
      "curtain sensor": 7
    },
    {
      "date": "18-11-2019",
      "hour": 7,
      "family room": 3,
      "master bathroom": 22,
      "kitchen": 77,
      "master bedroom": 1,
      "curtain sensor": 11
    },
    {
      "date": "18-11-2019",
      "hour": 8,
      "family room": 6,
      "master bathroom": 11,
      "kitchen": 74,
      "master bedroom": 0,
      "curtain sensor": 2
    },
    {
      "date": "18-11-2019",
      "hour": 9,
      "family room": 13,
      "master bathroom": 3,
      "kitchen": 50,
      "master bedroom": 0,
      "curtain sensor": 3
    },
    {
      "date": "18-11-2019",
      "hour": 10,
      "family room": 3,
      "master bathroom": 2,
      "kitchen": 12,
      "master bedroom": 1,
      "curtain sensor": 6
    },
    {
      "date": "18-11-2019",
      "hour": 11,
      "family room": 3,
      "master bathroom": 5,
      "kitchen": 10,
      "master bedroom": 0,
      "curtain sensor": 8
    },
    {
      "date": "18-11-2019",
      "hour": 12,
      "family room": 6,
      "master bathroom": 13,
      "kitchen": 53,
      "master bedroom": 0,
      "curtain sensor": 6
    },
    {
      "date": "18-11-2019",
      "hour": 13,
      "family room": 9,
      "master bathroom": 2,
      "kitchen": 74,
      "master bedroom": 0,
      "curtain sensor": 2
    },
    {
      "date": "18-11-2019",
      "hour": 14,
      "family room": 9,
      "master bathroom": 16,
      "kitchen": 30,
      "master bedroom": 0,
      "curtain sensor": 3
    },
    {
      "date": "18-11-2019",
      "hour": 15,
      "family room": 8,
      "master bathroom": 11,
      "kitchen": 11,
      "master bedroom": 1,
      "curtain sensor": 1
    },
    {
      "date": "18-11-2019",
      "hour": 16,
      "family room": 9,
      "master bathroom": 12,
      "kitchen": 6,
      "master bedroom": 0,
      "curtain sensor": 16
    },
    {
      "date": "18-11-2019",
      "hour": 17,
      "family room": 2,
      "master bathroom": 5,
      "kitchen": 74,
      "master bedroom": 0,
      "curtain sensor": 12
    },
    {
      "date": "18-11-2019",
      "hour": 18,
      "family room": 8,
      "master bathroom": 13,
      "kitchen": 94,
      "master bedroom": 1,
      "curtain sensor": 13
    },
    {
      "date": "18-11-2019",
      "hour": 19,
      "family room": 13,
      "master bathroom": 21,
      "kitchen": 10,
      "master bedroom": 0,
      "curtain sensor": 14
    },
    {
      "date": "18-11-2019",
      "hour": 20,
      "family room": 14,
      "master bathroom": 11,
      "kitchen": 4,
      "master bedroom": 2,
      "curtain sensor": 22
    },
    {
      "date": "18-11-2019",
      "hour": 21,
      "family room": 7,
      "master bathroom": 21,
      "kitchen": 18,
      "master bedroom": 26,
      "curtain sensor": 13
    },
    {
      "date": "18-11-2019",
      "hour": 22,
      "family room": 5,
      "master bathroom": 24,
      "kitchen": 10,
      "master bedroom": 27,
      "curtain sensor": 12
    },
    {
      "date": "18-11-2019",
      "hour": 23,
      "family room": 8,
      "master bathroom": 33,
      "kitchen": 11,
      "master bedroom": 33,
      "curtain sensor": 10
    }
  ];

  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    var totalActivity = [];
    var rooms = ["family room", "master bathroom", "kitchen", "master bedroom"];
    rooms.forEach(room => {
      var total = d3.sum(this.dailyActivityData.map(d => { return d[room] }));
      totalActivity.push({ room: room, total: total });
    });
    var totals = totalActivity.map(d=>{
      return d.total;
    })
    this.chartOptions = {
      series: [
        {
          name: "Activity",
          data: totals
        }
      ],
      chart: {
        type: "bar",
        height: 220,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Family Room",
          "Master Bedroom",
          "Kitchen",
          "Master Bathroom"
        ]
      },
      yaxis: {
        title: {
          text: "Total events"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return + val + " events";
          }
        }
      }
    };
  }

}
