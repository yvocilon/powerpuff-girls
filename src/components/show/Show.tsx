import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectShow, selectEpisodes } from "../../store/showsReducer";
import List from "../list/List";
import { fetchShow } from "../../store/actions";
import { Episode } from "../../types/types";
import TextImageHeader from "../text-image-header/TextImageHeader";
import Container from "../container/Container";
import { Show as ShowType } from "../../types/types";
import { createShowRoute } from "../shows/Shows";

const Show = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const showId = parseInt(id as string, 10);

  const show = useSelector(selectShow(showId));
  const episodes = useSelector(selectEpisodes(showId));

  useEffect(() => {
    dispatch(fetchShow(showId));
  }, [showId, dispatch]);

  if (!show || !episodes) {
    return <h1>Loading</h1>;
  }

  return (
    <Container>
      <TextImageHeader
        name={show.name}
        summary={show.summary}
        image={show.image.original}
      />
      <List items={episodes.map(episodeToListItem(show))} />
    </Container>
  );
};

export function createEpisodeName(episode: Episode) {
  return `s${episode.season
    .toString()
    .padStart(2, "0")}e${episode.number.toString().padStart(2, "0")} - ${
    episode.name
  }`;
}

function createEpisodeRoute(prefix: string, episode: Episode) {
  return `${prefix}/${episode.id}/${episode.name}`;
}

export function episodeToListItem(show: ShowType) {
  return (episode: Episode) => ({
    id: episode.id,
    title: createEpisodeName(episode),
    description: episode.summary,
    route: createEpisodeRoute(createShowRoute(show), episode),
    icon: episode.image?.medium || ""
  });
}

export default Show;
