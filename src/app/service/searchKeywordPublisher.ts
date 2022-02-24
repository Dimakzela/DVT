import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class SearchKeywordPublisher {
  private _keyword: string;
  private _keywordSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setKeyword(keyword: string): void {
    this._keyword = keyword;
    this._keywordSubject.next(keyword);
  }

  getKeyword(): Observable<string> {
    return this._keywordSubject.asObservable();
  }
}
