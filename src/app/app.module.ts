import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SpotifyService } from './services/spotify.service';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

const appRoutes: Routes = [
  { path: '', component:  SearchComponent },
  { path: 'about', component:  AboutComponent },
  { path: 'artist/:id', component:  ArtistComponent },
  { path: 'album/:id', component:  AlbumComponent }
]

@NgModule({
  declarations: [ 
    AppComponent, 
    SearchComponent,
    NavbarComponent,
    AboutComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SpotifyService],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }
