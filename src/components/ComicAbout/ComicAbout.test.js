import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import APIContextProvider from "../../store/contexts/APIContextProvider";
import ComicContextProvider from "../../store/contexts/ComicContextProvider";
import ComicAbout from "./ComicAbout";

describe("Given a ComicAbout Component", () => {
  describe("When instantiated with an img", () => {
    test("Then it should render an img", () => {
      const text = "About Comics";

      render(
        <BrowserRouter>
          <APIContextProvider>
            <ComicContextProvider>
              <ComicAbout />
            </ComicContextProvider>
          </APIContextProvider>
        </BrowserRouter>
      );

      const expectedText = screen.getByText(text);
      expect(expectedText).toBeInTheDocument();
    });
  });
});
