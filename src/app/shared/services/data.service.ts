import { LiveEntry } from './../model/shows/LiveEntry';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class DataService {
  showsDataFileUrl: string;

  constructor(private httpClient: HttpClient) {
    this.showsDataFileUrl =  environment.showsDataUrl;
  }

  public getShowsData(): Observable<LiveEntry[]> {
    const path = this.showsDataFileUrl;
    return this.httpClient.get<any>(path)
        .pipe(map((result) => result.slice().sort((a: LiveEntry, b: LiveEntry) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        })));
  }

  public getDiscographyData(): Observable<any[]> {
    const path = "assets/data/discography-data.json";

    return this.httpClient.get<any>(path)
        .pipe(map((result) => result));
  }

  public getVideosData(): Observable<any[]> {
    const path = "assets/data/videos-data.json";

    return this.httpClient.get<any>(path)
        .pipe(map((result) => result));
  }
}
