import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalesService } from './sales.service';
import {CommonModule} from '@angular/common';
import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,
     Dashboard,

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
   salesData: any[] = [];

  constructor() {
   
    }
  }