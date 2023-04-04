import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faXmark,
  faCalendarAlt,
  faBookBookmark,
  faEnvelope,
  faCompactDisc,
  faClapperboard,
  faDashboard
} from '@fortawesome/free-solid-svg-icons'
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {
  closeIcon = faXmark;
  bioIcon = faBookBookmark;
  videosIcon = faClapperboard;
  albumsIcon = faCompactDisc;
  showsIcon = faCalendarAlt;
  mailContactIcon = faEnvelope;
  dashboardIcon = faDashboard;
  isDesktopDevice: boolean;

  constructor(private deviceService: DeviceDetectorService, private router: Router) {
    this.isDesktopDevice = this.deviceService.isDesktop()
  }

  ngOnInit(): void {
    const isOnBackofficeMainUrl = this.router.url.split('/')
      .filter(item=> item !== '').length === 1;

    if (isOnBackofficeMainUrl) {
      this.router.navigate(['backoffice', 'dashboard']);
    }
  }

  sectionClick(sidenav: any) {
    if (!this.isDesktopDevice) {
      sidenav.toggle()
    }
  }
}
