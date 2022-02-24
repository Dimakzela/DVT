import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {SearchKeywordPublisher} from "../../service/searchKeywordPublisher";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchKeyword = new FormControl();

  constructor(private searchKeywordPublisher: SearchKeywordPublisher) { }

  ngOnInit(): void {
  }

  publishKeyword(keyword: string): void {
    this.searchKeywordPublisher.setKeyword(keyword);
  }

}
