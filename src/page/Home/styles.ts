import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url("https://images.unsplash.com/photo-1628498188904-036f5e25e93e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 720px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const QuoteText = styled.p`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const SpeakerText = styled(QuoteText)`
  font-size: 1rem;
  margin-bottom: 1rem;
  align-self: flex-end;
  margin-bottom: 2rem;
`;

export const NewQuoteButton = styled.button`
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
