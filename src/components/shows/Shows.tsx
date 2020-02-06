import React, { useEffect } from "react";
import Title from "../title/Title";
import List from "../list/List";
import { useDispatch, useSelector } from "react-redux";
import { selectShows, selectSearchTerm } from "../../store/showsReducer";
import { fetchShows } from "../../store/actions";
import { Show } from "../../types/types";
import ListItem from "../list/ListItem";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { Wrapper, Input, Suggestion } from "./Shows.styled";
import slugify from "slugify";

export const suggestions = [
  "Powerpuff Girls",
  "Psych",
  "The Walking Dead",
  "The Witcher"
];

const Shows = () => {
  const history = useHistory();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const shows = useSelector(selectShows);
  const searchTerm = useSelector(selectSearchTerm);

  const fetch = (search: string) => {
    dispatch(fetchShows(search));
    history.push({
      search: "?q=" + encodeURIComponent(search)
    });
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    fetch(event.target.value);
  };

  const suggest = (suggestion: string) => () => {
    fetch(suggestion);
  };

  useEffect(() => {
    const { q } = queryString.parse(search);

    if (q) {
      dispatch(fetchShows(decodeURIComponent(q as string)));
    }
  }, []);

  return (
    <Wrapper>
      <Title>Shows</Title>
      <Input
        value={searchTerm}
        minLength={2}
        debounceTimeout={300}
        onChange={onChange}
      />
      <span>Suggestions: </span>
      {suggestions.map(suggestion => (
        <Suggestion key={suggestion} onClick={suggest(suggestion)}>
          {suggestion}
        </Suggestion>
      ))}
      <List
        items={shows
          .slice()
          .sort(sortByScore)
          .map(showToListItem)}
      />
    </Wrapper>
  );
};

export function createShowRoute(show: Show) {
  return `/shows/${show.id}/${slugify(show.name)}`;
}

function sortByScore(prev: Show, next: Show) {
  return (prev.score || 0) > (next.score || 0) ? -1 : 1;
}

function showToListItem(show: Show): ListItem {
  return {
    id: show.id,
    title: show.name,
    description: show.summary,
    icon: show.image?.medium || "",
    route: createShowRoute(show)
  };
}

export default Shows;
