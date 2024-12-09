import { Component, Input } from '@angular/core';
import { LiveEntry } from 'src/app/shared/model/shows/LiveEntry';

@Component({
  selector: 'app-dahsboard-live-entry',
  templateUrl: './dahsboard-live-entry.component.html',
  styleUrls: ['./dahsboard-live-entry.component.scss']
})
export class DahsboardLiveEntryComponent {
  @Input()
  liveEntry!: LiveEntry;

  liveInfoExpanded = false;

  toggleLiveInfoExpaned() {
    this.liveInfoExpanded = !this.liveInfoExpanded;
  }
}
