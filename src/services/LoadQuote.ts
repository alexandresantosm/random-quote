import { api } from "./api";

type QuoteType = {
  quote: string;
  speaker: string;
};

interface QuoteResponse {
  quote: string;
  author: string;
}

export async function getQuote(): Promise<QuoteType> {
  const { data } = await api(process.env.REACT_APP_API_URL || "", {
    params: {
      language: "en",
      limit: 1,
    },
    headers: {
      accept: "application/json",
    },
  });
  const { quote, author: speaker }: QuoteResponse = data.contents.quotes[0];

  return {
    quote,
    speaker,
  };
}
