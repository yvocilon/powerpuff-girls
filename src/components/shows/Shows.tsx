import React, { useEffect } from "react";
import styled from "styled-components";
import Title from "../title/Title";
import List from "../list/List";
import { useDispatch, useSelector } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import { selectShows, selectSearchTerm } from "../../store/showsReducer";
import { fetchShows } from "../../store/actions";
import { Show } from "../../types/types";
import ListItem from "../list/ListItem";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
`;

const Input = styled(DebounceInput)`
  font-size: 20px;
  width: 100%;
  margin: 10px 0;
`;

const suggestions = [
  "Powerpuff Girls",
  "Psych",
  "The Walking Dead",
  "The Witcher"
];

const Suggestion = styled.button`
  background-color: lightblue;
  border: none;
  font-size: 18px;
  padding: 10px;
  border-radius: 15px;
  margin: 5px 15px 5px 0;
  display: inline-block;
  cursor: pointer;
`;

const Shows = () => {
  const history = useHistory();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const shows = useSelector(selectShows);
  const searchTerm = useSelector(selectSearchTerm);

  const fetch = (search: string) => {
    dispatch(fetchShows(search));
    history.push({
      search: "?q=" + search
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
      dispatch(fetchShows(q as string));
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
        <Suggestion onClick={suggest(suggestion)}>{suggestion}</Suggestion>
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
  return `/shows/${encodeURIComponent(show.id)}/${encodeURIComponent(
    show.name
  )}`;
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
