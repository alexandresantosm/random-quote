import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing App.tsx", () => {
  it("should be able to show the button", () => {
    render(<App />);
    const buttonEl = screen.getByRole("button");

    expect(buttonEl).toBeInTheDocument();
  });
});
