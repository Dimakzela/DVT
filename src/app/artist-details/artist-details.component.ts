import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArtistService} from "../service/artist.service";
import {Track} from "../model/track";

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  loading = true;
  id: string | null;
  topTracks: Track[] = [];

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>  this.id = params.get('id'));
     this.artistService.getTopTrackList(this.id, 5).subscribe( track => this.topTracks = track.data)
  }

}
