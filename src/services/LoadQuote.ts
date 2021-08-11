import { api } from "./api";

type QuoteType = {
  quote: string;
  author: string;
};

export async function getQuote(): Promise<QuoteType> {
  const { data } = await api(process.env.REACT_APP_API_URL || "");
  const { quote, author }: QuoteType = data.contents.quotes[0];

  return {
    quote,
    author,
  };
}
