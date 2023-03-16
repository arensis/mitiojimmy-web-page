import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LiveEntry } from 'src/app/model/shows/LiveEntry';

@Component({
  selector: 'app-live-info',
  templateUrl: './live-info.component.html',
  styleUrls: ['./live-info.component.scss']
})
export class LiveInfoComponent {
  @Input()
  liveEntry!: LiveEntry;

  constructor(private tranlsate: TranslateService) {}
}
