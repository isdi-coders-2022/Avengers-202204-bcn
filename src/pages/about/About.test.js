import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";

import ComicContextProvider from "../../store/contexts/ComicContextProvider";
import APIContextProvider from "../../store/contexts/APIContextProvider";

describe("Given a component Home", () => {
  describe("When invoked with the text 'About Comics'", () => {
    test("Then it should render a span element with the text 'About Comics", () => {
      const text = "About Comics";

      render(
        <BrowserRouter>
          <APIContextProvider>
            <ComicContextProvider>
              <Routes>
                <Route path="*" element={<About />}></Route>
              </Routes>
            </ComicContextProvider>
          </APIContextProvider>
        </BrowserRouter>
      );

      const expectedText = screen.getByText(text);
      expect(expectedText).toBeInTheDocument();
    });
  });
});
