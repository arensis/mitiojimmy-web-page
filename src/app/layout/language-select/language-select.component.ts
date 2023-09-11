import { I18nService } from './../../shared/services/i18n.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent implements OnInit {
  selectedLanguage: string = '';

  constructor(private translateService: TranslateService, private i18nService: I18nService) { }

  ngOnInit() {
    // this.selectedLanguage = localStorage.getItem('lang') || this.i18nService.language;
    this.selectedLanguage = this.i18nService.language.split('-').includes('es') ? 'es' : 'en';
  }

  valueChange(selectedLanguage: string) {
    this.selectedLanguage = selectedLanguage;
    // localStorage.setItem('lang', selectedLanguage);
    document.documentElement.setAttribute("lang", selectedLanguage);
    this.translateService.use(selectedLanguage);
  }
}
