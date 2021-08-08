import { Component, OnInit } from '@angular/core';
import * as moment from 'node_modules/moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    moment.updateLocale('it', {
      week: {
        dow: 1,
        doy: 4
      }
    });
  }
}
