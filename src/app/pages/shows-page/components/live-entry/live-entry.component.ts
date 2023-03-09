import { LiveEntry } from './../../../../model/LiveEntry';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-live-entry',
  templateUrl: './live-entry.component.html',
  styleUrls: ['./live-entry.component.scss']
})
export class LiveEntryComponent implements OnInit {
 @Input()
 liveEntry!: LiveEntry;
 dayNumber?: string;
 dayName?: string;
 monthName?: string;

  constructor() {

  }

  ngOnInit(): void {
    const date = moment(this.liveEntry.date);
    date.locale('es');
    this.dayNumber = this.buildDayNumber(date.date());
    this.dayName = date.format('dddd').toUpperCase();
    this.monthName = date.format('MMMM').toUpperCase().slice(0, 3);
  }

 trackByFn(index: number, item: any): number {
  return index;
  }

  buildDayNumber(dayNumber: number): string {
    return dayNumber > 9 ? dayNumber.toString() : '0'.concat(dayNumber.toString());
  }
}
