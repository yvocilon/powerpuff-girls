import React from "react";
import styled from "styled-components";
import Title from "../title/Title";

const TextContainer = styled.div``;

const TextImageContainer = styled.div`
  display: flex;
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
      {image && <Image width={440} height={500} src={image} />}
    </TextImageContainer>
  );
};

export default TextImageHeader;
