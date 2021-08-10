import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing App.tsx", () => {
  it("should be able to show the greeting text", () => {
    render(<App />);
    const greetingEl = screen.getByText(/hello/i);

    expect(greetingEl).toBeInTheDocument();
  });
});
