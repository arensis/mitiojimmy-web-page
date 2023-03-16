import { TranslateService } from '@ngx-translate/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output()
  onMenuClick = new EventEmitter<void>;

  title = 'Mi tío Jimmy';
  showBandLogo = false;

  constructor(private translate: TranslateService) {}

  openMenu(): void {
    this.onMenuClick.emit();
  }
}
