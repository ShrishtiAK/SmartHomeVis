import { Component, OnInit, ElementRef, OnChanges } from '@angular/core';
import { DataService } from '../data.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-monthly-activity',
  templateUrl: './monthly-activity.component.html',
  styleUrls: ['./monthly-activity.component.css']
})
export class MonthlyActivityComponent implements OnInit, OnChanges {

  fr = true;
  mbr = false;
  mbath = false;
  kitchen = false;


  hostElement: any;
  data: any;
  svg: any;
  line: any;
  x;
  y;

  constructor(private dataService: DataService, private elRef: ElementRef) {
    this.hostElement = this.elRef.nativeElement;
    this.data = this.dataService.getMonthlyActivityData();
  }

  ngOnInit(): void {
  }

  onChange() {
    console.log(this.fr, this.mbr, this.mbath, this.kitchen);
    this.createLine();
  }
  ngOnChanges() {
    console.log("change")
  }

  ngAfterViewInit() {
    var margin = { top: 20, right: 20, bottom: 50, left: 60 },
      width = 1200 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;


    this.svg = d3.select(this.hostElement).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    var parseDate = d3.timeParse("%d-%m-%Y");

    x.domain([parseDate("01-12-2019"), parseDate("31-12-2019")]);

    // Add the X Axis
    this.svg.append("g")
      .attr("transform", "translate(0," + (+height + 10) + ")")
      .call(d3.axisBottom(x));

    this.svg.append("text")
      .attr("class", "axisLabel")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Events");

    this.svg.append("text")
      .attr("class", "axisLabel")
      .attr("transform",
        "translate(" + (width / 2) + " ," +
        (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Date");


    this.line = d3.line()
      .x(function (d) { return x(parseDate(d["date"])) })
      .y(function (d) { return y(+d["total"]) })
      .curve(d3.curveMonotoneX);


    var maxTotal = Number(d3.max(this.data.map(d => { return Number(d.total) })));
    y.domain([0, maxTotal]);

    this.x = x;
    this.y = y;

    // Add the Y Axis
    this.svg.append("g")
      .call(d3.axisLeft(y).ticks(5));


    //add legend
    var legendLabels = ["Family Room", "Master Bedroom", "Kitchen", "Master Bathroom"];
    var legendColors = ["steelblue", "green", "grey", "red"];

    var legend = this.svg.append("g")
    .attr("transform","translate(" + (width - 150) + "," + 10 + ")");

    var legendGroups = legend.selectAll("g")
    .data(legendLabels)
    .enter().append("g")
    .attr("class", "legend")
    .attr("transform", function(d,i){
      return "translate(0," + i*20 + ")"; 
    })

    legendGroups.append("circle")
      .attr("class", "legendDot")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 7)
      .style("fill", function(d,i){
        return legendColors[i];
      })
      .style("stroke", function(d,i){
        return legendColors[i];
      })

    legendGroups.append("text")
    .attr("x", 20)
    .attr("y", 6)
    .text(function(d,i){
      return legendLabels[i];
    })
    .style("text-anchor", "start")
    .style("font-size", 15)

    this.createLine();
  }

  createLine() {

    this.svg.selectAll(".line").remove();
    this.svg.selectAll(".dot").remove();

    var x = this.x;
    var y = this.y;
    var parseDate = d3.timeParse("%d-%m-%Y");

    if (this.fr == true) {
      var roomData = this.data.filter(d => {
        if (d.room == "family room")
          return d;
      })
      this.svg.append("path")
        .data([roomData])
        .attr("class", "line familyRoomLine")
        .attr("d", this.line);

      this.svg.selectAll(".familyRoomDot")
        .data(roomData)
        .enter()
        .append("circle")
        .attr("class", "dot familyRoomDot")
        .attr("cx", function (d, i) {
          return x(parseDate(d["date"]))
        })
        .attr("cy", function (d, i) {
          return y(+d["total"])
        })
        .attr("r", 3)
    }

    if (this.mbr == true) {
      var roomData = this.data.filter(d => {
        if (d.room == "master bedroom")
          return d;
      })
      this.svg.append("path")
        .data([roomData])
        .attr("class", "line bedroomLine")
        .attr("d", this.line);

      this.svg.selectAll(".bedroomDot")
        .data(roomData)
        .enter()
        .append("circle")
        .attr("class", "dot bedroomDot")
        .attr("cx", function (d, i) {
          return x(parseDate(d["date"]))
        })
        .attr("cy", function (d, i) {
          return y(+d["total"])
        })
        .attr("r", 3)
    }

    if (this.kitchen == true) {
      var roomData = this.data.filter(d => {
        if (d.room == "kitchen")
          return d;
      })
      this.svg.append("path")
        .data([roomData])
        .attr("class", "line kitchenLine")
        .attr("d", this.line);

      this.svg.selectAll(".kitchenDot")
        .data(roomData)
        .enter()
        .append("circle")
        .attr("class", "dot kitchenDot")
        .attr("cx", function (d, i) {
          return x(parseDate(d["date"]))
        })
        .attr("cy", function (d, i) {
          return y(+d["total"])
        })
        .attr("r", 3)
    }

    if (this.mbath) {
      var roomData = this.data.filter(d => {
        if (d.room == "master bathroom")
          return d;
      })

      this.svg.append("path")
        .data([roomData])
        .attr("class", "line bathroomLine")
        .attr("d", this.line);

      this.svg.selectAll(".bathroomDot")
        .data(roomData)
        .enter()
        .append("circle")
        .attr("class", "dot bathroomDot")
        .attr("cx", function (d, i) {
          return x(parseDate(d["date"]))
        })
        .attr("cy", function (d, i) {
          return y(+d["total"])
        })
        .attr("r", 3)
    }




  }

}
