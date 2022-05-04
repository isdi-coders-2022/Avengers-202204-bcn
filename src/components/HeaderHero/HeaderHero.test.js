import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderHero from "./HeaderHero";

describe("Given a HeaderHero component", () => {
  describe("When invoked", () => {
    test("Then it should render a div element", () => {
      render(
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<HeaderHero />}></Route>
          </Routes>
        </BrowserRouter>
      );

      const headerHero = screen.getByTestId("headerHero");

      expect(headerHero).toBeInTheDocument();
    });
  });
});
