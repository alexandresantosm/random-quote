import { render, screen } from "@testing-library/react";

import { ContentQuote } from "../../../../components/molecules/ContentQuote";

describe("Testing atom Speaker.tsx component", () => {
  it("should be able to show the paragraph with speaker text", () => {
    const quoteTest = {
      quote: "My quote",
      speaker: "My speaker",
    };

    render(<ContentQuote {...quoteTest} />);

    const textQuoteEl = screen.getByText(quoteTest.quote);
    const textSpeakerEl = screen.getByText(`- ${quoteTest.speaker}`);

    expect(textQuoteEl).toBeInTheDocument();
    expect(textSpeakerEl).toBeInTheDocument();
  });
});
