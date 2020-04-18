import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexDataLabels,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
};

@Component({
  selector: 'app-mw-scatter',
  templateUrl: './mw-scatter.component.html',
  styleUrls: ['./mw-scatter.component.css']
})
export class MwScatterComponent  {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  mwDoorSensorData = [
    {
      "date": "2019-11-18",
      "time": "00:42:51",
      "duration": "00:00:56",
      "duration_min": 0.93
    },
    {
      "date": "2019-11-18",
      "time": "00:45:19",
      "duration": "00:00:28",
      "duration_min": 0.47
    },
    {
      "date": "2019-11-18",
      "time": "00:46:42",
      "duration": "00:00:27",
      "duration_min": 0.45
    },
    {
      "date": "2019-11-18",
      "time": "01:25:14",
      "duration": "00:01:28",
      "duration_min": 1.47
    },
    {
      "date": "2019-11-18",
      "time": "02:30:56",
      "duration": "00:03:32",
      "duration_min": 3.53
    },
    {
      "date": "2019-11-18",
      "time": "02:54:48",
      "duration": "00:00:30",
      "duration_min": 0.5
    },
    {
      "date": "2019-11-18",
      "time": "13:32:24",
      "duration": "00:12:56",
      "duration_min": 12.93
    },
    {
      "date": "2019-11-18",
      "time": "13:50:10",
      "duration": "03:53:24",
      "duration_min": 233.4
    },
    {
      "date": "2019-11-18",
      "time": "17:45:21",
      "duration": "00:00:38",
      "duration_min": 0.63
    },
    {
      "date": "2019-11-18",
      "time": "17:54:30",
      "duration": "00:00:49",
      "duration_min": 0.82
    },
    {
      "date": "2019-11-18",
      "time": "17:56:01",
      "duration": "00:01:53",
      "duration_min": 1.88
    },
    {
      "date": "2019-11-18",
      "time": "17:58:36",
      "duration": "00:07:18",
      "duration_min": 7.3
    },
    {
      "date": "2019-11-18",
      "time": "18:07:09",
      "duration": "00:17:29",
      "duration_min": 17.48
    },
    {
      "date": "2019-11-18",
      "time": "18:25:37",
      "duration": "00:37:38",
      "duration_min": 37.63
    },
    {
      "date": "2019-11-18",
      "time": "19:03:42",
      "duration": "02:22:08",
      "duration_min": 142.13
    },
    {
      "date": "2019-11-18",
      "time": "21:26:32",
      "duration": "01:40:08",
      "duration_min": 100.13
    },
    {
      "date": "2019-11-18",
      "time": "23:11:56",
      "duration": "00:00:24",
      "duration_min": 0.4
    },
    {
      "date": "2019-11-18",
      "time": "23:24:43",
      "duration": "00:01:22",
      "duration_min": 1.37
    },
    {
      "date": "2019-11-18",
      "time": "23:29:55",
      "duration": "00:00:42",
      "duration_min": 0.7
    }
  ]

  constructor() {
    console.log(new Date(this.mwDoorSensorData[0].date + "T" + this.mwDoorSensorData[0].time).getTime())
    var mwData = this.mwDoorSensorData.map(d => {
        return [new Date(d.date + "T" + d.time).getTime(),d.duration_min]
    });
    var mwDataLess = mwData.filter(d => {
      if(d[1] <= 60)
        return d;
    })
    var mwDataMore = mwData.filter(d => {
      if(d[1] > 60)
        return d;
    })
    
    this.chartOptions = {
      series: [
        
        {
          name: "Less than 60 minutes",
          data: []
        },
        {
          name: "More than 60 minutes",
          data: []
        }         
      ],
      chart: {
        height: 300,
        type: "scatter",
        toolbar:{
          show:true
        },
        zoom: {
          type: "xy"
        }
      },
      dataLabels: {
        enabled: false
      },
     
      xaxis: {
        type: "datetime",
        labels:{
          format: "HH TT"
        }
      },
      yaxis: {
        max: 300
      }
    };
  }

  public generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([baseval, y]);
      baseval += 86400000;
      i++;
    }
    console.log(series)
    return series;
  }
}



