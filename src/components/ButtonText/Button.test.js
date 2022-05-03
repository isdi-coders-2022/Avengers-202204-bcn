import { render, screen } from "@testing-library/react";
import ButtonText from "./ButtonText";

describe("Given a button component", () => {
  describe("When it receives a text'DELETE'", () => {
    test("It should renderize it on it", () => {
      const givenText = ["DELETE"];

      render(<ButtonText text={givenText} />);
      const textElement = screen.getByRole("button");
      expect(textElement).toBeInTheDocument();
    });
  });
});
