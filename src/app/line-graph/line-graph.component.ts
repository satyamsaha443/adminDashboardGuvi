import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from "chart.js";

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent {
  public lineChartData:
  ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'movement',
        fill: true,
        tension: 0.5,
        borderColor: 'rgb(60, 124, 221)',
        backgroundColor: 'rgba(152, 186, 237, 0.79)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
}
