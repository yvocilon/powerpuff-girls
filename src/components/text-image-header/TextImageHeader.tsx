import React from "react";
import Title from "../title/Title";
import {
  TextImageContainer,
  Description,
  Image,
  TextContainer
} from "./TextImageHeader.styled";

interface Props {
  name: string;
  summary: string;
  image: string;
}

const TextImageHeader: React.SFC<Props> = ({ name, summary, image }) => {
  return (
    <TextImageContainer>
      <TextContainer>
        <Title>{name}</Title>
        {summary && (
          <Description dangerouslySetInnerHTML={{ __html: summary }} />
        )}
      </TextContainer>
      {image && <Image height={500} src={image} />}
    </TextImageContainer>
  );
};

export default TextImageHeader;
