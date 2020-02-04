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
`;

const TextContainer = styled.div`
  display: flex;
  border: 1px solid black;
  align-items: column;
`;

const Icon = styled.img``;

const Title = styled.span``;
const Description = styled.span``;

const ListItem = ({ title, description, icon, id }: ListItem) => {
  return (
    <Container>
      <Icon src={icon} />
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
    </Container>
  );
};

export default ListItem;
