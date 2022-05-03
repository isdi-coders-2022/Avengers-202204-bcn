import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";

describe("Given a component Home", () => {
  describe("When invoked with the text 'TITLE'", () => {
    test("Then it should render a span element with the text 'TITLE", () => {
      const text = "TITLE";

      render(
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<App />}></Route>
          </Routes>
        </BrowserRouter>
      );

      const expectedText = screen.getByText(text);
      expect(expectedText).toBeInTheDocument();
    });
  });
});
