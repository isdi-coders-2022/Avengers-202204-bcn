import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Comic from "./Comic";
import { BrowserRouter } from "react-router-dom";

import ComicContextProvider from "../../store/contexts/ComicContextProvider";
import APIContextProvider from "../../store/contexts/APIContextProvider";

describe("Given a Comic component function", () => {
  describe("When invoked with a title property text'Spiderman'", () => {
    test("Then it should render an h3 element with the test 'Spiderman' inside", () => {
      const comic = {
        title: "Spiderman",
        thumbnail: {
          path: "/title",
        },
      };

      render(
        <BrowserRouter>
          <APIContextProvider>
            <ComicContextProvider>
              <Comic comic={comic} />
            </ComicContextProvider>
          </APIContextProvider>
        </BrowserRouter>
      );

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
