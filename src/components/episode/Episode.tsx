import React from "react";
import { useParams } from "react-router-dom";

const Episode = () => {
  const { episode } = useParams();
  return <h1>{episode}</h1>;
};

export default Episode;
