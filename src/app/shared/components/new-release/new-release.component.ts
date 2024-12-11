import { DataService } from 'src/app/shared/services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import moment from 'moment';
import 'moment/locale/es';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ReleasesService } from '../../services/releases.service';
import { Release } from 'src/app/model/release/Release';

@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styleUrls: ['./new-release.component.scss']
})
export class NewReleaseComponent implements OnInit, OnDestroy {
  spotifyIcon = faSpotify;

  constructor(
    private releasesService: ReleasesService,
    private dataService: DataService,
    private translate: TranslateService
  ) {}

  release: Release | undefined;
  releaseIsPublished!: boolean;
  releaseHasPurchasedCDLink!: boolean;
  languageSubscription!: Subscription;
  monthName!: string;

  ngOnInit(): void {
    this.initData(this.translate.currentLang);
    this.languageSubscription = this.translate.onLangChange.subscribe(language => {
      this.updateDateTranslations(language.lang);
    });
  }

  ngOnDestroy(): void {
    if(this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  initData(language: string): void {
    this.dataService.getReleasesData().subscribe(releases => {
      this.release = this.releasesService.findLatestRelease(releases);
      this.releaseIsPublished = moment(this.release.date).isBefore(moment());
      this.releaseHasPurchasedCDLink = (this.release.purchaseCDLink || '').length > 0;
      this.updateDateTranslations(language);
    });
  }

  private updateDateTranslations(lang: string): void {
    if (this.release) {
      const releaseDate = moment(this.release.date)
      releaseDate.locale(lang);
      this.monthName = releaseDate.format('MMMM').toUpperCase();
    }
  }
}
