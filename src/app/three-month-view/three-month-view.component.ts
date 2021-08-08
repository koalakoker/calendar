import { Component, OnInit } from '@angular/core';
import * as moment from 'node_modules/moment';

@Component({
  selector: 'app-three-month-view',
  templateUrl: './three-month-view.component.html',
  styleUrls: ['./three-month-view.component.css']
})
export class ThreeMonthViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCurrentMonth() {
    return moment();
  }
  
  getPreviousMonth() {
    return moment().subtract(1, 'month');
  }

  getNextMonth() {
    return moment().add(1, 'month');
  }

}
