import { Component, OnInit } from '@angular/core';
import * as moment from 'node_modules/moment';

const weekDayName: Array<string> = [
  'Domenica',
  'Lunedi',
  'Martedi',
  'Mercoledi',
  'Giovedi',
  'Venrdi',
  'Sabato'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'calendar';
  date: any;
  weeks: Array<Array<string>> = [];
  
  ngOnInit() {
  }
  
  onChange() {
    let m = moment(this.date);
    m.subtract(m.date() - 1,'d'); // Go back to first day of the month
    m.subtract(m.day(),'d'); // Go back to first day of the week
    for (let w = 0; w < 5; w++) {
      let week = [];
      for (let i = 0; i < 7; i++) {
        week[i] = m.format('D');
        m.add(1,'d');
      }
      this.weeks[w] = week;
    }
  }
}
