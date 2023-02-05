import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input()
  imageUrl!: string;
  @Input()
  sectionName!: string;
  @Input()
  isPanoramic = true;
}
