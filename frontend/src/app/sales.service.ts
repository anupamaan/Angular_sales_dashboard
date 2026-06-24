import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
    private apiUrl = 'http://localhost:3000/api/sales'; 
    private regionUrl = 'http://localhost:3000/api/regions';
    private monthlySalesUrl = 'http://localhost:3000/api/monthly-sales';

  constructor(private http: HttpClient) { }

  getSales() {
     return this.http.get(this.apiUrl);
  }
  getRegions() {
   
    return this.http.get(this.regionUrl );
  }
  getMonthlySales() {
    return this.http.get(this.monthlySalesUrl);
  }

}