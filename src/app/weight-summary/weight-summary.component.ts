import { Component, OnInit } from '@angular/core';
const data = {
  chart: {
    lowerlimit: "0",
    upperlimit: "100",
    showvalue: "1",
    numbersuffix: "%",
    theme: "fusion",
    showtooltip: "0"
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "50",
        code: "#F2726F"
      },
      {
        minvalue: "50",
        maxvalue: "75",
        code: "#FFC533"
      },
      {
        minvalue: "75",
        maxvalue: "100",
        code: "#62B58F"
      }
    ]
  },
  dials: {
    dial: [
      {
        value: "81"
      }
    ]
  }
};

@Component({
  selector: 'app-weight-summary',
  templateUrl: './weight-summary.component.html',
  styleUrls: ['./weight-summary.component.css']
})
export class WeightSummaryComponent implements OnInit {
  width = 200;
  height = 100;
  type = "angulargauge";
  dataFormat = "json";
  dataSource = data;
  constructor() { }

  ngOnInit(): void {
  }

}
