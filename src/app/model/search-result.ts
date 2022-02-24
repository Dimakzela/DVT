import {Artist} from "./artist";

export interface SearchResult {
  data: Artist[];
  total: number;
  nex: string;
}


