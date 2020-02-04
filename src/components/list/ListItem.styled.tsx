import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 147.5px;
  border: 1px solid gray;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Icon = styled.img`
  min-width: 105px;
  max-width: 105px;
  object-fit: cover;
  border-right: 1px solid gray;
`;

export const NoImage = styled.div`
  background-color: gray;
  min-width: 105px;
  max-width: 105px;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.span`
  height: 100%;
  text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
