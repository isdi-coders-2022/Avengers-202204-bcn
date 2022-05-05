import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Comic from "./Comic";
import { MemoryRouter } from "react-router-dom";

describe("Given a Card component function", () => {
  describe("When invoked with a title property text'Spiderman'", () => {
    test("Then it should render an h3 element with the test 'Spiderman' inside", () => {
      const comic = {
        title: "Spiderman",
        thumbnail: {
          path: "/title",
        },
      };

      render(<Comic comic={comic} />, { wrapper: MemoryRouter });

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
