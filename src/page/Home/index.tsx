import { useState } from "react";

import { NewQuoteButton } from "../../components/atoms/NewQuoteButton";
import { ContentQuote } from "../../components/molecules/ContentQuote";
import { getQuote } from "../../services/LoadQuote";

import { Container, Content } from "./styles";

export const Home = (): JSX.Element => {
  const initalState = {
    quote: "Never Stop Learning",
    speaker: "Autor desconhecido",
  };

  const [quote, setQuote] = useState(initalState);

  async function handleNewQuote() {
    const { quote, speaker } = await getQuote();

    setQuote({ quote, speaker });
    console.log(quote);
  }

  return (
    <Container>
      <Content>
        <ContentQuote {...quote} />
        <NewQuoteButton onClick={() => handleNewQuote()}>
          Nova citação
        </NewQuoteButton>
      </Content>
    </Container>
  );
};
