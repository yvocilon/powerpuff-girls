import styled from "styled-components";

export const TextContainer = styled.div``;

export const TextImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.div``;

export const Image = styled.img`
  max-width: 500px;
  height: auto;
  @media (max-width: 768px) {
    max-width: 200px;
    height: auto;
  }
`;
