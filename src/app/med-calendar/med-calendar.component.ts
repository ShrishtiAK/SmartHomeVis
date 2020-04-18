import { Component, OnInit, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import * as d3 from 'd3';
import { DataService } from '../data.service';
import { map, time } from 'highcharts';

export interface tableElement {
  time: string;
  event: string;  
}
const DATA: tableElement[] = [{time:"11:00", event:"Sun"},
{time:"11:00", event:"Sun"}]

@Component({
  selector: 'app-med-calendar',
  templateUrl: './med-calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./med-calendar.component.css']
})
export class MedCalendarComponent implements OnInit {
  hostElement: any;
  svg;
  data;
  summaryData;
  tableData = [];
  displayedColumns: string[] = ['time','event'];

  constructor(private ref: ChangeDetectorRef,private dataService: DataService, private elRef: ElementRef) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 500);
    this.hostElement = this.elRef.nativeElement;
    this.data = dataService.getMedCalendarData();
    this.summaryData = dataService.getMedCalSummaryData();
  }

  ngOnInit(): void {
  }
  updateData(data){
    this.tableData = [];
    var temp = [];
    data.forEach(d => {
      var cls;
      var time;
      var event;
      if(d.event == "Refill")
        cls = "refillText"
      else if(d.event == d.day)
        cls = "matchText"
      else 
        cls = "mismatchText"
      
      if(d.event != "Refill")
        event = d.event.slice(0,3);
      else  
        event = d.event;

      time = d.time.slice(0,5);  
      temp.push({"time":time,"event":event,"class":cls});    
    })
    this.tableData = temp;
  }

  ngAfterViewInit() {
    var margin = { top: 10, right: 20, bottom: 50, left: 20 },
      width = 600 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;
   
    var cellSize = 50; // cell size
    var cellHeight = 30;
    var cellWidth = 60;

    var no_months_in_a_row = Math.floor(width / (cellSize * 7 + 50));
    var shift_up = cellSize * 3;

    var day = d3.timeFormat("%w"), // day of the week
      day_of_month = d3.timeFormat("%e"), // day of the month
      day_of_year = d3.timeFormat("%j"),
      week = d3.timeFormat("%U"), // week number of the year
      month = d3.timeFormat("%m"), // month number
      year = d3.timeFormat("%Y"),
      percent = d3.format(".1%"),
      format = d3.timeFormat("%d-%m-%Y");

    var svg = d3.select(this.hostElement).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dayText = svg.selectAll(".dayText")
      .data(weekdays)
      .enter()
      .append("text")
      .attr("class", "dayText")
      .attr("x", function (d, i) {
        return cellWidth / 2 + (i * cellWidth);
      })
      .attr("y", function (d, i) {
        return 0;
      })
      .style("text-anchor", "middle")
      .text(function (d) {
        return d;
      })
   
    var comp = this;
    var dayG = svg.selectAll("g")
      .data(d3.timeDays(new Date(2019, 11, 1), new Date(2019, 12, 1)))
      .enter().append("g")
      .attr("transform", function (d, i) {
        var x = (Number(day(d)) * cellWidth);
        var week_diff = Number(week(d)) - Number(week(new Date(Number(year(d)), Number(month(d)) - 1, 1)));
        var y = (week_diff * cellHeight) + 10;
        return "translate(" + x + "," + y + ")";
      })
      .datum(format);

    dayG.on("click", function(d,i){    
      mouseclick(d,i,comp);
    })    

    var nestedSummaryData = d3.nest()
      .key(function (d) { return d["date"] })
      .object(this.summaryData);

    console.log(nestedSummaryData);

    //cells with events
    dayG.filter(function (d) {
      return d in nestedSummaryData;
    }).selectAll(".dayEvent")
      .data(function (d) {
        console.log(d)
        nestedSummaryData[d].forEach(e => {
          e.len = nestedSummaryData[d].length;
        });
        return nestedSummaryData[d];
      })
      .enter()
      .append("rect")
      .attr("class", "dayEvent")
      .attr("y", 0)
      .attr("x", function (d, i) {
        return i * (cellWidth / d["len"]);
      })
      .attr("width", function (d, i) {
        return cellWidth / d["len"];
      })
      .attr("height", cellHeight)
      .style("fill", function (d, i) {
        if (d["event"] == "Refill")
          return "dodgerblue";
        else if (d["event"] == d["day"])
          return "green"
        else
          return "red"
      })
      .style("stroke", "white")
      .style("stroke-width", 2);

    //empty cells
    dayG.filter(function (d) {
      return !(d in nestedSummaryData);
    })
      .append("rect")
      .attr("class", "dayEvent")
      .attr("x", 0)
      .attr("y", 0)
      .attr("height", cellHeight)
      .attr("width", cellWidth)
      .style("fill", "silver")
      .style("stroke", "white")
      .style("stroke-width", 2);

    //add day on calendar
    dayG.append("text")
      .attr("x", 2)
      .attr("y", 15)
      .text(function (d, i) {
        return d.split("-")[0];
      })
    var data = this.data;
    data = data.filter(d => {
      if (d.event != "") {
        return d;
      }
    })

    function mouseclick(d, i, comp) {
      dayG.selectAll("rect").style("opacity", 0.5);

      dayG.filter(dg => {return dg == d}).selectAll("rect")
      .style("opacity", 0.8);

      if (d in nestedSummaryData) {
        comp.updateData(nestedSummaryData[d]);        
      }
      else {
        
        comp.updateData([{"time":"", "event":""}]);  
      }

    }

    
  }

 



}
