import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormText from "./Form";

describe("Given a Form component", () => {
  describe("When it is invoked", () => {
    test("Then it should renderize 4 input elements", () => {
      const expectedNumberOfElements = 4;
      render(<FormText />);
      const inputElement = screen.getAllByRole("textbox");
      expect(inputElement.length).toEqual(expectedNumberOfElements);
    });
  });
});
