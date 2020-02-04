import {
  ShowsActionTypes,
  FETCH_EPISODES,
  FETCH_EPISODES_SUCCESS,
  FETCH_EPISODES_FAILED
} from "./types";
import { RootState } from ".";
import { Episodes } from "../types";

interface State {
  fetching: boolean;
  error: boolean;
  items: {
    [key: number]: Episodes;
  };
}

const initialState: State = {
  fetching: false,
  error: false,
  items: []
};

export function episodesReducer(
  state = initialState,
  action: ShowsActionTypes
) {
  switch (action.type) {
    case FETCH_EPISODES: {
      return {
        fetching: true,
        error: false,
        items: {}
      };
    }
    case FETCH_EPISODES_SUCCESS: {
      return {
        fetching: false,
        error: false,
        items: { [action.payload.showId]: [...action.payload.episodes] }
      };
    }
    case FETCH_EPISODES_FAILED: {
      return {
        fetching: false,
        error: true,
        items: {}
      };
    }
    default: {
      return state;
    }
  }
}

export const selectEpisodes = (showId: number) => (
  state: RootState
): Episodes => state.episodes.items[showId];
