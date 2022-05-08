import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BrowserRouter } from "react-router-dom";

import ComicContextProvider from "../../store/contexts/ComicContextProvider";
import APIContextProvider from "../../store/contexts/APIContextProvider";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When invoked and unsetLoading is set to false", () => {
    test("Then it should not render", () => {
      const apiState = { unsetLoading: false };

      const { container } = render(
        <BrowserRouter>
          <APIContextProvider value={{ apiState }}>
            <ComicContextProvider>
              <Loading />
            </ComicContextProvider>
          </APIContextProvider>
        </BrowserRouter>
      );
      expect(container.innerHTML).toHaveLength(0);
    });
  });
});
