import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service';
import {ChartComponent} from '../charts/charts';
// import {ChartComponent} from '../charts/charts';
import {ReportComponent} from '../reports/reports';


@Component({
  selector: 'app-dashboard',
  imports: [ChartComponent, ReportComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  
  sales: any[] = [];
  total_sales=0;
  total_orders=0;
  total_quantity=0;
  average_sales=0;
  labels: any[] = [];
  dat: any[] = [];
  regions: any[] = [];
  regi: any[] = []; 
  salesvalue: any[] = [];
  monthslysales: any[] = [];
  mlabels:any [] = [];
  svalues:any[]=[];
constructor(private salesService: SalesService) {}
  

  ngOnInit(): void {

    this.salesService.getSales()
      .subscribe((data: any) => {

        console.log("API DATA:", data);

        this.sales = Array.isArray(data) ? data : [];


        this.total_sales = this.sales.reduce(
          (sum, item) => sum + Number(item.sales || 0),
          0
        );


        this.total_quantity = this.sales.reduce(
          (sum, item) => sum + Number(item.quantity || 0),
          0
        );


        this.total_orders = this.sales.length;


        this.average_sales =
          this.total_orders > 0
          ? this.total_sales / this.total_orders
          : 0;
          
           for (var item of this.sales) {
             this.labels.push(item.product_id); 
             this.dat.push(item.sales);
    
           }
          
           
          
 });

  this.salesService.getRegions()
      .subscribe((reg: any) => {
        this.regions = Array.isArray(reg) ? reg : [];
        for (var item of this.regions) {
          this.regi.push(item.region)
          this.salesvalue.push(item.total_sales);
        }

      });
    
      this.salesService.getMonthlySales()
      .subscribe((monthlySales: any) => {
        this.monthslysales = Array.isArray(monthlySales) ? monthlySales : [];
        console.log("@@",this.monthslysales)
        const monthLabels = this.monthslysales.map(item =>
  new Date(item.month).toLocaleString('en-US', {
    month: 'short'
  })
);

console.log("vvvv",monthLabels)
this.mlabels=monthLabels
for(const item of this.monthslysales)
{
  this.svalues.push(item.total_sales)
}
      });

    
  

    }

}



