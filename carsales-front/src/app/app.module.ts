import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodeListComponent } from './episode/episode-list/episode-list.component';
import { EpisodeDetailComponent } from './episode/episode-detail/episode-detail.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';

import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './character/character/character.component';
import { LocationListComponent } from './location/location-list/location-list.component';
import { LocationDetailComponent } from './location/location-detail/location-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeListComponent,
    EpisodeDetailComponent,
    SidebarComponent,
    MainComponent,
    CharacterComponent,
    LocationListComponent,
    LocationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
