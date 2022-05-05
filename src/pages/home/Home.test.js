import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

import ComicContextProvider from "../../store/contexts/ComicContextProvider";

describe("Given a component Home", () => {
  describe("When invoked with the text '4 Comics'", () => {
    test("Then it should render a span element with the text '4 Comics", () => {
      const text = "4 Comics";

      render(
        <BrowserRouter>
          <ComicContextProvider>
            <Routes>
              <Route path="*" element={<Home />}></Route>
            </Routes>
          </ComicContextProvider>
        </BrowserRouter>
      );

      const expectedText = screen.getByText(text);
      expect(expectedText).toBeInTheDocument();
    });
  });
});
