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
  weeks: Array<Array<DayElement>> = [];
  
  ngOnInit() {
  }
  
  onChange() {
    let m = moment(this.date);
    const currentMonth = m.month();
    m.subtract(m.date() - 1,'d'); // Go back to first day of the month
    m.subtract(m.day(),'d'); // Go back to first day of the week
    for (let w = 0; w < 5; w++) {
      let week = [];
      for (let i = 0; i < 7; i++) {
        let dayElement = new DayElement();
        dayElement.label = m.format('D');
        dayElement.style = 'day normalDay';
        if (m.month() !== currentMonth) {
          dayElement.style = 'day grayDay';
        }
        if (m.format(dayFormat) == moment().format(dayFormat)) {
          dayElement.style = 'day today';
        }
        week[i] = dayElement;
        m.add(1,'d');
      }
      this.weeks[w] = week;
    }
  }
}
