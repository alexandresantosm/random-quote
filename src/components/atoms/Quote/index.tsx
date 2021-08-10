import { QuoteText } from "./styles";

interface QuoteProps {
  children: string;
}

export const Quote = ({ children }: QuoteProps): JSX.Element => {
  return <QuoteText>{children}</QuoteText>;
};
