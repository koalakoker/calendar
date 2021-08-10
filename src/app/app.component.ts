import { Component, OnInit } from '@angular/core';
import * as moment from 'node_modules/moment';
import { name, version, author } from '../../package.json';

function toUppercaseFistChar(str: string) {
  let convertedStr = str[0].toUpperCase();
  str.toLowerCase();
  convertedStr += str.substring(1);
  return convertedStr;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  info: string = toUppercaseFistChar(name) + " v." + version + " by " + toUppercaseFistChar(author.name);
  
  ngOnInit() {
    moment.updateLocale('it', {
      week: {
        dow: 1,
        doy: 4
      }
    });
  }
}
