import { Component, OnInit } from '@angular/core';
import { LiveEntry } from 'src/app/model/LiveEntry';
import { TicketLink } from 'src/app/model/TicketLink';

@Component({
  selector: 'app-shows-page',
  templateUrl: './shows-page.component.html',
  styleUrls: ['./shows-page.component.scss']
})
export class ShowsPageComponent implements OnInit {
  liveEntries: LiveEntry[] = [
    {
      date: new Date(),
      time: { hours: 22, minutes: 30 },
      city: "Madrid",
      concertHall: "Búho Real",
      ticketsLink: [
        {
          siteIcon: "assets/images/ticketea-icon.png",
          siteName: "Ticketea",
          siteLink: "https://ticketea.com"

        } as TicketLink,
        {
          siteIcon: "assets/images/eci.svg",
          siteName: "El corte inglés",
          siteLink: "https://elcorteingles.es"
        } as TicketLink,
      ]
    },
    {
      date: new Date(),
      time: { hours: 22, minutes: 30 },
      city: "Madrid",
      concertHall: "Búho Real",
      ticketsLink: [
        {
          siteIcon: "assets/images/ticketea-icon.png",
          siteName: "Ticketea",
          siteLink: "https://ticketea.com"

        } as TicketLink,
        {
          siteIcon: "assets/images/eci.svg",
          siteName: "El corte inglés",
          siteLink: "https://elcorteingles.es"
        } as TicketLink,
      ]
    },
    {
      date: new Date(),
      time: { hours: 22, minutes: 30 },
      city: "Madrid",
      concertHall: "Búho Real",
      ticketsLink: [
        {
          siteIcon: "assets/images/ticketea-icon.png",
          siteName: "Ticketea",
          siteLink: "https://ticketea.com"

        } as TicketLink,
        {
          siteIcon: "assets/images/eci.svg",
          siteName: "El corte inglés",
          siteLink: "https://elcorteingles.es"
        } as TicketLink,
      ]
    },
    {
      date: new Date(),
      time: { hours: 22, minutes: 30 },
      city: "Madrid",
      concertHall: "Búho Real",
      ticketsLink: [
        {
          siteIcon: "assets/images/ticketea-icon.png",
          siteName: "Ticketea",
          siteLink: "https://ticketea.com"

        } as TicketLink,
        {
          siteIcon: "assets/images/eci.svg",
          siteName: "El corte inglés",
          siteLink: "https://elcorteingles.es"
        } as TicketLink,
      ]
    },
    {
      date: new Date(),
      time: { hours: 22, minutes: 30 },
      city: "Madrid",
      concertHall: "Búho Real",
      ticketsLink: [
        {
          siteIcon: "assets/images/ticketea-icon.png",
          siteName: "Ticketea",
          siteLink: "https://ticketea.com"

        } as TicketLink,
        {
          siteIcon: "assets/images/eci.svg",
          siteName: "El corte inglés",
          siteLink: "https://elcorteingles.es"
        } as TicketLink,
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(index: number, item: any): number {
    return index;
  }

}
