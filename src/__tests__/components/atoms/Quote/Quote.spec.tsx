import { render, screen } from "@testing-library/react";

import { Quote } from "../../../../components/atoms/Quote";

describe("Testing atom Quote.tsx component", () => {
  it("should be able to show the paragraph with quote text", () => {
    const childrenQuote = "My quote";
    render(<Quote>{childrenQuote}</Quote>);

    const textQuoteEl = screen.getByText(childrenQuote);

    expect(textQuoteEl).toBeInTheDocument();
  });
});
