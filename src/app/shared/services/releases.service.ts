import { Injectable } from '@angular/core';
import moment from 'moment';
import { Release } from 'src/app/model/release/Release';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {
  findLatestRelease(releases: Release[]): Release {
    releases.sort((a, b) => {
      if (moment(a.date).isAfter(moment(b.date))) {
        return -1
      }
      if (moment(a.date).isBefore(moment(b.date))) {
        return 1
      }

      return 0
    });

    return releases[0];
  }
}
