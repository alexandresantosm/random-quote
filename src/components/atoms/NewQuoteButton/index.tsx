import { NewQuoteButtonStyled } from "./styles";

interface NewQuoteButtonProps {
  children: string;
  onClick: () => void;
}

export const NewQuoteButton = ({
  children,
  onClick,
}: NewQuoteButtonProps): JSX.Element => {
  return (
    <NewQuoteButtonStyled onClick={() => onClick()}>
      {children}
    </NewQuoteButtonStyled>
  );
};
