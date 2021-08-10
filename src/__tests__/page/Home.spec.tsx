import { render, screen } from "@testing-library/react";

import { Home } from "../../page/Home";

describe("Testing Home.tsx", () => {
  it("should be able to show the quote text, speaker text and button", () => {
    render(<Home />);
    const quoteEl = screen.getByText(/Quote test/i);
    const speakerEl = screen.getByText(/Speaker test/i);
    const buttonEl = screen.getByRole("button");

    expect(buttonEl).toBeInTheDocument();
  });
});
