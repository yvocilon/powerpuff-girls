import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectShow } from "../../store/reducers";
import styled from "styled-components";
import Title from "../title/Title";
import List from "../list/List";
import { fetchShow } from "../../store/actions";
import { selectEpisodes } from "../../store/episodesReducer";
import { Episode } from "../../types";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 0;
`;

const Description = styled.div``;

const Image = styled.img`
  width: 440px;
  height: 500px;

  @media (max-width: 768px) {
    width: 220px;
    height: 225px;
  }
`;

const TextContainer = styled.div``;

const TextImageContainer = styled.div`
  display: flex;
`;
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
      <TextImageContainer>
        <TextContainer>
          <Title>{show.name}</Title>
          <Description dangerouslySetInnerHTML={{ __html: show.summary }} />
        </TextContainer>
        <Image width={440} height={500} src={show.image.original} />
      </TextImageContainer>
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
  return `${prefix}/episodes/${episode.id}/${episode.name}`;
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
