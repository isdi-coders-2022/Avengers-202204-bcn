import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wantlist from "./SelectedComiclist";
import ComicContextProvider from "../../store/contexts/ComicContextProvider";
import APIContextProvider from "../../store/contexts/APIContextProvider";

describe("Given a component Home", () => {
  describe("When invoked with the text 'Comic Type:'", () => {
    test("Then it should render a span element with the text 'Comic Type:", () => {
      const text = "Comics List";

      render(
        <BrowserRouter>
          <APIContextProvider>
            <ComicContextProvider>
              <Routes>
                <Route path="*" element={<Wantlist />}></Route>
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
