import { DataService } from 'src/app/shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import 'moment/locale/es';
import { LiveEntry } from '../../model/shows/LiveEntry';

@Component({
  selector: 'app-nearest-show',
  templateUrl: './nearest-show.component.html',
  styleUrls: ['./nearest-show.component.scss']
})
export class NearestShowComponent implements OnInit {
  existsNewShow: boolean = false;
  liveEntry!: LiveEntry;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getShowsData().subscribe((shows: LiveEntry[]) => {
      shows.sort((a, b) => {
        if (moment(a.date).isAfter(moment(b.date))) {
          return -1
        }
        if (moment(a.date).isBefore(moment(b.date))) {
          return 1
        }

        return 0
      });

      const latestShow = shows[0];

      if (moment(latestShow.date).add(1, 'days').isAfter(moment())) {
        this.existsNewShow = true;
        this.liveEntry = latestShow;
      }
    });
  }
}
