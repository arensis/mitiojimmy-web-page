import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import moment, { Moment } from 'moment';
import 'moment/locale/es';


@Component({
  selector: 'app-live-date',
  templateUrl: './live-date.component.html',
  styleUrls: ['./live-date.component.scss']
})
export class LiveDateComponent implements OnInit, OnDestroy {
  @Input()
  date!: Date;

  dayNumber!: string;
  dayName!: string;
  monthName!: string;

  languageSubscription!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    const date = moment(this.date);
    this.updateDateVariables(date, this.translate.currentLang);

    this.languageSubscription = this.translate.onLangChange.subscribe(language => {
      this.updateDateVariables(date, language.lang);
    });
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  private updateDateVariables(date: Moment, lang: string): void {
    date.locale(lang);
    this.dayNumber = this.buildDayNumber(date.date());
    this.dayName = date.format('dddd').toUpperCase().slice(0, 3);
    this.monthName = date.format('MMMM').toUpperCase().slice(0, 3);
  }

  private buildDayNumber(dayNumber: number): string {
    return dayNumber > 9 ? dayNumber.toString() : '0'.concat(dayNumber.toString());
  }
}
