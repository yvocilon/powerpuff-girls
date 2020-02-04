export type SearchResponses = SearchResponse[];

export type Shows = ReadonlyArray<Show>;

export interface Show {
  id: number;
  name: string;
  rating: {
    average: number;
  };
  summary: string;
  image: {
    medium: string;
    original: string;
  };
}

export interface SearchResponse {
  score: number;
  show: Show;
}
