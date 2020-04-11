import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Chart } from 'chart.js';
import { HighchartsService } from './highcharts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('lineChart') chart:ElementRef; 
  constructor(private highcharts: HighchartsService) { }

  LineChart: any;
  title = 'smart-home-vis';

  ngOnInit(): void {
    // this.LineChart = new Chart('lineChart', {
    //   type: 'line',
    // data: {
    //  labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
    //  datasets: [{
    //      label: 'Number of Items Sold in Months',
    //      data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
    //      fill:false,
    //      lineTension:0.2,
    //      borderColor:"red",
    //      borderWidth: 1
    //  }]
    // }, 
    // options: {
    //  title:{
    //      text:"Line Chart",
    //      display:true
    //  },
    //  scales: {
    //      yAxes: [{
    //          ticks: {
    //              beginAtZero:true
    //          }
    //      }]
    //  }
    // }
    // });
  }
  
}
