import React from "react";
import styled from "styled-components";

interface ListItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const Container = styled.div`
  display: flex;
  height: 147.5px;
  border: 1px solid gray;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Icon = styled.img`
  min-width: 105px;
  max-width: 105px;
  object-fit: cover;
  border-right: 1px solid gray;
`;

const NoImage = styled.div`
  background-color: gray;
  min-width: 105px;
  max-width: 105px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled.span``;

const ListItem = ({ title, description, icon, id }: ListItem) => {
  return (
    <Container>
      {icon ? <Icon width={150} height="100%" src={icon} /> : <NoImage />}
      <TextContainer>
        <Title>{title}</Title>
        <Description
          dangerouslySetInnerHTML={{ __html: description }}
        ></Description>
      </TextContainer>
    </Container>
  );
};

export default ListItem;
