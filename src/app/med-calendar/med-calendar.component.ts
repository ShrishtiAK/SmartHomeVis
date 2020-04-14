import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { DataService } from '../data.service';
import { map } from 'highcharts';

@Component({
  selector: 'app-med-calendar',
  templateUrl: './med-calendar.component.html',
  styleUrls: ['./med-calendar.component.css']
})
export class MedCalendarComponent implements OnInit {
  hostElement: any;
  svg;
  data;
  summaryData;
  constructor(private dataService: DataService, private elRef: ElementRef) {
    this.hostElement = this.elRef.nativeElement;
    this.data = dataService.getMedCalendarData();
    this.summaryData = dataService.getMedCalSummaryData();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    var margin = { top: 20, right: 20, bottom: 50, left: 20 },
      width = 600 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;
    // var width = 960,
    //   height = 750,
    var cellSize = 50; // cell size
    var cellHeight = 35;
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
    // var days = svg.selectAll(".day")
    //   .data(d3.timeDays(new Date(2020, 1, 1), new Date(2020, 2, 1)))
    //   .enter().append("circle")
    //   .attr("class", "day")
    //   .attr("r", cellWidth / 2 - 2)
    //   .attr("cx", function (d) {
    //     return (Number(day(d)) * cellWidth) + cellWidth / 2;
    //   })
    //   .attr("cy", function (d) {
    //     var week_diff = Number(week(d)) - Number(week(new Date(Number(year(d)), Number(month(d)) - 1, 1)));
    //     var row_level = Math.ceil(Number(month(d)) / (no_months_in_a_row));
    //     return (week_diff * cellHeight) + 10 + cellWidth / 2 //+ row_level * cellSize * 8 - cellSize / 2 - shift_up;
    //   })
    //   .datum(format);

    var dayG = svg.selectAll("g")
      .data(d3.timeDays(new Date(2020, 1, 1), new Date(2020, 2, 1)))
      .enter().append("g")
      .attr("transform", function (d, i) {
        var x = (Number(day(d)) * cellWidth);
        var week_diff = Number(week(d)) - Number(week(new Date(Number(year(d)), Number(month(d)) - 1, 1)));
        var y = (week_diff * cellHeight) + 10;
        return "translate(" + x + "," + y + ")";
      })
      .datum(format);

    dayG.on("click", mouseclick)



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
          return "steelblue";
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
      .style("fill", "whitesmoke")
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

    var nestedData = d3.nest()
      .key(function (d) { return d["date"] })
      .object(data)


    // days.filter(function (d) {
    //   return d in nestedData;
    // }).attr("class", function (d) {
    //   return (match(nestedData[d]))

    // })

    function match(events) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].day == events[i].event)
          return "match";
        if (events[i].event == "Refill")
          return "refill"
      }
      return "mismatch";
    }



    function mouseclick(d, i) {
      dayG.selectAll("rect").style("stroke", "white");

      dayG.filter(dg => {return dg == d}).selectAll("rect")
      .style("stroke", "black");

      if (d in nestedSummaryData) {
        console.log(nestedSummaryData[d]);
        showMoreInfo(nestedSummaryData[d]);
      }
      else {
        showMoreInfo(null);
      }

    }

    function showMoreInfo(data) {
      d3.select(".moreInfo").remove();

      var moreInfo = svg.append("g")
        .attr("transform", "translate(450,0)")
        .attr("class", "moreInfo");


      if (data != null) {
        moreInfo.append("text")
        .text("Time\tBox opened")
        .attr("x", 0)
        .attr("y", 0)

        moreInfo.selectAll(".eventText")
          .data(data)
          .enter()
          .append("text")
          .attr("class", "eventText")
          .text(function (d) {
            return d["time"] + "\t" + d["event"];
          })
          .attr("x", 0)
          .attr("y", function (d, i) {
            return 20 * i + 20;
          })
      }
      else{
        moreInfo.append("text")
          .text("No pills taken")
      }

    }


  }



}
