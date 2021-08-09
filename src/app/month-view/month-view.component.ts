import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'node_modules/moment';

class DayElement {
  label: string = '';
  style: string = '';
}

const dayFormat: string = 'YYYY-MM-DD';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent implements OnInit {
  
  @Input() date: any;
  @Input() numberofWeeksShown: any;
  @Output() nextClick = new EventEmitter<void>();
  @Output() previousClick = new EventEmitter<void>();
  @Output() yearChanged = new EventEmitter<number>();
  @ViewChild('yearInput') yearInput: ElementRef | undefined;

  days: Array<Array<DayElement>> = [];
  weeks: Array<number> = [];
  month: string = '';
  year: string = '';

  constructor() { }

  ngOnInit(): void {
    this.show(this.date);
  }

  show(date: any): void {
    let m = moment(date);
    const currentMonth = m.month();
    this.month = m.format('MMM');
    this.year = m.format('YYYY');
    m.startOf('month');
    m.startOf('week');
    for (let w = 0; w < this.numberofWeeksShown; w++) {
      let week = [];
      this.weeks[w] = m.week();
      for (let i = 0; i < 7; i++) {
        let dayElement = new DayElement();
        dayElement.label = m.format('D');
        dayElement.style = 'calendarText'
        if (m.month() !== currentMonth) {
          dayElement.style += ' otherMonthDay';
        } else if (m.format(dayFormat) == moment().format(dayFormat)) {
          dayElement.style += ' today';
        } else {
          dayElement.style += ' normalDay';
        }
        if ((m.day() === 0) || ((m.day() === 6))) {
          dayElement.style += ' offWork';
        } else {
          dayElement.style += ' workingDay';
        }
        week[i] = dayElement;
        m.add(1, 'd');
      }
      this.days[w] = week;
    }
  }

  onPrevious(): void{
    this.previousClick.emit();
  }

  onNext(): void {
    this.nextClick.emit();
  }

  onChange() {
    this.yearChanged.emit(parseInt(this.year));
    if (this.yearInput) {
      this.yearInput.nativeElement.blur();
    }
  }

}
