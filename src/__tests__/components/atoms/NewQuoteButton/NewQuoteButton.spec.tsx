import { render, screen } from "@testing-library/react";

import { NewQuoteButton } from "../../../../components/atoms/NewQuoteButton";

describe("Testing atom NewQuoteButton.tsx component", () => {
  it("should be able to show the button with some text", () => {
    const textButton = "My buttom";
    render(<NewQuoteButton>{textButton}</NewQuoteButton>);

    const textButtonEl = screen.getByText(textButton);
    const buttonEl = screen.getByRole("button");

    expect(textButtonEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
  });
});
