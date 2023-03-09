import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input()
  sectionName!: string;

  imageUrl!: string;

  constructor() {
    this.imageUrl = 'assets/images/home-bg.jpg';
  }
}
