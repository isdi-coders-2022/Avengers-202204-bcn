import { screen, render } from "@testing-library/react";
import Search from "./Search";

describe("Given a Search component function", () => {
  describe("When invoked", () => {
    test("Then it should render an input element", () => {
      render(<Search />);

      const searchElement = screen.getByRole("textbox");

      expect(searchElement).toBeInTheDocument();
    });
  });
});
