import {
  ShowsActionTypes,
  FETCH_SHOWS,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOWS_FAILED
} from "./types";
import { RootState } from ".";
import { SearchResponses } from "../types";

interface State {
  fetching: boolean;
  error: boolean;
  items: SearchResponses;
}

const initialState: State = {
  fetching: false,
  error: false,
  items: []
};

export function showsReducer(state = initialState, action: ShowsActionTypes) {
  switch (action.type) {
    case FETCH_SHOWS: {
      return {
        fetching: true,
        error: false,
        items: []
      };
    }
    case FETCH_SHOWS_SUCCESS: {
      return {
        fetching: false,
        error: false,
        items: [...action.payload.shows]
      };
    }
    case FETCH_SHOWS_FAILED: {
      return {
        fetching: false,
        error: true,
        items: []
      };
    }
    default: {
      return state;
    }
  }
}

export const selectShows = (state: RootState): SearchResponses =>
  state.shows.items;
