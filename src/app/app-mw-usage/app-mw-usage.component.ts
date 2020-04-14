import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-mw-usage',

  templateUrl: './app-mw-usage.component.html',
  styleUrls: ['./app-mw-usage.component.css']
})
export class MWUsageComponent implements OnInit {
  @Input() data: number[];
  hostElement;
  svg;
  mwDoorSensorData = [
    {
      "date": "18-11-2019",
      "time": "00:42:51",
      "duration": "00:00:56",
      "duration_min": 0.93
    },
    {
      "date": "18-11-2019",
      "time": "00:45:19",
      "duration": "00:00:28",
      "duration_min": 0.47
    },
    {
      "date": "18-11-2019",
      "time": "00:46:42",
      "duration": "00:00:27",
      "duration_min": 0.45
    },
    {
      "date": "18-11-2019",
      "time": "01:25:14",
      "duration": "00:01:28",
      "duration_min": 1.47
    },
    {
      "date": "18-11-2019",
      "time": "02:30:56",
      "duration": "00:03:32",
      "duration_min": 3.53
    },
    {
      "date": "18-11-2019",
      "time": "02:54:48",
      "duration": "00:00:30",
      "duration_min": 0.5
    },
    {
      "date": "18-11-2019",
      "time": "13:32:24",
      "duration": "00:12:56",
      "duration_min": 12.93
    },
    {
      "date": "18-11-2019",
      "time": "13:50:10",
      "duration": "03:53:24",
      "duration_min": 233.4
    },
    {
      "date": "18-11-2019",
      "time": "17:45:21",
      "duration": "00:00:38",
      "duration_min": 0.63
    },
    {
      "date": "18-11-2019",
      "time": "17:54:30",
      "duration": "00:00:49",
      "duration_min": 0.82
    },
    {
      "date": "18-11-2019",
      "time": "17:56:01",
      "duration": "00:01:53",
      "duration_min": 1.88
    },
    {
      "date": "18-11-2019",
      "time": "17:58:36",
      "duration": "00:07:18",
      "duration_min": 7.3
    },
    {
      "date": "18-11-2019",
      "time": "18:07:09",
      "duration": "00:17:29",
      "duration_min": 17.48
    },
    {
      "date": "18-11-2019",
      "time": "18:25:37",
      "duration": "00:37:38",
      "duration_min": 37.63
    },
    {
      "date": "18-11-2019",
      "time": "19:03:42",
      "duration": "02:22:08",
      "duration_min": 142.13
    },
    {
      "date": "18-11-2019",
      "time": "21:26:32",
      "duration": "01:40:08",
      "duration_min": 100.13
    },
    {
      "date": "18-11-2019",
      "time": "23:11:56",
      "duration": "00:00:24",
      "duration_min": 0.4
    },
    {
      "date": "18-11-2019",
      "time": "23:24:43",
      "duration": "00:01:22",
      "duration_min": 1.37
    },
    {
      "date": "18-11-2019",
      "time": "23:29:55",
      "duration": "00:00:42",
      "duration_min": 0.7
    }
  ]

  constructor(private elRef: ElementRef) {
    this.hostElement = this.elRef.nativeElement;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    var margin = { top: 20, right: 50, bottom: 50, left: 50 },
      width = 600 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;

    var parseTime = d3.timeParse("%H:%M:%S");

    // set the ranges
    var x = d3.scaleTime()
      .range([0, width])

    var y = d3.scaleLinear()
      .range([height, 0])
      .interpolate(d3.interpolateRound);;

    var segmentScale = d3.scaleBand()
      .range([height, 0]);

    this.mwDoorSensorData.forEach(function (d) {
      d["time_parsed"] = parseTime(d.time);
      d["duration_parsed"] = parseTime(d.duration);
    });

    console.log(this.mwDoorSensorData)

    x.domain([parseTime("00:00:01"), parseTime("23:59:59")]);
    y.domain([0, d3.max(this.mwDoorSensorData.map(d => { return d["duration_min"] }))]);

    segmentScale.domain(["20", "60", "200"]);

    this.svg = d3.select(this.hostElement).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    
    // Add the X Axis
    this.svg.append("g")
      .attr("transform", "translate(0," + 0 + ")")
      .attr("class", "xAxis")
      .call(d3.axisTop(x));

    // Add the Y Axis
    this.svg.append("g")
      .attr("class", "yAxis")
      .call(d3.axisLeft(y).ticks(5))
    //.call(g => g.select(".domain").remove());

    function make_x_gridlines() {
      return d3.axisBottom(x)
        .ticks(8)
    }
    function make_y_gridlines() {
      return d3.axisLeft(y)
        .ticks(5)
    }

    this.svg.append("g")
      .attr("class", "grid")
      .attr("transform", "translate(0," + height + ")")
      .style("stroke", "grey")
      .style("stroke-width", 0.5)
      .call(make_x_gridlines()
        .tickSize(-height)
      )


    // this.svg.append("g")
    //   .attr("class", "grid")
    //   .style("stroke", "grey")
    //   .style("stroke-width", 0.5)
    //   .call(make_y_gridlines()
    //     .tickSize(-width)
    //     //.tickFormat("")
    //   )

    d3.select(".grid").selectAll("text").remove();
    d3.select(".grid").select("path").remove();

    var max = d3.max(this.mwDoorSensorData.map(d => { return d["duration_min"] }));
    var durationSegments = [0, 60, max];
    this.svg.append("rect")
      .attr("x", 0)
      .attr("y", y(durationSegments[1]))
      .attr("height", y(durationSegments[0]) - y(durationSegments[1]))
      .attr("width", width)
      .style("fill", "whitesmoke")
      .style("opacity", "0.2")

    this.svg.append("rect")
      .attr("x", 0)
      .attr("y", y(durationSegments[2]))
      .attr("height", y(durationSegments[1]) - y(durationSegments[2]))
      .attr("width", width)
      .style("fill", "red")
      .style("opacity", "0.2")

    var thresholdLine = d3.line()
      .x(function (d) { return x(d["time_parsed"]); })
      .y(function (d) { return y(d["duration_min"]); });

    //warn line
    // this.svg.append("line")
    //   .attr("x1", x(x.domain()[0]))
    //   .attr("y1", y(60))
    //   .attr("x2", x(x.domain()[1]))
    //   .attr("y2", y(60))
    //   .style("stroke", "red")

    // this.svg.append("text")
    //   .attr("x", x(x.domain()[1]))
    //   .attr("y", y(60) - 10)
    //   .attr("dy", "1em")
    //   .attr("text-anchor", "start")
    //   .text("60 min")
    //   .attr("class", "warnLineText")

    this.svg.selectAll("dot")
      .data(this.mwDoorSensorData)
      .enter().append("circle")
      .attr("r", 4)
      .attr("cx", function (d) { return x(d["time_parsed"]); })
      .attr("cy", function (d) { return y(d["duration_min"]); })
      .style("fill", function (d) {
        if (d["duration_min"] < 60)
          return "green";
        else
          return "red";
      })
      .style("opacity", "0.6")
      .style("stroke", function (d) {
        if (d["duration_min"] < 60)
          return "green";
        else
          return "red";
      })


    this.svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Duration (min)");

    this.svg.append("text")
      .attr("transform",
        "translate(" + (width / 2) + " ," +
        (height + margin.top) + ")")
      .style("text-anchor", "middle")
      .text("Time");

  }


}
