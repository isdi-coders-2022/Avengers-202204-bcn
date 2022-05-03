import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Info from "./Info";

describe("Given an info component function", () => {
  describe("When invoked with the numberOfComics '4'", () => {
    test("Then it should render a p element with the text '4 comics", () => {
      const numberOfCOmics = 4;
      const text = "4 Comics";

      render(<Info numberOfComics={numberOfCOmics} />);

      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
