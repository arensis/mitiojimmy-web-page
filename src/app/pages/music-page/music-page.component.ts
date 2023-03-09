import { StreamingServiceType } from './../../model/StreamingServiceType';
import { BandDiscography } from './../../model/BandDiscography';
import { Component, OnInit } from '@angular/core';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.scss']
})
export class MusicPageComponent implements OnInit {

  musicNote = faMusic;

  bands: BandDiscography[] = [
    {
      bandName: 'Good Bye Lenin',
      albums: [
        {
          releaseDate: 'Marzo 2022',
          imageUrl: 'assets/images/GBL-album-cover.jpg',
          id: '7eAg2VNN0F5vkuwCLyGErH',
          artistPlaylist: true,
          streamingService: StreamingServiceType.SPOTIFY
        }
      ]
    },
    {
      bandName: 'Magnética',
      albums: [
        {
          releaseDate: 'Enero 2014',
          imageUrl: 'https://f4.bcbits.com/img/0002340923_10.jpg',
          id: '2407477905',
          artistPlaylist: false,
          streamingService: StreamingServiceType.BANDCAMP
        },
        {
          releaseDate: 'Octubre 2013',
          imageUrl: 'https://f4.bcbits.com/img/a1856076420_10.jpg',
          id: '1022444437',
          artistPlaylist: false,
          streamingService: StreamingServiceType.BANDCAMP
        },
        {
          releaseDate: 'Octubre 2012',
          imageUrl: 'https://f4.bcbits.com/img/a3567800698_10.jpg',
          id: '1387061987',
          artistPlaylist: false,
          streamingService: StreamingServiceType.BANDCAMP
        },
        {
          releaseDate: 'Abril 2010',
          imageUrl: 'https://f4.bcbits.com/img/a2016682209_10.jpg',
          id: '115197473',
          artistPlaylist: false,
          streamingService: StreamingServiceType.BANDCAMP
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  trackFn(index: number, item: any) {
    return index;
  }
}
