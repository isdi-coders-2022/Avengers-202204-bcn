import { render, screen } from "@testing-library/react";
import HeaderHero from "./HeaderHero";

describe("Given a HeaderHero component", () => {
  describe("When invoked", () => {
    test("Then it should render a div element", () => {
      render(<HeaderHero />);

      const headerHero = screen.getByTestId("headerHero");

      expect(headerHero).toHaveStyle(
        "background: url(/assets/Alien.jpeg) no-repeat center center"
      );
    });
  });
});
