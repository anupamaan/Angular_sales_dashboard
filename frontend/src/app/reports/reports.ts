import { Component,ElementRef,Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-reports',
  imports: [],
  templateUrl: './reports.html',
  styleUrl: './reports.css',
})
export class ReportComponent implements AfterViewInit {
 @Input() regions: string[] = [];
  @Input() salesValues: any[] = [];
  @Input() svalues: any[] = [];
  @Input() mlabels: any[] = [];

  
    @ViewChild('pieChartCanvas')
  pieChartCanvas!: ElementRef<HTMLCanvasElement>;
  // chart: any;
ngAfterViewInit() {

  const canvas = document.getElementById('pieChart') as HTMLCanvasElement;

  if (!canvas) {
    console.log('Canvas not found');
    return;
  }

  new Chart(canvas, {
    type: 'pie',
    data: {
      labels: this.regions,
      datasets: [{
        data: this.salesValues
      }]
    }
  });


new Chart('lineChart',{

type:'line',

data:{

labels:this.mlabels,

datasets:[{

label:'Monthly Sales',

data:this.svalues,

}]

}

});





}
}