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
  
  ngOnInit() {
  }
  
  onChange() {
    let m = moment(this.date);
    console.log(m.format());
    //console.log('Week: ' + m.week());    
    console.log('Giorno della settimana: ' + weekDayName[m.day()]);
    m.subtract(m.day(),'d'); // Go back to first day of the week
    for (let i = 0; i < 7; i++) {
      console.log(m.format('Do'));
      m.add(1,'d');
    }
  }
}
