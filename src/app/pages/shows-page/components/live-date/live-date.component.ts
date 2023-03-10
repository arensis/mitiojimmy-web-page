import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-live-date',
  templateUrl: './live-date.component.html',
  styleUrls: ['./live-date.component.scss']
})
export class LiveDateComponent implements OnInit {
  @Input()
  date?: Date;

  dayNumber?: string;
  dayName?: string;
  monthName?: string;

  ngOnInit(): void {
    const date = moment(this.date);
    date.locale('es');
    this.dayNumber = this.buildDayNumber(date.date());
    this.dayName = date.format('dddd').toUpperCase().slice(0, 3);
    this.monthName = date.format('MMMM').toUpperCase().slice(0, 3);
  }

  buildDayNumber(dayNumber: number): string {
    return dayNumber > 9 ? dayNumber.toString() : '0'.concat(dayNumber.toString());
  }
}
