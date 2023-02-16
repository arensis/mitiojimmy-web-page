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

  openMenu(): void {
    this.onMenuClick.emit();
  }
}
