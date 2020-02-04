import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
`;

export const Input = styled(DebounceInput)`
  font-size: 20px;
  width: 100%;
  margin: 10px 0;
`;

export const Suggestion = styled.button`
  background-color: lightblue;
  border: none;
  font-size: 18px;
  padding: 10px;
  border-radius: 15px;
  margin: 5px 15px 5px 0;
  display: inline-block;
  cursor: pointer;
`;
