import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from './shared/services/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private i18nService: I18nService, private translate: TranslateService) {
    this.i18nService.init('es', ['es', 'en']);
  }
}
