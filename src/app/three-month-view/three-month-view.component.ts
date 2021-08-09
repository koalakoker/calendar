import { Component, OnInit, ViewChild} from '@angular/core';
import * as moment from 'node_modules/moment';
import { MonthViewComponent } from '../month-view/month-view.component';

@Component({
  selector: 'app-three-month-view',
  templateUrl: './three-month-view.component.html',
  styleUrls: ['./three-month-view.component.css']
})
export class ThreeMonthViewComponent implements OnInit {

  @ViewChild('previousMonthView') private previousMonthView: MonthViewComponent | undefined;
  @ViewChild('centerMonthView')   private centerMonthView:   MonthViewComponent | undefined;
  @ViewChild('nextMonthView')     private nextMonthView:     MonthViewComponent | undefined;

  centerMonth: any;
  previousMonth: any;
  nextMonth: any;

  constructor() { }

  ngOnInit(): void {
    this.centerMonth = moment();
    this.previousMonth = moment(this.centerMonth).subtract(1,'month');
    this.nextMonth = moment(this.centerMonth).add(1, 'month');
  }
  
  onNextClick() {
    if (this.previousMonthView) {
      this.previousMonth.add(1, 'month');
      this.previousMonthView.show(this.previousMonth);
    }
    if (this.centerMonthView) {
      this.centerMonth.add(1, 'month');
      this.centerMonthView.show(this.centerMonth);
    }
    if (this.nextMonthView) {
      this.nextMonth.add(1, 'month');
      this.nextMonthView.show(this.nextMonth);
    }
  }
  
  onPreviousClick() {
    if (this.previousMonthView) {
      this.previousMonth.subtract(1, 'month');
      this.previousMonthView.show(this.previousMonth);
    }
    if (this.centerMonthView) {
      this.centerMonth.subtract(1, 'month');
      this.centerMonthView.show(this.centerMonth);
    }
    if (this.nextMonthView) {
      this.nextMonth.subtract(1, 'month');
      this.nextMonthView.show(this.nextMonth);
    }
  }

  onYearChanged(year: number) {
    if (this.previousMonthView) {
      this.previousMonth.year(year);
      this.previousMonthView.show(this.previousMonth);
    }
    if (this.centerMonthView) {
      this.centerMonth.year(year);
      this.centerMonthView.show(this.centerMonth);
    }
    if (this.nextMonthView) {
      this.nextMonth.year(year);
      this.nextMonthView.show(this.nextMonth);
    }
  }

}
