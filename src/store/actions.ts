import { FETCH_SHOWS, FETCH_SHOWS_SUCCESS } from "./types";
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
