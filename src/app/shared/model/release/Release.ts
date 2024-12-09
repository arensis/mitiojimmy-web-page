import { AlbumType } from "./AlbumType";

export interface Release {
  albumType: AlbumType;
  cover: string;
  presaveLink: string;
  date: Date;
  recordName: string;
  purchaseCDLink: string;
}
