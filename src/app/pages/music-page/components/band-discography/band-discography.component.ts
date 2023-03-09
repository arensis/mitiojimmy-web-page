import { Album } from './../../../../model/Album';
import { BandDiscography } from './../../../../model/BandDiscography';
import { Component, Input } from '@angular/core';

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
