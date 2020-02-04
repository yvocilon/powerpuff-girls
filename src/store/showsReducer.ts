import {
  ShowsActionTypes,
  FETCH_SHOWS,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOWS_FAILED,
  FETCH_SHOW_SUCCESS
} from "./types";
import { RootState } from ".";
import { Shows, Show } from "../types/types";

interface State {
  fetching: boolean;
  error: boolean;
  items: Shows;
  searchTerm: string;
}

const initialState: State = {
  fetching: false,
  error: false,
  searchTerm: "",
  items: []
};

export function showsReducer(state = initialState, action: ShowsActionTypes) {
  switch (action.type) {
    case FETCH_SHOWS: {
      return {
        ...state,
        fetching: true,
        error: false,
        items: [],
        searchTerm: action.payload.searchTerm
      };
    }
    case FETCH_SHOWS_SUCCESS: {
      return {
        ...state,
        fetching: false,
        error: false,
        items: [...action.payload.shows]
      };
    }
    case FETCH_SHOWS_FAILED: {
      return {
        ...state,
        fetching: false,
        error: true,
        items: []
      };
    }
    case FETCH_SHOW_SUCCESS: {
      const exists = state.items.find(
        item => item.id === action.payload.show.id
      );

      // show is already in state
      if (exists) {
        return {
          ...state,
          error: false,
          fetching: false,
          items: [
            ...state.items.map(item =>
              item.id === action.payload.show.id
                ? { ...item, ...action.payload.show }
                : item
            )
          ]
        };
      }

      // show is not in state => probably because of full reload of the page.
      return {
        ...state,
        error: false,
        fetching: false,
        items: [...state.items, { ...action.payload.show }]
      };
    }
    default: {
      return state;
    }
  }
}

export const selectSearchTerm = (state: RootState): string =>
  state.shows.searchTerm;

export const selectShows = (state: RootState): Shows => state.shows.items;

export const selectShow = (id: number) => (
  state: RootState
): Show | undefined => state.shows.items.find(item => item.id === id);

export const selectEpisodes = (showId: number) => (state: RootState) =>
  selectShow(showId)(state)?.episodes;

export const selectEpisode = (showId: number, episodeId: number) => (
  state: RootState
) => selectEpisodes(showId)(state)?.find(episode => episode.id === episodeId);
