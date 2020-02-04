export type Shows = ReadonlyArray<Show>;

export type Episodes = ReadonlyArray<Episode>;

export interface Image {
  medium: string;
  original: string;
}

export interface Show {
  id: number;
  name: string;
  rating: {
    average: number;
  };
  summary: string;
  image: Image;
  score?: number;
  episodes?: Episodes;
}

export interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
  image: Image;
  summary: string;
}
