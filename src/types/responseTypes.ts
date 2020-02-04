import { Episodes, Image } from "./types";

export interface ShowResponse {
  id: number;
  name: string;
  rating: {
    average: number;
  };
  summary: string;
  image: Image;
  _embedded?: {
    episodes: Episodes;
  };
}

export interface ShowScoreResponse {
  score: number;
  show: ShowResponse;
}

export type SearchResponse = ShowScoreResponse[];
