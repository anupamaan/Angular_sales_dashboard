import { AfterViewInit, Input } from '@angular/core';
import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  imports: [],
  templateUrl: './charts.html',
  styleUrl: './charts.css',
})
export class ChartComponent implements AfterViewInit {
  @Input() labels: any[] = [];
  @Input() data: any[] = [];

  ngAfterViewInit() {
    new Chart('salesChart', {

      type: 'bar',

      data: {
        labels: this.labels,

        datasets: [
          {
            label: 'Sales',
            data: this.data
          }
        ]
      }

    });

  }

}