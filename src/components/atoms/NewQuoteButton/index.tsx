import { NewQuoteButtonStyled } from "./styles";

interface NewQuoteButtonProps {
  children: string;
}

export const NewQuoteButton = ({
  children,
}: NewQuoteButtonProps): JSX.Element => {
  return <NewQuoteButtonStyled>{children}</NewQuoteButtonStyled>;
};
