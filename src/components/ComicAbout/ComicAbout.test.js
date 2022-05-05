import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ComicContextProvider from "../../store/contexts/ComicContextProvider";
import ComicAbout from "./ComicAbout";

describe("Given a ComicAbout Component", () => {
  describe("When instantiated with an img", () => {
    test("Then it should render an img", () => {
      render(
        <BrowserRouter>
          <ComicContextProvider>
            <ComicAbout />
          </ComicContextProvider>
        </BrowserRouter>
      );
      const img = screen.getByRole("img");
      expect(img).toHaveAttribute("src", "/assets/Alien.jpeg");
      expect(img).toHaveAttribute("alt", "Alien");
    });
  });
});
