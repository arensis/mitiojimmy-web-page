import { Component, OnInit } from '@angular/core';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.scss']
})
export class MusicPageComponent implements OnInit {

  musicNote = faMusic;

  constructor() { }

  ngOnInit() {
  }

}
