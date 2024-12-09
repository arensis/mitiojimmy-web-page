import { LiveEntry } from './../model/shows/LiveEntry';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class DataService {
  showsDataFileUrl: string;
  discographyDataUrl: string;
  videosDataUrl: string;
  releasesDataUrl: string;

  constructor(private httpClient: HttpClient) {
    this.showsDataFileUrl =  environment.showsDataUrl;
    this.discographyDataUrl =  environment.discographyDataUrl;
    this.videosDataUrl =  environment.videosDataUrl;
    this.releasesDataUrl =  environment.releasesDataUrl;
  }

  public getShowsData(): Observable<LiveEntry[]> {
    return this.httpClient.get<any>(this.showsDataFileUrl).pipe(map((result) => result));
  }

  public getDiscographyData(): Observable<any[]> {
    return this.httpClient.get<any>(this.discographyDataUrl).pipe(map((result) => result));
  }

  public getVideosData(): Observable<any[]> {
    return this.httpClient.get<any>(this.videosDataUrl).pipe(map((result) => result));
  }

  public getReleasesData(): Observable<any[]> {
    return this.httpClient.get<any>(this.releasesDataUrl).pipe(map((result) => result));
  }
}
