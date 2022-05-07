import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ComicContextProvider from "../../store/contexts/ComicContextProvider";
import ComicAbout from "./ComicAbout";

describe("Given a ComicAbout Component", () => {
  describe("When instantiated with an img", () => {
    test("Then it should render an img", () => {
      const text = "About Comics";

      render(
        <BrowserRouter>
          <ComicContextProvider>
            <ComicAbout />
          </ComicContextProvider>
        </BrowserRouter>
      );

      const expectedText = screen.getByText(text);
      expect(expectedText).toBeInTheDocument();
    });
  });
});
