import React from "react";
import { useParams } from "react-router-dom";

const Show = () => {
  const { id, name } = useParams();
  return (
    <h1>
      {id} - {name}
    </h1>
  );
};

export default Show;
