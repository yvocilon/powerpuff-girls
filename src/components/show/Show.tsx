import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectShow } from "../../store/reducers";
import styled from "styled-components";
import List from "../list/List";
import { fetchShow } from "../../store/actions";
import { selectEpisodes } from "../../store/episodesReducer";
import { Episode } from "../../types";
import TextImageHeader from "../text-image-header/TextImageHeader";
import Container from "../container/Container";

const Show = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const showId = parseInt(id as string, 10);

  const response = useSelector(selectShow(showId));
  const episodes = useSelector(selectEpisodes(showId));

  useEffect(() => {
    dispatch(fetchShow(showId));
  }, [showId]);

  if (!response || !episodes) {
    return <h1>Loading</h1>;
  }

  const { show } = response;

  return (
    <Container>
      <TextImageHeader
        name={show.name}
        summary={show.summary}
        image={show.image.original}
      />
      <List items={episodes.map(episodeToListItem(pathname))} />
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

function createEpisodeRoute(prefix: string, episode: Episode) {
  return `${prefix}/${episode.id}/${episode.name}`;
}

function episodeToListItem(currentPath: string) {
  return (episode: Episode) => ({
    id: episode.id,
    title: createEpisodeName(episode),
    description: episode.summary,
    route: createEpisodeRoute(currentPath, episode),
    icon: episode.image?.medium || ""
  });
}

export default Show;
