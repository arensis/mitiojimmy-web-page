import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { BandDiscography } from 'src/app/shared/model/discography/BandDiscography';
import { LiveEntry } from 'src/app/shared/model/shows/LiveEntry';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  bandsDiscographySubscription!: Subscription;
  showsSubscription!: Subscription;

  liveEntries: LiveEntry[] = [];
  bandsDiscography: BandDiscography[] = [];


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.showsSubscription = this.dataService.getShowsData()
      .subscribe(shows => {
        this.liveEntries = shows.filter((item: LiveEntry) => {
          const today = new Date();
          const liveDate = new Date(item.date);
          return (liveDate.getTime() > today.getTime()) &&
          (liveDate.getFullYear() >= today.getFullYear());
        }).slice(0, 3)
      });

    this.bandsDiscographySubscription = this.dataService.getDiscographyData()
      .subscribe(bandsDiscography => this.bandsDiscography = bandsDiscography);
  }
  ngOnDestroy(): void {
    if (this.bandsDiscographySubscription) {
      this.bandsDiscographySubscription.unsubscribe();
    }

    if (this.showsSubscription) {
      this.showsSubscription.unsubscribe();
    }
  }

  trackFn(index: number, item: any, ) {
    return index;
  }
}
