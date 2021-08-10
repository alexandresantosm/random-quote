import { render, screen } from "@testing-library/react";

import { Home } from "../../page/Home";

describe("Testing Home.tsx", () => {
  it("should be able to show the quote text, speaker text and button", () => {
    render(<Home />);
    const quoteEl = screen.getByText(/Never Stop Learning/i);
    const speakerEl = screen.getByText(/- Autor desconhecido/i);
    const buttonEl = screen.getByRole("button");

    expect(quoteEl).toBeInTheDocument();
    expect(speakerEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
  });
});
