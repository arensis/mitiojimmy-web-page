import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { LiveEntry } from "src/app/model/shows/LiveEntry";

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  public getShowsData(): Observable<LiveEntry[]> {
    const path = "assets/data/shows-data.json";
    return this.httpClient.get<any>(path)
        .pipe(map((result) => result));
  }

  public getShowsExampleData(): Observable<any[]> {
    const path = "assets/data/shows-data-example.json";

    return this.httpClient.get<any>(path)
        .pipe(map((result) => result));
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

  public getReleasesData(): Observable<any[]> {
    const path = "assets/data/releases-data.json"

    return this.httpClient.get<any>(path)
      .pipe(map((result) => result));
  }
}
