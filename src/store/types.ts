import { Show } from "../types/types";
import { Shows } from "../types/types";

export const FETCH_SHOWS = "FETCH_SHOWS";
export const FETCH_SHOWS_SUCCESS = "FETCH_SHOWS_SUCCESS";
export const FETCH_SHOWS_FAILED = "FETCH_SHOWS_FAILED";

export const FETCH_SHOW = "FETCH_SHOW";
export const FETCH_SHOW_SUCCESS = "FETCH_SHOW_SUCCESS";
export const FETCH_SHOW_FAILED = "FETCH_SHOW_FAILED";

interface FetchShowsAction {
  type: typeof FETCH_SHOWS;
  payload: {
    searchTerm: string;
  };
}

interface FetchShowsSuccessAction {
  type: typeof FETCH_SHOWS_SUCCESS;
  payload: {
    shows: Shows;
  };
}

interface FetchShowsFailedAction {
  type: typeof FETCH_SHOWS_FAILED;
}

interface FetchShowAction {
  type: typeof FETCH_SHOW;
  payload: {
    showId: number;
  };
}

interface FetchShowSuccessAction {
  type: typeof FETCH_SHOW_SUCCESS;
  payload: {
    show: Show;
  };
}

interface FetchShowFailedAction {
  type: typeof FETCH_SHOW_FAILED;
}

export type ShowsActionTypes =
  | FetchShowsAction
  | FetchShowsSuccessAction
  | FetchShowsFailedAction
  | FetchShowAction
  | FetchShowSuccessAction
  | FetchShowFailedAction;
