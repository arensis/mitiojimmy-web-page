import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-section-bio',
  templateUrl: './section-bio.component.html',
  styleUrls: ['./section-bio.component.scss']
})
export class SectionBioComponent {
  imageUrl: string = 'assets/images/trigomaduro.jpeg';
  sectionName: string = 'Biografía';

  constructor(private translate: TranslateService) {

  }
}
