import {
  FETCH_SHOWS,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOW_SUCCESS,
  FETCH_SHOW
} from "./types";
import { Dispatch } from "redux";
import { SearchResponses } from "../types";

export const fetchShows = (searchTerm: string) => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: FETCH_SHOWS
  });

  const shows: SearchResponses = await fetch(
    `${process.env.REACT_APP_API}search/shows?q=${searchTerm}`
  ).then(res => res.json());

  dispatch({
    type: FETCH_SHOWS_SUCCESS,
    payload: {
      shows
    }
  });
};

export const fetchShow = (showId: number) => async (dispatch: Dispatch) => {
  dispatch({
    type: FETCH_SHOW
  });

  const show: SearchResponses = await fetch(
    `${process.env.REACT_APP_API}shows/${showId}?embed=episodes`
  ).then(res => res.json());

  dispatch({
    type: FETCH_SHOW_SUCCESS,
    payload: {
      show
    }
  });
};
