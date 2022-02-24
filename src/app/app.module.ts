import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistCardComponent,
    AlbumCardComponent,
    TrackListComponent,
    HomeComponent,
    ArtistDetailsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatIconModule,
      RouterTestingModule,
      HttpClientModule,
        MatProgressSpinnerModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
