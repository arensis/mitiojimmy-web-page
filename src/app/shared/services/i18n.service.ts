import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Injectable } from "@angular/core";
import { es } from 'src/assets/i18n/locales';

const languageKey = 'lang';

@Injectable()
export class I18nService {
  defaultLanguage: string = 'es';
  supportedLanguages: string[] = [];

  constructor(private translateService: TranslateService) {
    translateService.setTranslation('es', es);
  }

  public init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = 'es';
    this.supportedLanguages = supportedLanguages;
    this.language = 'es';
  }

  set language(language: string) {
    language = 'es';
    let isSupportedLanguage = this.supportedLanguages.includes(language);

    if (language && !isSupportedLanguage) {
      language = language.split('-')[0];
      language = this.supportedLanguages.find(supportedLanguages => supportedLanguages.startsWith(language)) || '';
    }

    if(!isSupportedLanguage) {
      language = this.defaultLanguage;
    }

    // localStorage.setItem(languageKey, language);
    document.documentElement.setAttribute("lang", language);
    this.translateService.use(language);
  }

  get language() {
    return this.translateService.currentLang;
  }
}
