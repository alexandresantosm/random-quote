import { NewQuoteButton } from "../../components/atoms/NewQuoteButton";
import { Quote } from "../../components/atoms/Quote";
import { Speaker } from "../../components/atoms/Speaker";

import { Container, Content } from "./styles";

export const Home = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <Quote>Never Stop Learning</Quote>
        <Speaker>Autor desconhecido</Speaker>
        <NewQuoteButton>Nova citação</NewQuoteButton>
      </Content>
    </Container>
  );
};
