import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-hourly-activity',
  templateUrl: './hourly-activity.component.html',
  styleUrls: ['./hourly-activity.component.css']
})
export class HourlyActivityComponent implements OnInit {
  hostElement;
  svg;
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
  constructor(private elRef: ElementRef) {
    this.hostElement = this.elRef.nativeElement;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    var margin = { top: 20, right: 20, bottom: 50, left: 50 },
      width = 600 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;


    this.svg = d3.select(this.hostElement).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    x.domain([0, 23]);
    // Add the X Axis
    this.svg.append("g")
      .attr("transform", "translate(0," + (+height + 10) + ")")
      .call(d3.axisBottom(x).ticks(24));

    var rooms = ["family room", "kitchen", "master bedroom", "master bathroom"];
    var roomMaxActivity = [];
    rooms.forEach(room => {
      roomMaxActivity.push(d3.max(this.dailyActivityData.map(d => {
        return d[room];
      })))
    })
    var yMax = d3.max(roomMaxActivity);
    console.log(yMax);

    y.domain([0, yMax]);

    // Add the Y Axis
    this.svg.append("g")
      .call(d3.axisLeft(y).ticks(5));

    var familyRoomLine = d3.line()
      .x(function (d) { return x(d["hour"]) })
      .y(function (d) { return y(d["family room"]) })

    var bathroomLine = d3.line()
      .x(function (d) { return x(d["hour"]) })
      .y(function (d) { return y(d["master bathroom"]) })

    var kitchenLine = d3.line()
      .x(function (d) { return x(d["hour"]) })
      .y(function (d) { return y(d["kitchen"]) })

    var bedroomLine = d3.line()
      .x(function (d) { return x(d["hour"]) })
      .y(function (d) { return y(d["master bedroom"]) })

    this.svg.append("path")
      .data([this.dailyActivityData])
      .attr("class", "familyRoomLine")
      .attr("d", familyRoomLine);

    this.svg.append("path")
      .data([this.dailyActivityData])
      .attr("class", "bathroomLine")
      .attr("d", bathroomLine);

    this.svg.append("path")
      .data([this.dailyActivityData])
      .attr("class", "bedroomLine")
      .attr("d", bedroomLine);

    this.svg.append("path")
      .data([this.dailyActivityData])
      .attr("class", "kitchenLine")
      .attr("d", kitchenLine);


    this.svg.append("text")
      .attr("class", "axisLabel")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Events per hour");

    this.svg.append("text")
      .attr("class", "axisLabel")
      .attr("transform",
        "translate(" + (width / 2) + " ," +
        (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Hour");


  }

}
