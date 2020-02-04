import styled from "styled-components";

export const TextContainer = styled.div``;

export const TextImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.div``;

export const Image = styled.img`
  width: 440px;
  height: 500px;

  @media (max-width: 768px) {
    width: 220px;
    height: 225px;
  }
`;
