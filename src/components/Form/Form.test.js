import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormText from "./Form";

describe("Given a Form component", () => {
  describe("When it is invoked", () => {
    test("Then it should renderize 1 button elements", () => {
      const expectedNumberOfElements = 1;
      render(<FormText />);
      const inputElement = screen.getAllByRole("button");
      expect(inputElement.length).toEqual(expectedNumberOfElements);
    });
  });
});
