import { DataService } from './../../services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LiveEntry } from 'src/app/model/shows/LiveEntry';
import { TicketLink } from 'src/app/model/shows/TicketLink';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-shows-page',
  templateUrl: './shows-page.component.html',
  styleUrls: ['./shows-page.component.scss']
})
export class ShowsPageComponent implements OnInit, OnDestroy {
  liveEntrySubscription?: Subscription;
  liveEntries: LiveEntry[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.liveEntrySubscription = this.dataService.getShowsData()
      .subscribe(shows => this.liveEntries = shows);
    // this.liveEntrySubscription = this.dataService.getShowsExampleData()
    //   .subscribe(shows => {
    //     this.liveEntries = shows
    //   });
  }

  ngOnDestroy(): void {
    if (this.liveEntrySubscription) {
      this.liveEntrySubscription.unsubscribe();
    }
  }

  trackByFn(index: number, item: any): number {
    return index;
  }
}
