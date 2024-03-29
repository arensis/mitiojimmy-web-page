import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Injectable } from "@angular/core";
import { es, en } from 'src/assets/i18n/locales';

const languageKey = 'lang';

@Injectable()
export class I18nService {
  defaultLanguage: string = '';
  supportedLanguages: string[] = [];

  constructor(private translateService: TranslateService) {
    translateService.setTranslation('es', es);
    translateService.setTranslation('en', en);
  }

  public init(defaultLanguage: string, supportedLanguages: string[]) {
    // this.defaultLanguage = defaultLanguage;
    this.defaultLanguage = navigator.language;
    this.supportedLanguages = supportedLanguages;
    this.language = navigator.language;

    // this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
    //   localStorage.setItem(languageKey, event.lang)
    // });
  }

  set language(language: string) {
    // language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang() || '';
    language = language || this.translateService.getBrowserCultureLang() || '';
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
