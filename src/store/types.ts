import { Shows, SearchResponses } from "../types";

export const FETCH_SHOWS = "FETCH_SHOWS";
export const FETCH_SHOWS_SUCCESS = "FETCH_SHOWS_SUCCESS";
export const FETCH_SHOWS_FAILED = "FETCH_SHOWS_FAILED";

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

export type ShowsActionTypes =
  | FetchShowsAction
  | FetchShowsSuccessAction
  | FetchShowsFailedAction;
