import styled from "styled-components";

import Button from "../Button";

export const NewQuoteButtonStyled = styled(Button)`
  width: 12rem;
  background-color: gray;
  color: #fff;
  font-size: medium;
  font-weight: bold;
  padding: 1rem 0.5rem;
  align-self: center;
  box-shadow: 2px 2px 2px #fff;
  transition: all 0.5s;

  &:hover {
    background-color: #fff;
    color: gray;
    box-shadow: 2px 2px 2px gray;
    filter: brightness(0.9);
  }
`;
