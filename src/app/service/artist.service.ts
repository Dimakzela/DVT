import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SearchResult} from "../model/search-result";
import {TrackListResult} from "../model/track-list-result";

@Injectable({providedIn: "root"})
export class ArtistService {
  private baseURL = environment.apiHost;

  constructor(private httpClient: HttpClient) {}

  searchArtists(keyword: string): Observable<SearchResult> {
    return this.httpClient.get<SearchResult>(this.baseURL + `search/artist?q=${keyword}`);
  }

  getTopTrackList(id: string, limit: number): Observable<TrackListResult> {
    return this.httpClient.get<TrackListResult>(this.baseURL + `artist/${id}/top?limit=${limit}`);
  }
}
