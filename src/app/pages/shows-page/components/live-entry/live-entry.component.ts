import { LiveEntry } from '../../../../model/shows/LiveEntry';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-live-entry',
  templateUrl: './live-entry.component.html',
  styleUrls: ['./live-entry.component.scss']
})
export class LiveEntryComponent {
 @Input()
 liveEntry!: LiveEntry;

 trackByFn(index: number, item: any): number {
  return index;
  }


}
