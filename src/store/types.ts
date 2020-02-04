import { SearchResponses, Episodes } from "../types";

export const FETCH_SHOWS = "FETCH_SHOWS";
export const FETCH_SHOWS_SUCCESS = "FETCH_SHOWS_SUCCESS";
export const FETCH_SHOWS_FAILED = "FETCH_SHOWS_FAILED";

export const FETCH_EPISODES = "FETCH_EPISODES";
export const FETCH_EPISODES_SUCCESS = "FETCH_EPISODES_SUCCESS";
export const FETCH_EPISODES_FAILED = "FETCH_EPISODES_FAILED";

interface FetchShowsAction {
  type: typeof FETCH_SHOWS;
  payload: {
    searchTerm: string;
  };
}

interface FetchShowsSuccessAction {
  type: typeof FETCH_SHOWS_SUCCESS;
  payload: {
    shows: SearchResponses;
  };
}

interface FetchShowsFailedAction {
  type: typeof FETCH_SHOWS_FAILED;
}

interface FetchEpisodesAction {
  type: typeof FETCH_EPISODES;
  payload: {
    showId: number;
  };
}

interface FetchEpisodesSuccessAction {
  type: typeof FETCH_EPISODES_SUCCESS;
  payload: {
    episodes: Episodes;
    showId: number;
  };
}

interface FetchEpisodesFailedAction {
  type: typeof FETCH_EPISODES_FAILED;
}

export type ShowsActionTypes =
  | FetchShowsAction
  | FetchShowsSuccessAction
  | FetchShowsFailedAction
  | FetchEpisodesAction
  | FetchEpisodesSuccessAction
  | FetchEpisodesFailedAction;
