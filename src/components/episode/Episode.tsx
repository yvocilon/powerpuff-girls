import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Container from "../container/Container";
import TextImageHeader from "../text-image-header/TextImageHeader";
import { selectEpisode, selectEpisodes } from "../../store/showsReducer";
import { fetchShow } from "../../store/actions";
import List from "../list/List";
import { episodeToListItem } from "../show/Show";

const Episode = () => {
  const { id, episodeId } = useParams();
  const showId = parseInt(id as string, 10);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const episodes = useSelector(selectEpisodes(showId));
  const episode = useSelector(
    selectEpisode(showId, parseInt(episodeId as string, 10))
  );

  useEffect(() => {
    if (!episode) {
      dispatch(fetchShow(showId));
    }
  }, [episode]);

  if (!episode) {
    return <h1>Loading</h1>;
  }

  return (
    <Container>
      <TextImageHeader
        name={episode.name}
        summary={episode.summary}
        image={episode.image.original}
      />
      {episodes && <List items={episodes.map(episodeToListItem(pathname))} />}
    </Container>
  );
};

export default Episode;
