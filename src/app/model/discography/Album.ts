import { AlbumType } from "../release/AlbumType";
import { StreamingServiceType } from "./StreamingServiceType";

export interface Album {
  releaseDate: string;
  imageUrl: string;
  id: string;
  artistPlaylist: boolean;
  isTrack: boolean;
  streamingService: StreamingServiceType;
  albumName: string;
  albumType: AlbumType;
  presaveLink: string;
}
