import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faXmark,
  faCalendarAlt,
  faCompactDisc,
  faClapperboard,
  faDashboard,
  faBook,
  faSignOut,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  closeIcon = faXmark;
  videosIcon = faClapperboard;
  albumsIcon = faCompactDisc;
  showsIcon = faCalendarAlt;
  dashboardIcon = faDashboard;
  infoIcon = faBook;
  signOutIcon = faSignOut;
  profileIcon = faUser;
  isDesktopDevice: boolean;
  sideNavIsOpen: boolean = false;

  constructor(private deviceService: DeviceDetectorService, private router: Router) {
    this.isDesktopDevice = this.deviceService.isDesktop();
  }

  onSideNavStateChanged(open: any): void {
    console.log('onChange event', open);
    this.sideNavIsOpen = open;
  }

  sectionClick(sidenav: any) {
    if (!this.isDesktopDevice) {
      sidenav.toggle()
    }
  }
}
