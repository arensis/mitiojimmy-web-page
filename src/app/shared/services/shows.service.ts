import { Injectable } from "@angular/core";
import { LiveEntry } from "src/app/model/shows/LiveEntry";

@Injectable()
export class ShowsService {
  groupByYearsAndMonths(shows: LiveEntry[]) {
    const groupedByYears: any = {};
    shows.forEach(liveEntry => {
      const year = new Date(liveEntry.date).getFullYear().toString();
      const month = new Date(liveEntry.date).getMonth().toString();

      if (!groupedByYears[year]) {
        groupedByYears[year] = [];
      }

      if (!groupedByYears[year][month]) {
        groupedByYears[year][month] = []
      }

      if (!groupedByYears[year]["months"]) {
        groupedByYears[year]["months"] = []
      }

      if (!groupedByYears[year]["year"]) {
        groupedByYears[year]["year"] = year;
      }

      if (!groupedByYears[year]["months"].includes(month)) {
        groupedByYears[year]["months"].push(month);
      }
      groupedByYears[year][month].push(liveEntry);
    });

    return groupedByYears;
  }
}
