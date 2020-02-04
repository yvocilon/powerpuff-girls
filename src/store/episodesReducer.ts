import {
  ShowsActionTypes,
  FETCH_SHOW,
  FETCH_SHOW_SUCCESS,
  FETCH_SHOW_FAILED
} from "./types";
import { RootState } from ".";
import { Episodes, Episode } from "../types";

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
    case FETCH_SHOW: {
      return {
        fetching: true,
        error: false,
        items: {}
      };
    }
    case FETCH_SHOW_SUCCESS: {
      return {
        fetching: false,
        error: false,
        items: {
          [action.payload.show.id]: [...action.payload.show._embedded.episodes]
        }
      };
    }
    case FETCH_SHOW_FAILED: {
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

export const selectEpisode = (showId: number, episodeId: number) => (
  state: RootState
): Episode | undefined =>
  selectEpisodes(showId)(state).find(episode => episode.id === episodeId);
