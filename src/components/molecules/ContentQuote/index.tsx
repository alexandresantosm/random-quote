import { Quote } from "../../atoms/Quote";
import { Speaker } from "../../atoms/Speaker";

interface ContentQuoteProps {
  quote: string;
  speaker: string;
}

export const ContentQuote = ({
  quote,
  speaker,
}: ContentQuoteProps): JSX.Element => {
  return (
    <>
      <Quote>{quote}</Quote>
      <Speaker>{speaker}</Speaker>
    </>
  );
};
