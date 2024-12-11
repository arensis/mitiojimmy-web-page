import { DataService } from 'src/app/shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { LiveEntry } from 'src/app/model/shows/LiveEntry';
import moment from 'moment';
import 'moment/locale/es';

@Component({
  selector: 'app-nearest-show',
  templateUrl: './nearest-show.component.html',
  styleUrls: ['./nearest-show.component.scss']
})
export class NearestShowComponent implements OnInit {
  latestShows!: LiveEntry[];

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.getShowsData().subscribe((shows: LiveEntry[]) => {
      const latestShows = shows.filter(show => moment().isBefore(moment(show.date)));
      console.log('latestShows', latestShows);
      latestShows.sort((a, b) => {
        if (moment(a.date).isAfter(moment(b.date))) {
          return 1
        }
        if (moment(a.date).isBefore(moment(b.date))) {
          return -1
        }

        return 0
      });


      this.latestShows = latestShows;
    });
  }
}
