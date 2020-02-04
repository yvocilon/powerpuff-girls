import React from "react";
import {
  StyledLink,
  Container,
  Icon,
  NoImage,
  TextContainer,
  Title,
  Description
} from "./ListItem.styled";

interface ListItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  route: string;
}

const ListItem = ({ title, description, icon, id, route }: ListItem) => {
  return (
    <StyledLink to={route}>
      <Container>
        {icon ? <Icon width={150} height="100%" src={icon} /> : <NoImage />}
        <TextContainer>
          <Title>{title}</Title>
          <Description
            dangerouslySetInnerHTML={{ __html: description }}
          ></Description>
        </TextContainer>
      </Container>
    </StyledLink>
  );
};

export default ListItem;
