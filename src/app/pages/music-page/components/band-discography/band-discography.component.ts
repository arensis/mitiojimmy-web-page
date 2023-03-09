import { Component, Input } from '@angular/core';
import { Album } from 'src/app/model/discography/Album';
import { BandDiscography } from 'src/app/model/discography/BandDiscography';

@Component({
  selector: 'app-band-discography',
  templateUrl: './band-discography.component.html',
  styleUrls: ['./band-discography.component.scss']
})
export class BandDiscographyComponent {
  @Input()
  bandDiscography?: BandDiscography;

  trackFn(index: number, item: Album,) {
    return index;
  }
}
