import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Info from "./Info";

describe("Given an info component function", () => {
  describe("When invoked with the numberOfComics '3'", () => {
    test("Then it should render a p element with the text '3 comics in the list' inside", () => {
      const numberOfCOmics = 3;
      const text = "3 comics in the list";

      render(<Info numberOfComics={numberOfCOmics} />);

      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
