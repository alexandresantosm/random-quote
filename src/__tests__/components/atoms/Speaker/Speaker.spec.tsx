import { render, screen } from "@testing-library/react";

import { Speaker } from "../../../../components/atoms/Speaker";

describe("Testing atom Speaker.tsx component", () => {
  it("should be able to show the paragraph with speaker text", () => {
    const childrenSpeaker = "My speaker";
    render(<Speaker>{childrenSpeaker}</Speaker>);

    const textSpeakerEl = screen.getByText(`- ${childrenSpeaker}`);

    expect(textSpeakerEl).toBeInTheDocument();
  });
});
