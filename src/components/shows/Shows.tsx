import React, { useState } from "react";
import styled from "styled-components";
import Title from "../title/Title";
import List from "../list/List";
import { useDispatch, useSelector } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import { selectShows, selectSearchTerm } from "../../store/showsReducer";
import { fetchShows } from "../../store/actions";
import { Show } from "../../types/types";
import ListItem from "../list/ListItem";

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

const Shows = () => {
  const dispatch = useDispatch();
  const shows = useSelector(selectShows);
  const searchTerm = useSelector(selectSearchTerm);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchShows(event.target.value));
  };

  return (
    <Wrapper>
      <Title>Shows</Title>
      <Input
        value={searchTerm}
        minLength={2}
        debounceTimeout={300}
        onChange={onChange}
      />
      <List
        items={shows
          .slice()
          .sort(sortByScore)
          .map(showToListItem)}
      />
    </Wrapper>
  );
};

function createShowRoute(show: Show) {
  return `/shows/${encodeURIComponent(show.id)}/${encodeURIComponent(
    show.name
  )}`;
}

function sortByScore(prev: Show, next: Show) {
  return prev.score > next.score ? -1 : 1;
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
