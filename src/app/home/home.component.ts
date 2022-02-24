import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ArtistService} from "../service/artist.service";
import {SearchKeywordPublisher} from "../service/searchKeywordPublisher";
import {Artist} from "../model/artist";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public artists: Artist[] = [];

  constructor(private router: Router,
              private artistService: ArtistService,
              private searchKeywordPublisher: SearchKeywordPublisher) { }

  ngOnInit(): void {
    this.searchKeywordPublisher.getKeyword().subscribe(key => {
      if(key) {
        this.artistService.searchArtists(key).subscribe((a) => this.artists = a.data);
      }
    });
  }

  navigate($event: Artist) {
    this.router.navigate(['artists', $event?.id])
  }
}
