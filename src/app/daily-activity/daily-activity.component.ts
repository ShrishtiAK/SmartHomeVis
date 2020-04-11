import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-daily-activity',
  templateUrl: './daily-activity.component.html',
  styleUrls: ['./daily-activity.component.css']
})
export class DailyActivityComponent implements OnInit {
  hostElement;
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
  svg;

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


    var x = d3.scaleBand().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    var totalActivity = [];

    var rooms = ["family room", "master bathroom", "kitchen", "master bedroom", "curtain sensor"];
    rooms.forEach(room => {
      var total = d3.sum(this.dailyActivityData.map(d => { return d[room] }));
      totalActivity.push({ room: room, total: total });
    })


    x.domain(rooms);
    y.domain([0, d3.max(totalActivity.map(d => { return d.total }))]);

    // Add the X Axis
    this.svg.append("g")
      .attr("transform", "translate(0," + (+height + 10) + ")")
      .call(d3.axisBottom(x));

    // Add the Y Axis
    this.svg.append("g")
      .call(d3.axisLeft(y).ticks(5));

    var barPadding = 20;
    this.svg.selectAll(".bar")
      .data(totalActivity)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("width", x.bandwidth() - barPadding)
      .attr("height", function (d) {
        return height - y(d.total)
      })
      .attr("x", function (d, i) {
        return x(d.room) + (barPadding / 2);
      })
      .attr("y", function (d) {
        return y(d.total);
      })

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
      .text("Room");

  }

}
