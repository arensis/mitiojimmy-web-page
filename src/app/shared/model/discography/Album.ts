import { AlbumType } from "../release/AlbumType";
import { StreamingServiceType } from "./StreamingServiceType";

export interface Album {
  releaseDate: string;
  imageUrl: string;
  id: string;
  streamingService: StreamingServiceType;
  albumName: string;
  albumType: AlbumType;
}
