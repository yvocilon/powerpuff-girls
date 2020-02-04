import {
  FETCH_SHOWS,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOW_SUCCESS,
  FETCH_SHOW
} from "./types";
import { Dispatch } from "redux";
import { Show } from "../types/types";
import { Shows } from "../types/types";
import { ShowScoreResponse, ShowResponse } from "../types/responseTypes";

export const fetchShows = (searchTerm: string) => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: FETCH_SHOWS,
    payload: { searchTerm }
  });

  const shows: Shows = await fetch(
    `${process.env.REACT_APP_API}search/shows?q=${searchTerm}`
  )
    .then(res => res.json())
    .then(res => res.map(mapResponseToShow));

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

  const show: Show = await fetch(
    `${process.env.REACT_APP_API}shows/${showId}?embed=episodes`
  )
    .then(res => res.json())
    .then(res => mapShowResponseToShow(res));

  dispatch({
    type: FETCH_SHOW_SUCCESS,
    payload: {
      show
    }
  });
};

function mapShowResponseToShow(response: ShowResponse): Show {
  return {
    ...response,
    episodes: response._embedded?.episodes
  };
}

function mapResponseToShow(response: ShowScoreResponse): Show {
  return {
    ...response.show,
    score: response.score,
    episodes: response.show?._embedded?.episodes
  };
}
