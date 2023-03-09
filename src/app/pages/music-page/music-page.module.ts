import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MusicPageRoutingModule } from './music-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPageComponent } from './music-page.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { BandcampAlbumPlayerComponent } from './components/bandcamp-album-player/bandcamp-album-player.component';
import { SpotifyAlbumPlayerComponent } from './components/spotify-album-player/spotify-album-player.component';
import { BandDiscographyComponent } from './components/band-discography/band-discography.component';
import { SpotifyArtistPlayerComponent } from './components/spotify-artist-player/spotify-artist-player.component';


@NgModule({
  imports: [
    MusicPageRoutingModule,
    CommonModule,
    LayoutModule,
    FontAwesomeModule
  ],
  declarations: [MusicPageComponent, BandcampAlbumPlayerComponent, SpotifyAlbumPlayerComponent, BandDiscographyComponent, SpotifyArtistPlayerComponent]
})
export class MusicPageModule { }
