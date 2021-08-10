import {
  Container,
  Content,
  QuoteText,
  SpeakerText,
  NewQuoteButton,
} from "./styles";

export const Home = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <QuoteText>Never Stop Learning</QuoteText>
        <SpeakerText>- Autor desconhecido</SpeakerText>
        <NewQuoteButton>Nova citação</NewQuoteButton>
      </Content>
    </Container>
  );
};
