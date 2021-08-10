import { NewQuoteButton } from "../../components/atoms/NewQuoteButton";
import { ContentQuote } from "../../components/molecules/ContentQuote";

import { Container, Content } from "./styles";

export const Home = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <ContentQuote
          quote="Never Stop Learning"
          speaker="Autor desconhecido"
        />
        <NewQuoteButton>Nova citação</NewQuoteButton>
      </Content>
    </Container>
  );
};
