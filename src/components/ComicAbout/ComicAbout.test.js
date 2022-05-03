import { render, screen } from "@testing-library/react";
import ComicAbout from "./ComicAbout";

describe("Given a ComicAbout Component", () => {
  describe("When instantiated with an img", () => {
    test("Then it should render an img", () => {
      render(<ComicAbout />);
      const img = screen.getByRole("img");
      expect(img).toHaveAttribute("src", "/assets/Alien.jpeg");
      expect(img).toHaveAttribute("alt", "Alien");
    });
  });
});
