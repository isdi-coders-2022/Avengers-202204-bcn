import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Given a component Home", () => {
  describe("When invoked with the text 'Home'", () => {
    test("Then it should render a div element with the text 'Home", () => {
      render(<Home />, { wrapper: MemoryRouter });

      const expectedImg = screen.getByRole("img");

      expect(expectedImg).toBeInTheDocument();
    });
  });
});
