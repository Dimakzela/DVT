import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Artist} from "../../model/artist";

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  @Input() artist: Artist;
  @Output() clickEmitter = new EventEmitter<Artist>();
  loading = true;

  constructor() { }

  ngOnInit(): void {
  }

}
