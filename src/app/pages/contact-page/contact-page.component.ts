import { Component, OnDestroy, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AbstractPage } from '../abstract-page';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent extends AbstractPage implements OnInit, OnDestroy {
  mailIcon = faEnvelope;

  ngOnInit(): void {
    this.updateMetaData();
  }

  ngOnDestroy(): void {
    this.unsubscribeLanguageSubscription();
  }
}
