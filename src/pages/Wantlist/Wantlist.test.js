import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wantlist from "./Wantlist";

describe("Given a component Home", () => {
  describe("When invoked with the text 'Comic Type:'", () => {
    test("Then it should render a span element with the text 'Comic Type:", () => {
      const text = "Comic Type:";

      render(
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Wantlist />}></Route>
          </Routes>
        </BrowserRouter>
      );

      const expectedText = screen.getByText(text);
      expect(expectedText).toBeInTheDocument();
    });
  });
});
