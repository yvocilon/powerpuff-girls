import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

type List = ReadonlyArray<ListItem>;

interface Props {
  items: List;
}

const Container = styled.div`
  padding: 15px 0;
`;

const List: React.SFC<Props> = ({ items }) => {
  return (
    <Container>
      {items.map(item => (
        <ListItem key={item.id} {...item} />
      ))}
    </Container>
  );
};

export default List;
