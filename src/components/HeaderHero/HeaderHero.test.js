import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderHero from "./HeaderHero";

describe("Given a HeaderHero component", () => {
  describe("When invoked", () => {
    test("Then it should render 4 images elements", () => {
      render(
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<HeaderHero />}></Route>
          </Routes>
        </BrowserRouter>
      );

      const imageElements = screen.getAllByRole("img");

      expect(imageElements.length).toEqual(4);
    });
  });
});
