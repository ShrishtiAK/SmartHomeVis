import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-linechart-component',
  templateUrl: './linechart-component.component.html',
  styleUrls: ['./linechart-component.component.css']
})
export class LinechartComponentComponent implements OnInit {
  @ViewChild('lineChart') chart: ElementRef;
  LineChart: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let ctx = this.chart.nativeElement;
    console.log(ctx);
    this.LineChart = new Chart(ctx, {
      type: 'line',
    data: {
     labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
     datasets: [{
         label: 'Number of Items Sold in Months',
         data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
         fill:false,
         lineTension:0.2,
         borderColor:"red",
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"Line Chart",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
  }

}
