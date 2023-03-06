import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../ui/layouts/Header";
import AudioPlayer from "../ui/components/AudioPlayer/AudioPlayer";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("Layout", () => {
  it("Should render the header", async () => {
    render(<Header />);
    const layout = await screen.getByTestId("header");
    expect(layout).toBeInTheDocument();
  });
  it("Should render the audioplayer", async () => {
    render(<AudioPlayer />);
    const layout = await screen.getByTestId("player");
    expect(layout).toBeInTheDocument();
  });
});
