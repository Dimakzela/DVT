import {Component, Input, OnInit} from '@angular/core';
import {Track} from "../../model/track";

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  @Input() tracks: Track[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
