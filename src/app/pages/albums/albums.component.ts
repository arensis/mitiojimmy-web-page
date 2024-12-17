import { Component } from '@angular/core';
import { faBandcamp, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { Subscription } from 'rxjs/internal/Subscription';
import { BandDiscography } from 'src/app/shared/model/discography/BandDiscography';
import { StreamingServiceType } from 'src/app/shared/model/discography/StreamingServiceType';
import { AlbumType } from 'src/app/shared/model/release/AlbumType';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {
  bandAlbumsSubscription!: Subscription;
  bands: BandDiscography[] = [];
  bandCampIcon = faBandcamp;
  spotifyIcon = faSpotify;

  streamingService = {
    [StreamingServiceType.SPOTIFY.toString()]: {class: 'faSpotify', icon: faSpotify},
    [StreamingServiceType.BANDCAMP.toString()]: {class: 'faBandcamp', icon: faBandcamp}
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.bandAlbumsSubscription = this.dataService.getDiscographyData()
    .subscribe(bandsDiscography => this.bands = bandsDiscography);
  }

  ngOnDestroy(): void {
    if (this.bandAlbumsSubscription) {
      this.bandAlbumsSubscription.unsubscribe();
    }
  }

  trackFn(index: number, item: any, ) {
    return index;
  }

  findStreaminServiceClassName(streamingServiceName: string): any {
    return this.streamingService[streamingServiceName];
  }
}
