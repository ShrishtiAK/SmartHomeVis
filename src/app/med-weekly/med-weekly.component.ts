import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-med-weekly',
  templateUrl: './med-weekly.component.html',
  styleUrls: ['./med-weekly.component.css']
})
export class MedWeeklyComponent implements OnInit {
  hostElement: any;
  svg;
  medData = [
  {
    "date": "02-02-2020",
    "time": "13:37:09",
    "day": "Sunday",
    "sunday": "TRUE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "FALSE",
    "event": "sun-o"
  },
  {
    "date": "03-02-2020",
    "time": "11:55:41",
    "day": "Monday",
    "sunday": "FALSE",
    "monday": "TRUE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "FALSE",
    "event": "mon-o-c"
  },
  {
    "date": "03-02-2020",
    "time": "11:55:46",
    "day": "Monday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "TRUE",
    "event": ""
  },
  {
    "date": "04-02-2020",
    "time": "11:58:41",
    "day": "Tuesday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "TRUE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "FALSE",
    "event": "tue-o-c"
  },
  {
    "date": "04-02-2020",
    "time": "11:58:47",
    "day": "Tuesday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "TRUE",
    "event": ""
  },
  {
    "date": "04-02-2020",
    "time": "19:18:20",
    "day": "Tuesday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "TRUE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "TRUE",
    "all_closed": "FALSE",
    "event": "tue-o-c,sat-o"
  },
  {
    "date": "04-02-2020",
    "time": "19:19:25",
    "day": "Tuesday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "TRUE",
    "all_closed": "FALSE",
    "event": ""
  },
  {
    "date": "05-02-2020",
    "time": "12:05:55",
    "day": "Wednesday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "TRUE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "FALSE",
    "event": "wed-o-c"
  },
  {
    "date": "05-02-2020",
    "time": "12:06:21",
    "day": "Wednesday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "TRUE",
    "event": ""
  },
  {
    "date": "06-02-2020",
    "time": "12:06:36",
    "day": "Thursday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "TRUE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "FALSE",
    "event": "thurs-o-c"
  },
  {
    "date": "06-02-2020",
    "time": "12:06:40",
    "day": "Thursday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "TRUE",
    "event": ""
  },
  {
    "date": "07-02-2020",
    "time": "11:45:55",
    "day": "Friday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "TRUE",
    "saturday": "FALSE",
    "all_closed": "FALSE",
    "event": "fri-o-c"
  },
  {
    "date": "07-02-2020",
    "time": "11:46:05",
    "day": "Friday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "TRUE",
    "event": ""
  },
  {
    "date": "08-02-2020",
    "time": "12:30:15",
    "day": "Saturday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "TRUE",
    "all_closed": "FALSE",
    "event": "sat-o-c"
  },
  {
    "date": "08-02-2020",
    "time": "12:30:26",
    "day": "Saturday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "TRUE",
    "event": ""
  },
  {
    "date": "09-02-2020",
    "time": "20:28:44",
    "day": "Sunday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "TRUE",
    "all_closed": "FALSE",
    "event": "all-o-c"
  },
  {
    "date": "09-02-2020",
    "time": "20:28:50",
    "day": "Sunday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "TRUE",
    "event": ""
  },
  {
    "date": "09-02-2020",
    "time": "20:28:53",
    "day": "Sunday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "TRUE",
    "all_closed": "FALSE",
    "event": ""
  },
  {
    "date": "09-02-2020",
    "time": "20:28:55",
    "day": "Sunday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "TRUE",
    "event": ""
  },
  {
    "date": "09-02-2020",
    "time": "20:29:00",
    "day": "Sunday",
    "sunday": "FALSE",
    "monday": "TRUE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "FALSE",
    "event": ""
  },
  {
    "date": "09-02-2020",
    "time": "20:29:01",
    "day": "Sunday",
    "sunday": "TRUE",
    "monday": "TRUE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "FALSE",
    "event": ""
  },
  {
    "date": "09-02-2020",
    "time": "20:29:05",
    "day": "Sunday",
    "sunday": "TRUE",
    "monday": "TRUE",
    "tuesday": "TRUE",
    "wednesday": "TRUE",
    "thursday": "TRUE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "FALSE",
    "event": ""
  },
  {
    "date": "09-02-2020",
    "time": "20:29:06",
    "day": "Sunday",
    "sunday": "TRUE",
    "monday": "TRUE",
    "tuesday": "TRUE",
    "wednesday": "TRUE",
    "thursday": "TRUE",
    "friday": "TRUE",
    "saturday": "FALSE",
    "all_closed": "FALSE",
    "event": ""
  },
  {
    "date": "09-02-2020",
    "time": "20:50:42",
    "day": "Sunday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "TRUE",
    "event": ""
  },
  {
    "date": "10-02-2020",
    "time": "11:02:20",
    "day": "Monday",
    "sunday": "FALSE",
    "monday": "TRUE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "FALSE",
    "event": "mon-o-c"
  },
  {
    "date": "10-02-2020",
    "time": "11:02:24",
    "day": "Monday",
    "sunday": "FALSE",
    "monday": "FALSE",
    "tuesday": "FALSE",
    "wednesday": "FALSE",
    "thursday": "FALSE",
    "friday": "FALSE",
    "saturday": "FALSE",
    "all_closed": "TRUE",
    "event": ""
  }
]
  constructor(private elRef: ElementRef) {
    this.hostElement = this.elRef.nativeElement;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    var margin = { top: 20, right: 20, bottom: 50, left: 60 },
      width = 1200 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;


    this.svg = d3.select(this.hostElement).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    var parseTime = d3.timeParse("%H:%M:%S");
    var parseDate = d3.timeParse("%d-%m-%Y")
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleTime().range([height, 0]);

    y.domain(d3.extent(this.medData.map(d => { return parseDate(d.date) })));
    //y.domain(this.medData.map(d => { return d.date }));    

    x.domain([parseTime("00:00:01"), parseTime("23:59:59")]);
    //x.domain(d3.range(0,24).map(d=>{return d.toString()}));

    // Add the X Axis
    // this.svg.append("g")
    //   .attr("transform", "translate(0," + (+height + 10) + ")")
    //   .call(d3.axisBottom(x).ticks(24));

    // // Add the Y Axis
    // this.svg.append("g")
    //   .call(d3.axisLeft(y));

    var eventGroup = this.svg.selectAll(".day")
      .data(this.medData.filter(d => { if (d.event != "") return d }))  //
      .enter()
      .append("g")
      .attr("class", "day")
      .attr("transform", function (d) {
        //var xpos = x(d.time.split(":")[0]);
        var ypos = y(parseDate(d.date))
        var xpos = x(parseTime(d.time));
        return "translate(" + xpos + "," + ypos + ")";
      })

    var events = eventGroup.selectAll("g")
      .data(function (d) { 
        return d.event.split(",").map(e=> {
          return {eventDay:e, day:d.day, len:d.event.split(",").length}
        }) 
      })
      .enter()
      .append("g")

    events.append("rect")
      .attr("class", "event")
      .attr("height",function(d){
        return 10;
        //return y.bandwidth()/d.len;
      } )
      .attr("width",10)//x.bandwidth())
      .attr("y", function (d, i) {
        return 10*i;
        //return (y.bandwidth()/d.len) * i;
      })
      .style("fill", function (d) {
        var eventDay = d.eventDay.split("-")[0];
        console.log(eventDay);
        if(eventDay == "all"){
          return "blue"
        }
        if (isMatch(eventDay, d.day)) {
          return "green";
        }       
        return "red"
      })
      .style("opacity", 0.8)
      
      // gridlines in x axis function
function make_x_gridlines() {		
  return d3.axisBottom(x)
      .ticks(24)
}

// gridlines in y axis function
function make_y_gridlines() {		
  return d3.axisLeft(y)
      //.ticks(5)
}

// add the X gridlines
this.svg.append("g")			
.attr("class", "grid")
.attr("transform", "translate(0," + height + ")")
.call(make_x_gridlines()
    .tickSize(-height)
    //.tickFormat("")
)

// add the Y gridlines
this.svg.append("g")			
.attr("class", "grid")
.call(make_y_gridlines()
    .tickSize(-width)
    //.tickFormat("")
)

      
    
    // eventGroup.append("circle")
    //   .attr("r", 5)
    //   .style("fill", function (d) {
    //     var eventDay = d.event.split("-")[0];
    //     if (isMatch(eventDay, d.day)) {
    //       return "green";
    //     }
    //     console.log(eventDay);
    //   })

    // eventGroup.append("text")
    //   .text(function (d) {
    //     if (d.event != "") {
    //       return d.event;
    //     }

    //   })


    function isMatch(eventDay, actualDay) {
      var dayMapping = {
        "sun": "Sunday", "mon": "Monday", "tue": "Tuesday",
        "wed": "Wednesday", "thurs": "Thursday", "fri": "Friday", "sat": "Saturday"
      };
      if (dayMapping[eventDay] == actualDay)
        return true;
      return false;
    }


    this.svg.append("text")
      .attr("class", "axisLabel")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Date");

    this.svg.append("text")
      .attr("class", "axisLabel")
      .attr("transform",
        "translate(" + (width / 2) + " ," +
        (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Time");

  }

}
