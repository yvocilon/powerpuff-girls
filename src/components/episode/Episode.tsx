import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Container from "../container/Container";
import TextImageHeader from "../text-image-header/TextImageHeader";
import { selectEpisode } from "../../store/showsReducer";
import { fetchShow } from "../../store/actions";

const Episode = () => {
  const { id, episodeId } = useParams();
  const showId = parseInt(id as string, 10);
  const dispatch = useDispatch();

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
    </Container>
  );
};

export default Episode;
