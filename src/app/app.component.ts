import { Component, OnInit } from '@angular/core';
import * as moment from 'node_modules/moment';

class DayElement {
  label: string = '';
  style: string = '';
}

const dayFormat: string = 'YYYY-MM-DD';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'calendar';
  date: any;
  days: Array<Array<DayElement>> = [];
  weeks: Array<number> = [];
  month: string = '';
  
  ngOnInit() {
    moment.updateLocale('it', {
      week: {
        dow: 1,
        doy: 4
      }
    });
  }
  
  onChange() {
    let m = moment(this.date);
    const currentMonth = m.month();
    this.month = m.format('MMM');
    m.startOf('month');
    m.startOf('week');
    for (let w = 0; w < 6; w++) {
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
        m.add(1,'d');
      }
      this.days[w] = week;
    }
  }
}
