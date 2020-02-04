import React, { useState } from "react";
import styled from "styled-components";
import Title from "../title/Title";
import List from "../list/List";
import { useDispatch, useSelector } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import { selectShows } from "../../store/reducers";
import { fetchShows } from "../../store/actions";
import { Show, SearchResponse } from "../../types";
import ListItem from "../list/ListItem";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
`;

const Input = styled(DebounceInput)`
  font-size: 20px;
`;

const Shows = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchterm] = useState("");
  const shows = useSelector(selectShows);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchterm(event.target.value);
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

function sortByScore(prev: SearchResponse, next: SearchResponse) {
  return prev.score > next.score ? -1 : 1;
}

function showToListItem(searchResponse: SearchResponse): ListItem {
  return {
    id: searchResponse.show.id,
    title: searchResponse.show.name,
    description: searchResponse.show.summary,
    icon: searchResponse.show.image?.medium || ""
  };
}

export default Shows;
