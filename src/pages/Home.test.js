import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "./Home";

describe("Given a component Home", () => {
  describe("When invoked with the text 'Home'", () => {
    test("Then it should render a div element with the text 'Home", () => {
      const text = "Home";

      render(<Home />);

      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
