import React from "react";
import { useParams } from "react-router-dom";

const Show = () => {
  const { show } = useParams();
  return <h1>{show}</h1>;
};

export default Show;
