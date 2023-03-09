import { DataService } from './../../services/data.service';
import { BandDiscography } from '../../model/discography/BandDiscography';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { StreamingServiceType } from 'src/app/model/discography/StreamingServiceType';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.scss']
})
export class MusicPageComponent implements OnInit, OnDestroy {

  musicNote = faMusic;

  bandsSubscription?: Subscription;

  bands: BandDiscography[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.bandsSubscription = this.dataService.getDiscographyData()
      .subscribe(discography => this.bands = discography);
  }

  ngOnDestroy(): void {
    if (this.bandsSubscription) {
      this.bandsSubscription.unsubscribe();
    }
  }

  trackFn(index: number, item: any) {
    return index;
  }
}
