import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonLoad from "./ButtonLoad";

describe("Given a ButtonLoad component function", () => {
  describe("When invoked", () => {
    test("Then it should render a button element", () => {
      render(<ButtonLoad />);

      const buttonElement = screen.getByRole("button");

      expect(buttonElement).toBeInTheDocument();
    });
  });

  describe("When invoked whit an onClick function", () => {
    test("Then it should invoke a function", () => {
      const action = jest.fn();

      render(<ButtonLoad action={action} />);

      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
});
