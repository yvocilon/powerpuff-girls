import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectShow } from "../../store/reducers";
import styled from "styled-components";
import Title from "../title/Title";
import List from "../list/List";
import { fetchEpisodes } from "../../store/actions";
import { selectEpisodes } from "../../store/episodesReducer";
import ListItem from "../list/ListItem";
import { Episode } from "../../types";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 0;
`;

const Description = styled.div``;

const Show = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const showId = parseInt(id as string, 10);

  const response = useSelector(selectShow(showId));
  const episodes = useSelector(selectEpisodes(showId));

  useEffect(() => {
    dispatch(fetchEpisodes(showId));
  }, [showId]);

  // response will be empty when you access show url directly
  // because they are being fetched in the /shows
  // should check if fetched, otherwise fetch here (again);
  if (!episodes || !response) {
    return <h1>Loading</h1>;
  }

  const { show } = response;

  return (
    <Container>
      <Title>{show.name}</Title>
      <Description dangerouslySetInnerHTML={{ __html: show.summary }} />
      <List items={episodes.map(episodeToListItem)} />
    </Container>
  );
};

function createEpisodeName(episode: Episode) {
  return `s${episode.season
    .toString()
    .padStart(2, "0")}e${episode.number.toString().padStart(2, "0")} - ${
    episode.name
  }`;
}

function episodeToListItem(episode: Episode): ListItem {
  return {
    id: episode.id,
    title: createEpisodeName(episode),
    description: episode.summary,
    route: "",
    icon: episode.image?.medium || ""
  };
}

export default Show;
